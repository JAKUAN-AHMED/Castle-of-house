import { IoPricetagsOutline } from "react-icons/io5";
import { FaChartArea } from "react-icons/fa";
const Recidence = ({ house }) => {
  const { image, id, segment_name, price, status, descrition, area,estate_title } = house;
  return (
    <div className="card bg-base-100 font-popins  shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={id} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{estate_title}</h2>
        <p>{descrition}</p>
        <p className="text-blue-600 flex items-center gap-2">
          <IoPricetagsOutline></IoPricetagsOutline> Price : {price}
        </p>
        <p className="text-red-600 flex items-center gap-2"><FaChartArea></FaChartArea> Area : {area}</p>
        <div className="card-actions">
          <button className="btn btns-squre bg-yellow-400 text-black">
            View Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recidence;
