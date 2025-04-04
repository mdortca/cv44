import './App.css'
import React, { useContext } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import PersonalInformation from './components/PersonalInformation';
import  profilePhoto  from './assets/profilephoto.jpg';

function App() {

  // const notify = () => toast('Wow so easy !');
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`flex flex-col text-black container ${theme}`}>
      {/* <div className="">
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>  */}
      <section className=" flex gap-0 overflow-hidden flexbox-item component1 w-full h-16 bg-purple-400" style={{ background: 'linear-gradient(to right, #4731D3 76%, #CBF281 76%)' }}>       
          <div className="p-5 flex gap-49 almila-toggle ml-20 mt-10 mb-10">
            {/* <PersonalInformation/> */}
            <div className="almila">
              <p className="pt-4 font-inter text-[32px] leading-[72px] text-[#CBF281]">almila</p>
            </div>
            <div className="button-label ml-auto pr-29">
              <button className="bg-sky-400 mt-5 w-32 h-12" onClick={toggleTheme}>
                Toggle Theme
              </button>
                        <label onClick={toggleTheme} className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            data-testid="darkMode-toggle"
                            checked
                          />
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <span className="ms-3  font-medium text-gray-900 dark:text-gray-300">
                            Dark Mode On
                          </span>
                        </label> 
              </div>

          </div>
          <div className="px-10 h-full w-full iamfrontend-picture">
            <div className="flex overflow-hidden ">
              <div className="iamfrontend">
                <h1 className="merhaba">I am a Frontend Developer...</h1> 
                <p>...who likes to craft solid and scalable frontend products with great user experiences.</p>
                <div className="flex gap-4 pb-0 ml-[-0%] ">
                  <button className=" w-[278px] h-[52px] bg-blue-500 text-white rounded">Github</button>
                  <button className=" w-[278px] h-[52px]">Linkedin</button>
                </div>
              </div>
              <div className="picture ml-[+13%]">
              <img src={profilePhoto} alt="Profile"/>
              </div>
            </div>
          </div>
      </section>
      <section className="overflow-hidden flexbox-item component2">
        <h1>SKILLS</h1>
      </section>
      <section className="overflow-hidden flexbox-item component3 bg-[#4731D3]">
        PROFILEINFOS : basic infos and About me infos
      </section>
      <section className="overflow-hidden flexbox-item component4 bg-[#CBF281]">
        Projects infos and descs
      </section>
      <section className="overflow-hidden flexbox-item component5">
        send me message partition
      </section>

    </div>
    
  )
}

const AppWithTheme = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWithTheme;
