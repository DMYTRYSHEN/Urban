import React, { useState } from 'react';
import logo from './Logo_main.svg';
import Heropic from './ecosystem.svg'
import Heropic2 from './ecosystem3.svg'
import { motion } from "framer-motion";
import Back from './back.svg';



const Main = () => {
    return (
        <section>
           
            
            <div className="relative pt-12 bg-gray-50 sm:pt-16 lg:py-36 xl:py-48">
                {/* <div className="absolute inset-0 hidden lg:block">
                    <img className="object-cover object-right w-full h-full animate-slide-up " src={Heropic} alt="" />
                
                </div> */}

                <div className="absolute inset-0 hidden lg:block ">
                <img className=" w-full h-full animate-slide-up " src={Heropic} alt="" />
                  
                </div>
                {/* <div className="mt-8 lg:hidden ani">
                        <img className="w-full mx-auto animate-spin-slow" src={Back} alt="" />
                    </div> */}
                <br /> <br />

                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-lg mx-auto text-center lg:mx-0 lg:max-w-md lg:text-left">
                        {/* <p className="text-base font-bold text-gray-600">Розумне місто майбутнього вже сьогодні</p> */}

                        <span class="w-fit mx-auto flex items-left justify-center bg-emerald-50 rounded-full text-emerald-600 text-center text-sm font-medium leading-5 px-3 py-1 ">Розумне місто майбутнього вже сьогодні</span>
                        <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:mt-8 sm:text-5xl xl:text-7xl">Інноваційні рішення IoT </h1>
                        <h2 className="mt-3 text-3xl text-gray-700 sm:text-4xl xl:text-5xl">Не стільниковий 5G зв'язок</h2>


                        <div className="mt-8 sm:mt-12">
                            <a
                                href="#"
                                title=""
                                className="
                            inline-flex
                            items-center
                            justify-center
                            px-8
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-white
                            transition-all
                            duration-200
                            bg-gray-900
                            border border-transparent
                            rounded-md
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                            hover:bg-gray-600
                            focus:ring-offset-[#FFE942]
                        "
                                role="button"
                            >
                                Замовити демо
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 lg:hidden">
                        <img className="w-full mx-auto " src={Heropic2} alt="" />
                    </div>
                   
                </div>
            
            </div>   

          
            
        </section>

    )
}
export default Main;