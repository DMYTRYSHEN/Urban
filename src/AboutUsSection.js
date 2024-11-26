import React from "react";
import { motion } from "framer-motion";





const AboutUsSection = () => {
    return (
        <div className="container mx-auto py-16 px-4 md:px-8 flex flex-col lg:flex-row items-center lg:items-start  ">
            {/* Текстова частина */}
            <motion.div
                className="lg:w-1/2 mb-8 lg:mb-0 mr-0.5"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h3 className="text-xl text-gray-600 mb-2">A little about us</h3>
                <h2 className="text-3xl font-bold mb-6 text-gray-900  font-bold  ">
                    Empowering Communities Together
                </h2>
                <p className=" text-gray-600 mb-4  font-normal leading-7 text-gray-600 ">
                    The creation of environments where everyone has the opportunity to
                    thrive. This approach not only promotes individual success but also
                    contributes to the overall resilience and cohesion of society.
                </p>
                <ul className="space-y-4 mb-6">
                    <li className="flex items-center">
                        <span className="text-indigo-500 text-xl mr-4">


                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                            <g clip-path="url(#clip0_269_6150)">
                                <path d="M11.9998 1.35693C17.8799 1.35693 22.6426 6.11966 22.6426 11.9998C22.6426 17.8799 17.8799 22.6426 11.9998 22.6426C6.11966 22.6426 1.35693 17.8799 1.35693 11.9998C1.35693 6.11966 6.11966 1.35693 11.9998 1.35693Z" fill="#4f46e5" stroke="#4f46e5" />
                                <path d="M10.7998 15.84L16.0455 7.88574" stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path d="M10.8 15.84L7.88574 13.4058" stroke="white" stroke-width="2" stroke-linecap="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_269_6150">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <span className="text-gray-700 text-lg font-medium text-sm text-black">
                        More than 10 years of experience.
                    </span>
                </li>
                <li className="flex items-center">
                    <span className="text-indigo-500 text-xl mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                            <g clip-path="url(#clip0_269_6150)">
                                <path d="M11.9998 1.35693C17.8799 1.35693 22.6426 6.11966 22.6426 11.9998C22.6426 17.8799 17.8799 22.6426 11.9998 22.6426C6.11966 22.6426 1.35693 17.8799 1.35693 11.9998C1.35693 6.11966 6.11966 1.35693 11.9998 1.35693Z" fill="#4f46e5" stroke="#4f46e5" />
                                <path d="M10.7998 15.84L16.0455 7.88574" stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path d="M10.8 15.84L7.88574 13.4058" stroke="white" stroke-width="2" stroke-linecap="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_269_6150">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <span className="text-gray-700 text-lg font-medium text-sm text-black">
                        Over 100k happy customers and finished projects.
                    </span>
                </li>
                <li className="flex items-center">
                    <span className="text-indigo-500 text-xl mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                            <g clip-path="url(#clip0_269_6150)">
                                <path d="M11.9998 1.35693C17.8799 1.35693 22.6426 6.11966 22.6426 11.9998C22.6426 17.8799 17.8799 22.6426 11.9998 22.6426C6.11966 22.6426 1.35693 17.8799 1.35693 11.9998C1.35693 6.11966 6.11966 1.35693 11.9998 1.35693Z" fill="#4f46e5" stroke="#4f46e5" />
                                <path d="M10.7998 15.84L16.0455 7.88574" stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path d="M10.8 15.84L7.88574 13.4058" stroke="white" stroke-width="2" stroke-linecap="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_269_6150">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <span className="text-gray-700 text-lg font-medium text-sm text-black">
                        It has 20 branches around the world.
                    </span>
                </li>
            </ul>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-600 transition">
                Get Started
            </button>
        </motion.div>

      {/* Частина з картинками */ }
    <motion.div
        className="lg:w-1/2 grid grid-cols-2 gap-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
    >
        <img
            src="https://via.placeholder.com/300x200"
            alt="Team working"
            className="rounded-lg shadow-lg"
        />
        <img
            src="https://via.placeholder.com/300x200"
            alt="Office"
            className="rounded-lg shadow-lg"
        />
        <img
            src="https://via.placeholder.com/300x200"
            alt="Coworkers"
            className="rounded-lg shadow-lg"
        />
        <img
            src="https://via.placeholder.com/300x200"
            alt="Colleagues"
            className="rounded-lg shadow-lg"
        />
    </motion.div>
    </div >
  );
};

export default AboutUsSection;
