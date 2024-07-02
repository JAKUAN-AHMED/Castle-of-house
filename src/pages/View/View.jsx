// Views/View.js

import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { removeItem, saveData } from "../../Utility/Localstorage/Localstorage";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const View = () => {
  const properties = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const property = properties.find((property) => property.id === idInt);

  const handleAdd = () => {
    saveData(idInt);
    toast.success("Item added to property details page");
  };

  const handleRemove = () => {
    removeItem(idInt);
    toast.success("Item removed from saved items");
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Helmet>
        <title>View || Castle of houses</title>
      </Helmet>
      <Navbar />
      <div className="hero min-h-screen bg-base-50 border rounded gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-10">
          <div className="bg-[#1313130D] border rounded shadow-lg p-4">
            <img
              src={property.image}
              className="rounded-lg md:w-[450px] md:h-[450px]"
              alt="Property"
            />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold font-popins text-blue-600">
              {property.estate_title}
            </h2>
            <div className="p-2 mb-6 mt-12">
              <p className="border-t border-dashed border-[#13131326]"></p>
              <p className="work_sens">{property.segment_name}</p>
              <p className="border-t border-dashed border-[#13131326]"></p>
            </div>
            <p className="work_sens">
              <span className="text-2xl font-bold">Description:</span>{" "}
              {property.description}
            </p>
            <h2 className="work_sens md:flex gap-4 items-center mt-4">
              <span className="text-2xl font-bold">Facilities:</span>
              {property.facilities.map((facility, id) => (
                <p className="w-[150px] h-[50px] text-blue-400" key={id}>
                  #{facility}
                </p>
              ))}
            </h2>
            <div className="p-2 mb-6 mt-12 ">
              <p className="border-t border-dashed border-[#13131326]"></p>
            </div>
            <div className="font-semibold text-base p-2 work_sens">
              <p>
                <span className="text-[#131313B2]">Location</span>:{" "}
                <span className="ml-2">{property.location}</span>
              </p>
              <p>
                <span className="text-[#131313B2]">Area :</span>{" "}
                <span className="ml-2">{property.area}</span>
              </p>
              <p>
                <span className="text-[#131313B2]">Status</span>:{" "}
                {property.status}
              </p>
              <p>
                <span className="text-[#131313B2]">Price : </span>
                {property.price}
              </p>
            </div>
            <div className="mt-4 gap-2">
              <button
                onClick={handleAdd}
                className="text-base btn btns-squre bg-red-200 w-[150px] h-[50px] text-blue-400"
              >
                Add
              </button>
              <button
                onClick={handleRemove}
                className="btn btns-square bg-yellow-200"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default View;
