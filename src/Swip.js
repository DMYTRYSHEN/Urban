// import React, { useState } from 'react';

// const Swip = () => {        
//     return (

//  <section class="py-24 ">
//         <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
//           <div class="pb-16">
//             <h2 class="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-loose pb-2.5">Our Gallery</h2>
//             <p class="w-full text-center text-gray-600 text-lg font-normal leading-8">Explore the essence of beauty in our gallery's intimate space.</p>
//           </div>
        
        
//            <div class="mx-auto w-auto relative">
//               <button id="slider-button-left" class="top-[35%] swiper-button-prev w-11 h-11 p-3 xl:flex hidden shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] items-center justify-center border border-gray-300 rounded-lg group hover:bg-gray-900 transition-all duration-700 ease-in-out">
//                 <svg class="text-gray-900 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                   <path d="M12.5002 14.9999L7.50005 9.99973L12.5032 4.99658" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
//                 </svg>
//               </button>
//               <div class="swiper-container gallery-top w-full md:w-[1028px] mx-auto xl:overflow-hidden pt-6">
//                 <div class="swiper-wrapper w-max mx-auto mb-5 flex gap-3">
//                   <div class="swiper-slide max-w-[319px] grid">
//                     <img class="grow shrink basis-0 w-full rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1712568734.png" alt="Watch image" />
                                  
//                     <div class="swiper-box mx-auto relative flex-col justify-center items-center gap-1 flex mt-5">
//                         <h5 class="w-full text-center text-gray-900 text-xl font-medium leading-loose">Golden&Sliver Metal Belt Watch </h5>
//                         <p class="w-full text-center text-gray-600 text-base font-normal leading-relaxed">a chic and understated accessory for any occasion.</p>
//                     </div>
//                   </div>      
//                   <div class="swiper-slide max-w-[319px] grid">
//                     <img class="grow shrink basis-0 w-full rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1712569721.png" alt="Watch image" />
                                
//                     <div class="swiper-box mx-auto relative flex-col justify-center items-center gap-1 flex mt-5">
//                         <h5 class="w-full text-center text-gray-900 text-xl font-medium leading-loose">Golden Metal Belt Watch </h5>
//                         <p class="w-full text-center text-gray-600 text-base font-normal leading-relaxed">a chic and understated accessory for any occasion.</p>
//                     </div>
//                   </div>
//                   <div class="swiper-slide max-w-[319px] grid">
//                     <img class="grow shrink basis-0  w-full rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1712568744.png" alt="Watch image" />
                                    
//                     <div class="swiper-box mx-auto relative flex-col justify-center items-center gap-1 flex mt-5">
//                         <h5 class="w-full text-center text-gray-900 text-xl font-medium leading-loose">Sliver Metal Belt Watch </h5>
//                         <p class="w-full text-center text-gray-600 text-base font-normal leading-relaxed">a chic and understated accessory for any occasion.</p>
//                     </div>
//                   </div>
//                   <div class="swiper-slide max-w-[319px] grid">
//                   <img class="grow shrink basis-0 w-full rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1712568734.png" alt="Watch image" />
                                
//                   <div class="swiper-box mx-auto relative flex-col justify-center items-center gap-1 flex mt-5">
//                       <h5 class="w-full text-center text-gray-900 text-xl font-medium leading-loose">Golden&Sliver Metal Belt Watch </h5>
//                       <p class="w-full text-center text-gray-600 text-base font-normal leading-relaxed">a chic and understated accessory for any occasion.</p>
//                   </div>
//                   </div>
//                   <div class="swiper-slide max-w-[319px] grid">
//                     <img class="grow shrink basis-0 w-full rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1712569721.png" alt="Watch image" />
                                
//                     <div class="swiper-box mx-auto relative flex-col justify-center items-center gap-1 flex mt-5">
//                         <h5 class="w-full text-center text-gray-900 text-xl font-medium leading-loose">Golden Metal Belt Watch </h5>
//                         <p class="w-full text-center text-gray-600 text-base font-normal leading-relaxed">a chic and understated accessory for any occasion.</p>
//                     </div>
//                   </div>
//                   <div class="swiper-slide max-w-[319px] grid">
//                     <img class="grow shrink basis-0 w-full rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1712568734.png" alt="Watch image" />
                                  
//                     <div class="swiper-box mx-auto relative flex-col justify-center items-center gap-1 flex mt-5">
//                         <h5 class="w-full text-center text-gray-900 text-xl font-medium leading-loose">Golden&Sliver Metal Belt Watch </h5>
//                         <p class="w-full text-center text-gray-600 text-base font-normal leading-relaxed">a chic and understated accessory for any occasion.</p>
//                     </div>
//                   </div>      
//                   <div class="swiper-slide max-w-[319px] grid">
//                     <img class="grow shrink basis-0 w-full rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1712569721.png" alt="Watch image" />
                                
