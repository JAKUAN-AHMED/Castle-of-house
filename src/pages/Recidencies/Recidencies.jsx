import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';
import 'swiper/css';
import './Recidencies.css';
import data from '../../../public/data.json';
import { IoPricetagsOutline } from "react-icons/io5";
import { sliderSettings } from './Recidencies.js';
const Recidencies = () => {
  console.log(data)
    return (
      <section>
        <div className="paddings innerWidth r-container">
          <div className="head flexColStart mt-12 mb-12">
            <span className="orangeText">Our</span>
            <span className="primaryText">Best Recidencies</span>
          </div>
          <Swiper {...sliderSettings}>
            <SliderButtons />
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="" />
                  <span className="secondaryText r-price flex items-center gap-2">
                    <span>
                      <IoPricetagsOutline></IoPricetagsOutline>
                    </span>
                    <span className="text-yellow-600">
                      Price : {card.price}
                    </span>
                  </span>
                  <span className="primaryText">{card.estate_title}</span>

                  <span className="secondaryText">{card.description}</span>
                  <button className="btn w-24 text-[12px] p-1 btn-square bg-yellow-400 text-black">
                    View Property
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
};

export default Recidencies;
const SliderButtons=()=>{
  const swiper=useSwiper();
  return (
    <div className="r-buttons gap-2">
      <button className='mr-2' onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
}