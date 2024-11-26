import { Timer, ChartNetwork, Lock} from 'lucide-react';

const Feature16 = () => {
  return (
    <section className="py-32 max-w-6xl mx-auto p-8">
      <div className="container">
        <p className="mb-4 text-sm text-muted-foreground lg:text-base">
        Технологія, що змінює правила гри
        </p>
        <h2 className="text-3xl font-medium lg:text-4xl">Ми не просто покращуємо зв'язок. Ми створюємо нову реальність.</h2>
        <br />
        <p>У світі, де кожна мілісекунда має значення, UrbanWave створює майбутнє, де затримки – це міф, а можливості безмежні.</p>
        <h3 className="text-xl">Знайомі виклики?</h3>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          <div className="rounded-lg bg-accent p-5 bg-yellow-100">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-white rounded-full">
              <Timer className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Ваша мережа працює на межі можливостей?</h3>
            <p className="leading-7 text-muted-foreground">
            Кожна втрачена секунда зв'язку коштує вам грошей. Кожен збій – це втрачені можливості.  Щоденні питання: чи витримає інфраструктура? Тиснуть дедлайни, зростають ризики...
            Чи вчасно ми встигнемо? 
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5 bg-gray-100">
            <span className="mb-8 flex size-12 items-center justify-center bg-white rounded-full ">
              <Lock className="size-6 " />
            </span>
            <h3 className="mb-2 text-xl font-medium">Безпека даних не дає спокою?</h3>
            <p className="leading-7 text-muted-foreground ">
            Чи вистачить ресурсів, щоб уникнути витоку? Ця тривога стає тінню, яка переслідує вас і вдень, і вночі. Ви заслуговуєте на спокій. 
            Можливо, настав час зробити перший крок до впевненості у завтрашньому дні. Ви не повинні з цим боротися самотужки. Є простий шлях до контролю та спокою
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5 bg-red-100">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-white rounded-fullbg-background">
              <ChartNetwork className="size-6" />
            </span>
            <h3 className="mb-2 text-xl font-medium">Масштабування перетворюється на головний біль?</h3>
            <p className="leading-7 text-muted-foreground">
            Замість натхнення й радості від зростання ви відчуваєте безкінечний стрес? Планування розширення перетворюється на хаос, а кожне нове рішення здається мінним полем.
            
           
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature16;
