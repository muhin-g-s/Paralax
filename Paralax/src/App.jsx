
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Mousewheel, Parallax } from 'swiper/modules';

import "swiper/css"
import 'swiper/css/pagination';


const breakpoints = {
    0: {
        slidesPerView: 2.5,
        spaceBetween: 20
    },
    680: {
        slidesPerView: 3.5,
        spaceBetween: 60
    }
}

const slides = [...Array(9)].map((_, index) => (
    <SwiperSlide key={index} className="slider__item">
        <div
            data-swiper-parallax={"30%"}
            className="slider__img"
            style={{
                backgroundImage: `url("src/assets/images/${index + 1}.jpg")`,
            }}
        ></div>
    </SwiperSlide>
))

const swiperConfig = {
    modules: [Mousewheel, Parallax, Controller],
    freeMode: {
        enabled: true,
        sticky: false,
    },
    centeredSlides: true,
    breakpoints: breakpoints,
    mousewheel: true,
    parallax: true,
    effect: "fade"
}

function App() {

    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [swipe, setSwipe] = useState(false)

    console.log(swipe)
    return (
        <>
            <div className={swipe ?  "hidden description" : "description"}>
                <div className="logo">Miami</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, deleniti nisi maxime ipsa temporibus obcaecati totam recusandae illo minus. Placeat nulla iusto illum nemo voluptas doloremque ab similique cupiditate rerum.</p>
            </div>

            <Swiper
                {...swiperConfig}
                controller={{ control: controlledSwiper }}
                className="slider"
                onSlideChange={() => setSwipe(true)}
                onReachBeginning={() => setSwipe(false)}
            >
                {slides}
            </Swiper>

            <Swiper {...swiperConfig} onSwiper={setControlledSwiper} className="slider-bg">
                {slides}
            </Swiper>
        </>
    )
}

export default App
