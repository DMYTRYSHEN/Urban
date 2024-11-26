import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

// Стилі Swiper (опціонально додайте для кастомізації)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  'https://via.placeholder.com/600x400?text=Image+1',
  'https://via.placeholder.com/600x400?text=Image+2',
  'https://via.placeholder.com/600x400?text=Image+3',
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const SwipWithEffect = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Gallery with Scroll Effect
      </motion.h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        className="rounded-lg shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="overflow-hidden rounded-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipWithEffect;
