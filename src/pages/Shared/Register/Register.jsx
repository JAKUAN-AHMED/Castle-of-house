import login_image from "../../../assets/login_image.jpg";
import { useContext, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../../Utility/Provider/ProviderContext";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../../Utility/Firebase/firebase.config";

const Register = () => {
  const [show, setShow] = useState(false);
  const passRef = useRef();
  const { CreateUser, google, github } = useContext(AuthContext);
  const auth = getAuth(app);
  const [Error, setError] = useState(null);

  const handleGoogle = () => {
    google()
      .then((result) => {
        toast.success("Signed in with Google");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Google sign-in error:", error);
      });
  };

  const handleGithub = () => {
    github()
      .then((result) => {
        toast.success("Signed in with GitHub");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
        console.error("GitHub sign-in error:", error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");
    const pass = passRef.current.value;

    setError("");
    if (pass.length < 6) {
      setError("Password must be 6 characters or longer");
    } else if (!/[A-Z]/.test(pass)) {
      setError("Password should have at least one uppercase letter");
    } else if (!/[a-z]/.test(pass)) {
      setError("Password should have at least one lowercase letter");
    } else {
      // Create user
      CreateUser(email, password)
        .then((res) => {
          toast.success("Registered Successfully");
          console.log(res.user);

          // Update profile
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
          })
            .then(() => {
              console.log("Profile updated");
            })
            .catch((error) => {
              setError(error.message);
              console.error("Profile update error:", error);
            });

          e.target.reset();
        })
        .catch((error) => {
          setError(error.message);
          console.error("Registration error:", error);
        });
    }
  };

  const isDisabled = Error !== null;

  return (
    <div>
      <Helmet>
        <title>Register || Castle of houses</title>
      </Helmet>
      <Navbar />
      <div className="hero bg-base-200 max-w-6xl mx-auto mb-8 mt-8">
        <div className="hero-content flex-col lg:flex-row justify-between">
          <div className="text-center w-80 lg:text-left pr-6 lg:mr-12">
            <h1 className="text-4xl font-bold text-blue-60">
              Register <span className="text-yellow-400">Please</span>
            </h1>
            <h3 className="text-base font-bold mt-">
              & Explore <span className="text-yellow-600">Our</span>{" "}
              <span className="text-blue-600">website</span>
            </h3>
            <img
              loading="lazy"
              className="w-[400px] rounded-lg border shadow-md"
              src={login_image}
              alt="Login"
            />
          </div>
          <div className="card bg-base-100 w-80 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "password" : "text"}
                  name="password"
                  ref={passRef}
                  placeholder="Password"
                  className="input input-bordered relative"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className={`absolute left-[80%] ${
                    Error ? "top-[55%]" : "top-[60%]"
                  }`}
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </span>
                {Error && <p className="text-red-600 text-base">{Error}</p>}
              </div>
              <div className="form-control mt-6">
                <button
                  className={`btn btn-primary bg-[#fff5f5] text-blue-400 hover:bg-slate-100 hover:text-yellow-400 ${
                    isDisabled ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isDisabled}
                >
                  Register
                </button>
              </div>
            </form>
            <p className="text-center text-blue-400">OR</p>
            <div className="text-center">
              <button
                onClick={handleGoogle}
                className="btn btn-circle bg-yellow-400 mr-4 text-black"
              >
                <FaGoogle />
              </button>
              <button
                onClick={handleGithub}
                className="btn btn-circle bg-black text-white"
              >
                <FaGithub />
              </button>
            </div>
            <p className="text-center">
              Already Registered? Please{" "}
              <Link className="link" to="/login">
                <button className="link">Login</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
