import login_image from '../../../assets/login_image.jpg'
import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { AuthContext } from '../../../Utility/Provider/ProviderContext';
import { Link } from 'react-router-dom';
const Register = () => {
  const { CreateUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 max-w-6xl mx-auto mb-8 mt-8">
        <div className="hero-content flex-col lg:flex-row justify-between">
          <div className="text-center w-80 lg:text-left pr-6 lg:mr-12">
            <h1 className="text-4xl font-bold text-blue-600 mt-4">
              Register <span className="text-yellow-400">Please</span>{" "}
            </h1>
            <h3 className="text-base font-bold mt-2 mb-4">
              {" "}
              & Explore <span className="text-yellow-600">Our</span>{" "}
              <span className="text-blue-600">website</span>
            </h3>
            <img
              loading="lazy"
              className="w-[400px] rounded-lg border shadow-md"
              src={login_image}
              alt=""
            />
          </div>
          <div className="card bg-base-100 w-80 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
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
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary bg-[#fff5f5] text-blue-400 hover:bg-slate-100 hover:text-yellow-400">
                  Register
                </button>
              </div>
            </form>
            <p className="text-center">
              Already Registered? Please{" "}
              <Link className="link" to={"/login"}>
                <button className="link">Login</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
