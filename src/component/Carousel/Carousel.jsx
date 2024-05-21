import React from 'react'
import './Carousel.css'
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
        style={{ ...style, display: "block", right: '25px',  zIndex: '20'  }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className }
        style={{ ...style, display: "block", left: '25px' , zIndex: '20'
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
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    // slidesToScroll: 3,
    // pauseOnHover: true
  };

  return (
    <>
      <div className=' h-[600px] sm:h-[550px] md:h-[580px] bg-black/50 '>
      {/* <div className=' h-[150px] bg-black/50 '> */}
      <Slider {...settings}>
        {
           carouselData.map((item) => {
            const {id , movieName , image , title_img , description , img_width , margin_b , scaleX } = item ;
            // alert(img_width)
            return (   
            <div  id='carouselSlide' key={id} className="carouselSlide relative bg-black w-full border-none  h-[600px] sm:h-[550px] md:h-[580px] xl:h-[600px] ">
              
              <img src={image} alt={movieName} className= {`size-full h-full object-cover scale-x-[${scaleX}] object-center `} />

              <div className="absolute z-10 bottom-6 px-16 md:px-20 pb-9 md:pb-12  " >
                <div className= {` w-[250px] ${img_width}  ${margin_b} `} >
                  <img src={title_img} alt={`movie title image`} className=" size-full object-cover object-center lg:object-top xl:object-top " />
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
    </>
  )
}

export default Carousel