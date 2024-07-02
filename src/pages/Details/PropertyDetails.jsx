import { Link, useLoaderData, useParams} from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import { getData} from "../../Utility/Localstorage/Localstorage";
import Footer from "../Shared/Footer/Footer";
import { GiMoneyStack } from "react-icons/gi";
import { TiChartAreaOutline } from "react-icons/ti";
import { MdOutlineSignalWifiStatusbarNull } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Helmet } from "react-helmet";


const PropertyDetails = () => {
  const infos = useLoaderData();
  const {id}=useParams();
  const idInt=parseInt(id);
  const info=infos.find((info)=>info.id===idInt)
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    const stored = getData();
    if (infos.length > 0) {
      const visits = infos.filter((visit) => stored.includes(visit.id));
      setDisplay(visits);
    }
  }, [infos]);

  

  return (
    <div>
      <Helmet>
        <title>Details Property || Castle of houses</title>
      </Helmet>
      <Navbar />
      {display.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-6 mb-6">
          <h1 className="text-4xl font-bold text-red-600">
            Property Not Found
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Sorry, we couldn't find the property you're looking for.
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            <Link to={"/"}> Go Back</Link>
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
              <Link to={`/res/${data.id}`}>
                <button className="btn btns-square bg-yellow-200">Back</button>
              </Link>
            </div>
          </div>
        ))
      )}
      <Footer />
    </div>
  );
};

export default PropertyDetails;
