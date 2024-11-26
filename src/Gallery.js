import React, { useState } from "react";
import Factory from './factory.jpg';
import Meshh from './meshh.jpg';
import Green from './green.jpg';
import FivG from './pgpng.png';
import Merering from './metering.png';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const images = [
    Green,
    Factory,
    Meshh,
    FivG,
    Merering,
  ];

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="grid gap-2.5 lg:pb-16 pb-10">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold leading-normal">
            Напрямки
          </h2>
          <p className="w-full text-center text-gray-600 text-lg leading-8">
            Змінюй правила гри вже сьогодні
          </p>
        </div>

        {/* Галерея */}
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 h-[404px] rounded-3xl">
            <img
              src={images[0]}
              alt="Gallery image"
              className="object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out w-full h-full cursor-pointer"
              onClick={() => openLightbox(images[0])}
            />
          </div>
          <div className="md:col-span-8 h-[404px] rounded-3xl">
            <img
              src={images[1]}
              alt="Gallery image"
              className="object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out w-full h-full cursor-pointer"
              onClick={() => openLightbox(images[1])}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {images.slice(2).map((image, index) => (
            <div key={index} className="h-[277px] rounded-3xl">
              <img
                src={image}
                alt={`Gallery image ${index + 3}`}
                className="object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out w-full h-full cursor-pointer"
                onClick={() => openLightbox(image)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <img
            src={lightboxImage}
            alt="Full view"
            className="max-w-full max-h-full"
          />
          <button
            className="absolute top-6 right-8 text-white text-4xl cursor-pointer"
            onClick={closeLightbox}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
