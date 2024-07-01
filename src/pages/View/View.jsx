import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const View = () => {
    const properties=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    const property=properties.find(property=>property.id===idInt);
    return (
      <div className="max-w-5xl mx-auto">
        <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-50  border rounded  gap-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-10">
            <div className="bg-[#1313130D] border rounded shadow-lg p-4">
              <img
                src={property.image}
                className="rounded-lg md:w-[450px] md:h-[450px]"
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
                <span className="text-2xl font-bold">Description:</span>
                {property.description}
              </p>
              <h2 className="work_sens md:flex gap-4 items-center mt-4">
                <p>
                  <span className="text-2xl font-bold">Facilities:</span>
                </p>
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
                  <span className="text-[#131313B2]">Location</span>:
                  <span className="ml-2">{property.location}</span>
                </p>
                <p>
                  <span className="text-[#131313B2]">Area :</span>
                  <span className="ml-2">{property.area}</span>
                </p>
                <p>
                  <span className="text-[#131313B2]">Status</span>:
                  {property.status}
                </p>
                <p>
                  <span className="text-[#131313B2]">Price : </span>
                  {property.price}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default View;