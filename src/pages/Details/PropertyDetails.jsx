import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import { getData, saveData } from "../../Utility/Localstorage/Localstorage";
import Footer from "../Shared/Footer/Footer";
import { GiMoneyStack } from "react-icons/gi";
import { TiChartAreaOutline } from "react-icons/ti";
import { MdOutlineSignalWifiStatusbarNull } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import toast from "react-hot-toast";
import { SiNetdata } from "react-icons/si";

const PropertyDetails = () => {
  const infos = useLoaderData();
  const { id } = useParams();
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const visitProperty = getData();
    if (infos.length > 0) {
      const visits = infos.filter((visit) => visitProperty.includes(visit.id));
      setDisplay(visits);
    }
  }, [infos]);

  const handleRemoveData = (id) => {
    const storageData = getData();
    const updatedData = storageData.filter((item) => item !== id);
    localStorage.setItem("Items", JSON.stringify(updatedData));
    // saveData(updatedData)
    setDisplay(display.filter((item) => item.id !== id));
    toast.success("Data Successfully Removed!");
  };

  return (
    <div>
      <Navbar />
      {display.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-12 mb-4">
          <h1 className="lg:text-4xl font-bold text-red-600 text-centers">
            Property Not Found
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Sorry, we couldn't find the property you're looking for.
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            <Link to={'/'}> Go Back</Link>
          </button>
        </div>
      ) : (
        display.map((data) => (
          <div
            key={data.id}
            className="grid grid-cols-1 lg:grid-cols-2 mt-12 mb-24 justify-around gap-8 card border rounded-lg shadow-lg font-popins p-4"
          >
            <div className="border rounded-lg shadow-lg p-8">
              <img src={data.image} alt="" />
            </div>
            <div className="flex flex-col text-center justify-center items-center gap-4">
              <h2 className="text-5xl text-blue-400 font-bold">
                {data.estate_title}
              </h2>
              <hr />
              <h3 className="text-2xl text-yellow-600 font-bold">
                {data.segment_name}
              </h3>
              <hr />
              <p className="text-base font-semibold flex items-center gap-2">
                <span>
                  <MdOutlineSignalWifiStatusbarNull />
                </span>
                <span className="text-yellow-600">Status :</span> {data.status}
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <GiMoneyStack />
                </span>
                Price : ${data.price}
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <TiChartAreaOutline />
                </span>
                Area : {data.area}
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <CiLocationOn />
                </span>
                Location : {data.location}
              </p>
              <p className="md:flex gap-2">
                <span className="text-xl text-blue-600">Facilities: </span>
                {data.facilities.map((facility, idx) => (
                  <p className="text-red-400" key={idx}>
                    # {facility}
                  </p>
                ))}
              </p>
              <p>
                <span className="text-2xl font-medium">Description</span>
                {" : "} {data.description}
              </p>
              <button
                onClick={() => handleRemoveData(data.id)}
                className="btn btns-square bg-yellow-200"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <Footer />
    </div>
  );
};

export default PropertyDetails;