//                     <div class="swiper-box mx-auto relative flex-col justify-center items-center gap-1 flex mt-5">
//                         <h5 class="w-full text-center text-gray-900 text-xl font-medium leading-loose">Golden Metal Belt Watch </h5>
//                         <p class="w-full text-center text-gray-600 text-base font-normal leading-relaxed">a chic and understated accessory for any occasion.</p>
//                     </div>
//                   </div>
//                   <div class="swiper-slide max-w-[319px] grid">
//                     <img class="grow shrink basis-0  w-full rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1712568744.png" alt="Watch image" />
                                    
//                     <div class="swiper-box mx-auto relative flex-col justify-center items-center gap-1 flex mt-5">
//                         <h5 class="w-full text-center text-gray-900 text-xl font-medium leading-loose">Sliver Metal Belt Watch </h5>
//                         <p class="w-full text-center text-gray-600 text-base font-normal leading-relaxed">a chic and understated accessory for any occasion.</p>
//                     </div>
//                   </div>
//                   <div class="swiper-slide max-w-[319px] grid">
//                     <img class="grow shrink basis-0  w-full rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1712568744.png" alt="Watch image" />
                                    
//                     <div class="swiper-box mx-auto relative flex-col justify-center items-center gap-1 flex mt-5">
//                         <h5 class="w-full text-center text-gray-900 text-xl font-medium leading-loose">Sliver Metal Belt Watch </h5>
//                         <p class="w-full text-center text-gray-600 text-base font-normal leading-relaxed">a chic and understated accessory for any occasion.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <button id="slider-button-right" class="swiper-button-next top-[35%] xl:flex hidden shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] w-11 h-11 items-center justify-center border border-gray-300 rounded-lg group  transition-all duration-700 ease-in-out hover:bg-gray-900">
//                 <svg class="text-gray-900 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                   <path d="M7.50301 4.99637L12.5032 9.99657L7.50006 14.9997" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
//                   </svg>
//               </button>
//             </div>
//   </div>

//       </section>

//       )
//     }
//     export default Swip;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Merering from './metering.png';

const Swip = () => {
  const slides = [
    {
      image: Merering,
      title: 'Golden&Silver Metal Belt Watch',
      description: 'A chic and understated accessory for any occasion.',
    },
    {
      image: 'https://pagedone.io/asset/uploads/1712569721.png',
      title: 'Golden Metal Belt Watch',
      description: 'A chic and understated accessory for any occasion.',
    },
    {
      image: 'https://pagedone.io/asset/uploads/1712568744.png',
      title: 'Silver Metal Belt Watch',
      description: 'A chic and understated accessory for any occasion.',
    },
    {
      image: 'https://pagedone.io/asset/uploads/1712568734.png',
      title: 'Golden&Silver Metal Belt Watch',
      description: 'A chic and understated accessory for any occasion.',
    },
    {
      image: 'https://pagedone.io/asset/uploads/1712569721.png',
      title: 'Golden Metal Belt Watch',
      description: 'A chic and understated accessory for any occasion.',
    },
    {
      image: 'https://pagedone.io/asset/uploads/1712568744.png',
      title: 'Silver Metal Belt Watch',
      description: 'A chic and understated accessory for any occasion.',
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 leading-loose pb-2.5">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 leading-8">
            Explore the essence of beauty in our gallery&apos;s intimate space.
          </p>
        </div>

        <div className="relative">
          <button
            id="slider-button-left"
            className="absolute top-[35%] left-0 z-10 w-11 h-11 p-3 hidden xl:flex shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] items-center justify-center border border-gray-300 rounded-lg group hover:bg-gray-900 transition-all duration-700"
          >
            <svg
              className="text-gray-900 group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            // Autoplay
            spaceBetween={20}
            slidesPerView={3}
            loop={true} // Активує циклічність
                centeredSlides={true} // Централізація слайдів
                autoplay={{
                    delay: 3000, // Затримка між слайдами
                    disableOnInteraction: false, // Продовження автопрогравання після взаємодії
                }}
            // loop
            // centeredSlides
            // autoplay={{ delay: 3000 }}
            navigation={{
              nextEl: '#slider-button-right',
              prevEl: '#slider-button-left',
            }}
            breakpoints={{
              1920: { slidesPerView: 3, spaceBetween: 20, centeredSlides: true  },
              1400: { slidesPerView: 3, spaceBetween: 20, centeredSlides: true },
              900: { slidesPerView: 3, spaceBetween: 15, centeredSlides: true },
              200: { slidesPerView: 2, spaceBetween: 15, centeredSlides: true  },
            }}
            className="gallery-top w-full mx-auto pt-6"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="max-w-[319px] grid"
              >
                <img
                  className="w-full rounded-xl object-cover"
                  src={slide.image}
                  alt={slide.title}
                />
                <div className="swiper-box mt-5 text-center">
                  <h5 className="text-xl font-medium text-gray-900 leading-loose">
                    {slide.title}
                  </h5>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            id="slider-button-right"
            className="absolute top-[35%] right-0 z-10 w-11 h-11 p-3 hidden xl:flex shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] items-center justify-center border border-gray-300 rounded-lg group hover:bg-gray-900 transition-all duration-700"
          >
            <svg
              className="text-gray-900 group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Swip;