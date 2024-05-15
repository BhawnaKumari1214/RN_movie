import React from 'react'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from '../../utils/CarouselData';


function Carousel() {

    
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: '30px' , zIndex: '20'  }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className }
        style={{ ...style, display: "block", left: '30px' , zIndex: '20'
      }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    dotsClass: 'slick-dots custom-dots-class',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    // slidesToScroll: 3,
    // pauseOnHover: true
  };

  return (
    <div>
           <Slider {...settings}>
        {
           carouselData.map((item) => {
            const {id , movieName , image , title_img , description , img_width , margin_b , scaleX } = item ;
            // alert(img_width)
            return (
            <div  id='carouselSlide' key={id} className="carouselSlide relative bg-black h-[500px] sm:h-[550px] md:h-[630px] ">
              <img src={image} alt={movieName} className= {`h-full w-full object-cover scale-x-[${scaleX}] object-center `} />

              <div className="absolute z-10 bottom-6 px-16 md:px-20 pb-9 md:pb-12  " >
                <div className= {` w-[250px] ${img_width}  ${margin_b} `} >
                  <img src={title_img} alt={`movie title image`} className=" size-full object-cover object-center lg:object-top " />
                </div>
                <div className= {` max-w-[950px] text-base text-zinc-50/75`} >
                 <p > {description} </p>
                </div>
              </div>
            </div>
           )}
          )
        }
      </Slider>
    </div>
  )
}

export default Carousel