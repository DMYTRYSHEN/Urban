import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Стилі для каруселі

const CustomCarousel = () => {
  const slides = [
    {
      img: "assets/img/Group%204.jpg",
      title: "Welcome to Deals!",
      subtitle:
        "Meet Deals - your all-in-one financial management tool. Everything you need for payments, now in your pocket app.",
      buttonText: "Learn More",
    },
    {
      img: "assets/img/as6yz0lW72WUKLeg6OrxFD4xPZY2N.gif",
      title: "Fast and secure payments",
      subtitle:
        "Use Deals for instant payments worldwide. Our state-of-the-art security system guarantees safety of every transaction.",
      buttonText: "Learn More",
    },
    // Додайте інші слайди
  ];

  return (
    <div className="text-center p-0 p-lg-5">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="rounded-3xl"
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[700px]">
            <img
              src={slide.img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40">
              <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-blue-300">
                {slide.title}
              </h1>
              <h2 className="my-3 text-white text-xl font-semibold">
                {slide.subtitle}
              </h2>
              <button className="px-6 py-2 mt-5 border border-white rounded-full text-white hover:bg-white hover:text-black">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
