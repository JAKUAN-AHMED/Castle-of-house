import { Helmet } from "react-helmet";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Utility/Provider/ProviderContext";

import { MdOutlineMailLock } from "react-icons/md";
const UpdateProfile = () => {
    const {User}=useContext(AuthContext);
    return (
      <div>
        <Helmet>
          <title>Update Profile</title>
        </Helmet>
        <Navbar></Navbar>
        <div className="grid grid-cols-1 md:grid-cols-2 text mt-12 mb-6 w-90 text-center card border rounded shadow-md p-8">
          <div>
            <img src={User.photoURL} alt="" />
          </div>
          <div className="flex flex-col text-center justify-center">
            <h2 className="text-blue-400 text-4xl font-bold mb-4">
              {User.displayName}
            </h2>
            <p className="flex items-center justify-center gap-2">
              <span>
                <MdOutlineMailLock></MdOutlineMailLock>
              </span>
              <span className="text-base text-red-600">{User.email}</span>
            </p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default UpdateProfile;