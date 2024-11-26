import logo from './logo.svg';
import './App.css';
import { motion } from "framer-motion";


function App() {
  return (
    <div className="App" >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>RFR
      </header> */}

      <div className="App">
        <section className="hero flex relative overflow-hidden text-white mb-20 md:mb-36 lg:mb-52
        bg-gray/50 dark:bg-black-950/50 backdrop-blur-2xl 
        " 
         style={{ 
        // background: 'linear-gradient(#4722ebd7, #000000)', 
        borderRadius: '3.125rem 3.125rem 0rem 0rem', transformBox: 'translateY(-4rem)' }}
        >

          <div className="w-32 h-32 bg-blue-500 animate-fade-in">
            <h1 className="text-white text-center">Hello, React!</h1>
          </div>


          <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="p-10 bg-white shadow-lg rounded-lg">
              <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">Welcome to My Project</h1>
              <p className="text-lg text-gray-700">This is a simple React app styled with TailwindCSS.</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all">
                Click Me
              </button>
            </div>
          </div>




          <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <motion.div
              className="w-32 h-32 bg-blue-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <h1 className="text-white text-center">Hello, React!</h1>
            </motion.div>
          </div>

        </section>
      </div>
      </div>
      );
}

      export default App;
