import React from "react";
import i1 from './i1.png';
import i2 from './i2.png';
import i3  from './i3.png';

const About1 = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark p-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src={i2}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                     src={i1}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src={i3}
                      alt=""
                      className="w-full rounded-2xl"
                    />
               
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 ">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                Для кого це рішення?
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Інтелектуальний облік ресурсів для вашого бізнесу та дому
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                UrbanWave допомагає компаніям і користувачам отримувати точні дані про витрати води, газу, тепла та електроенергії без зайвих зусиль. Усі дані доступні в UrbanWave Dashboard у вигляді детальних звітів, які легко аналізувати.

З UrbanWave ви:

Автоматизуєте процес зчитування показників.
Отримуєте актуальну аналітику споживання.
Приймаєте рішення на основі точних даних.
Оптимізуєте витрати ресурсів і часу.
Підключайтеся до UrbanWave – рішення, що спрощує контроль ресурсів та забезпечує ефективність вашого бізнесу!
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                UrbanWave підходить для широкого кола користувачів:

Ресурсні компанії: ефективний контроль споживання ресурсів.
Муніципалітети: прозоре управління міськими мережами.
Керівні компанії та ОСББ: зручний інструмент для автоматизації обліку.
Забудовники: сучасні рішення для "розумних будинків".
Великі підприємства та середній бізнес: оптимізація енергоспоживання та витрат.
Інтегратори: додаткові можливості для системної інтеграції.
Інтернет-провайдери: розширення спектра послуг.
Кінцеві користувачі: зручний доступ до актуальних даних.
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
