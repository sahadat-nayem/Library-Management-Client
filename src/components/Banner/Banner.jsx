import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slide from "./Slide";


export default function Banner () {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/4nQYnmcz/premium-photo-1677567996070-68fa4181775a.jpg"
            text="Unlock Knowledge with Online Libraries!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/mxTfX17/1-6-Jp3v-JWe7-VFl-FHZ9-Wh-SJng.jpg"
            text="Thousands of Books at Your Fingertips!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/G460LLZz/San-Diego-City-College-Learning-Resource-bookshelf.jpg"
            text="Explore Endless Resources in Online Libraries!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/hxcS4VSk/library-book-haven-stockcake.jpg"
            text="Read, Learn, and Grow Freely!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/FkLKCjrz/hero.jpg"
            text=" Start Your Digital Reading Journey Today!"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

