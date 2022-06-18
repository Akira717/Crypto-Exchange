import React,{ useState } from 'react';

import background_img from '../../image/background.jpg';
import slider1 from '../../image/background-1 .jpg';
import slider2 from '../../image/background-2 .jpg';
import slider3 from '../../image/background-3.jpg';
import slider4 from '../../image/background-4.jpg';
import slider5 from '../../image/background-5.jpg';
import {Swiper, SwiperSlide} from 'swiper/react';
import './ConverStyle.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from '../ButtonElements';


import { Pagination, Navigation } from "swiper";

import { CoverContainer, CoverBg,  ImgBg, CoverContent, CoverH1, CoverP, CoverBtnWrapper, ArrowForward, ArrowRight } from './converElements';

const CoverSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  
  return (
    <CoverContainer>
      <CoverBg>
        <ImgBg src={background_img}/> 
      </CoverBg>
      <CoverContent>
        <CoverH1>Trade like a legent</CoverH1>
        <CoverP>legendary crypto exchange</CoverP>
        <CoverBtnWrapper>
          <Button to="/login" onMouseEnter={onHover} onMouseLeave={onHover} >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </CoverBtnWrapper>
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide> <img src={slider1}/> </SwiperSlide>
          <SwiperSlide> <img src={slider2}/> </SwiperSlide>
          <SwiperSlide> <img src={slider3}/> </SwiperSlide>
          <SwiperSlide> <img src={slider4}/> </SwiperSlide>
          <SwiperSlide> <img src={slider5}/> </SwiperSlide>
        </Swiper>
      </CoverContent>
        
      
    </CoverContainer>
  );
};

export default CoverSection;
