import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Recidencies.css";
import { IoPricetagsOutline } from "react-icons/io5";
import { sliderSettings } from "./Recidencies.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Recidencies = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <section id="res" className="wrapper">
      <Helmet>
        <title>Recidencies || Castle of houses</title> 
      </Helmet>
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart mt-12 mb-12">
          <span className="orangeText">Our</span>
          <span className="primaryText">Best Recidencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {info.map((card, i) => (
            <SwiperSlide key={i}>
              <div
                data-aos="fade-down"
                // data-aos-duration="1500"
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 "
              >
                <img
                  loading="lazy"
                  src={card.image}
                  alt={card.estate_title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-2">
                    {card.estate_title}
                  </h2>

                  <p className="text-gray-700 mb-2 flex gap-2">
                    <strong className="flex items-center gap-2">
                      <span>
                        <IoPricetagsOutline></IoPricetagsOutline>
                      </span>{" "}
                      <span className="text-yellow-600">Status</span> :
                    </strong>{" "}
                    {card.status}
                  </p>

                  <p className="text-gray-700 mb-2">
                    <strong>Area:</strong> {card.area}
                  </p>
                  <button className="btn btn-square bg-yellow-400 text-black w-24 text-[12px]">
                    <Link to={`/res/${card.id}`}>View Property </Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Recidencies;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons gap-2">
      <button className="mr-2" onClick={() => swiper.slidePrev()}>
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
