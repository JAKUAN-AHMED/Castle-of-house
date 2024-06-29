import { useEffect, useState } from "react";
import Recidence from "../Recidence/Recidence";

const Recidencies = () => {
    const [houses,setHouses]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setHouses(data));
    },[])
    return (
      <div className="mt-24">
        <h2 className="text-4xl font-bold  text-center">
          {" "}
          <span className="text-yellow-600">Our</span>{" "}
          <span>Excellent</span>{" "}
          <span className="text-blue-600">Recedencies</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {houses.map((house) => (
            <Recidence key={house.id} house={house}></Recidence>
          ))}
        </div>
      </div>
    );
};

export default Recidencies;