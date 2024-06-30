import contact_photo from '../../assets/contact_photo.jpg';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
const Contact_us = () => {
    
    return (
      <div>
        <Navbar></Navbar>
        <div className="hero bg-base-200 min-h-screen mb-8 mt-8">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-blue-600 mt-4">
                Contact <span className="text-yellow-400">Us</span>{" "}
              </h1>
              <img
                className="w-[400px] rounded-lg border shadow-md"
                src={contact_photo}
                alt=""
              />

              <p className="py-6">
                Establishing a strong connection requires open communication,
                mutual understanding, and shared goals between individuals or
                entities involved.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
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
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Send me Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary bg-[#fff5f5] text-blue-400 hover:bg-slate-100 hover:text-yellow-400">
                    Sent
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Contact_us;