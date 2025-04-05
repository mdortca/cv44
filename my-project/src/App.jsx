import './App.css'
import React, { useContext } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import PersonalInformation from './components/PersonalInformation';
import  profilePhoto  from './assets/profilephoto.jpg';
import jsLogo from './assets/js-logo-2.svg';
import reactLogo from './assets/react.svg';
import reduxLogo from './assets/reduxlogo.png';

import visiual from './assets/visiualstudio.png';
import node from './assets/node.png';
import figmaLogo from './assets/figma.png';

function App() {

  // const notify = () => toast('Wow so easy !');
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`flex flex-col text-black container ${theme}`}>
      {/* <div className="">
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>  */}
      <section className="flex gap-0 overflow-hidden w-[100vw] h-[76vh] flex-col component1 w-full h-16 bg-purple-400" style={{ background: 'linear-gradient(to right, #4731D3 76%, #CBF281 76%)' }}>       
        <div className="flex flex-col overflow-hidden pt-[13px] mt-13 ml-40 gap-24 ml-31">    
          <div className=" flex gap-49 almila-toggle   ">
            {/* <PersonalInformation/> */}
            <div className="almila">
              <p className="font-inter text-[32px] leading-[72px] text-[#CBF281] tracking-normal font-bold">sedat</p>
            </div>
            <div className="button-label ml-auto mr-[58] pr-29 gap-[44px] pr-[200px] flex flex-row">
              {/* <label onClick={toggleTheme} className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  data-testid="darkMode-toggle"
                  checked
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3  font-medium text-gray-900 dark:text-gray-300">
                  Dark Mode
                </span>
              </label> */}
              <p className="relative inline-flex items-center cursor-pointer">Dil</p>
              <p className="bg-sky-400 mt-5 w-32 h-12" onClick={toggleTheme}>
                Dark Mode
              </p>
 
          </div>

          </div>
          <div className="flex items-end overflow-hidden mb-0 pb-0">
            <div className="flex flex-col gap-y-12 w-[40%] justify-between iamfrontend ">
              <h1 className="merhaba text-[#CBF281] font-inter font-bold text-[54px] leading-[1.1] tracking-normal">I am a Backend Developer...</h1> 
              <p className="font-inter font-normal text-[24px] leading-[100%] tracking-normal text-white">...who likes to craft solid and scalable frontend products with great user experiences.</p>
              <div className="flex gap-[10px] pb-0 ml-[-0%]">
                <button className=" border border-1 border-indigo-800 pt-[12px] pb-[12px] pl-[12px] pr-[20px] w-[127px] h-[52px] text-[#3730A3] rounded-[6px]">Github</button>
                <button className=" border border-1 border-indigo-800 pt-[12px] pb-[12px] pl-[12px] pr-[20px] w-[127px] h-[52px] text-[#3730A3] rounded-[6px]">Linkedin</button>
              </div>
            </div>
            <div className="object-cover w-[350px] w-64 h-full picture ml-[+24%] ">
            <img className="h-full w-full object-cover w-[350px] rounded-[19px]" src={profilePhoto} alt="Profile"/>
            </div>
          </div>

        </div>  
      </section>
      <section className="overflow-hidden w-[100vw] h-[76vh] flex flex-col component2">
        <div className="w-[960px] h-[430px]  m-auto flex justify-between overflow-hidden">
          <p className="font-inter font-bold text-[48px] leading-[100%] tracking-[1%] text-[#4832D3] w-[128px] h-[58px]">Skills</p>
          <div id="skillBox1" className="flex flex-col justify-between w-[290px] h-[430]">

            <div className=" flex items-center w-[290px] h-[120px] overflow-hidden">
              <img src={jsLogo} alt="javascript Image" className="w-[120px] h-[120px] border border-4" />
              <p className="ml-4 font-inter font-medium text-[24px] leading-[150%] tracking-normal uppercase text-[#777777]">JAVASCRIPT</p>
            </div>

            <div className="flex items-center w-[290px] h-[120px] overflow-hidden">
              <img src={reactLogo} alt="react Image" className="w-[120px] h-[120px] border border-4 " />
              <p className="ml-4 font-inter font-medium text-[24px] leading-[150%] tracking-normal uppercase text-[#777777]">REACT</p>
            </div>

            <div className="flex items-center w-[290px] h-[120px] overflow-hidden">
              <img src={reduxLogo} alt="redux Image" className="w-[120px] h-[120px] border border-4" />
              <p className="ml-4 font-inter font-medium text-[24px] leading-[150%] tracking-normal uppercase text-[#777777]">REDUX</p>
            </div>
          
          </div>
          <div id="skillBox2" className="flex flex-col justify-between w-[251px] h-[430]">

            <div className="flex items-center w-[290px] h-[120px] overflow-hidden">
              <img src={node} alt="Figma Image" className="w-[120px] h-[120px] border border-4" />
              <p className="ml-4 font-inter font-medium text-[24px] leading-[150%] tracking-normal uppercase text-[#777777]">NODE</p>
            </div>

            <div className="flex items-center w-[290px] h-[120px] overflow-hidden">
              <img src={visiual} alt="Figma Image" className="w-[120px] h-[120px] border border-4" />
              <p className="ml-4 font-inter font-medium text-[24px] leading-[150%] tracking-normal uppercase text-[#777777]">VS CODE</p>
            </div>

            <div className="flex items-center w-[290px] h-[120px] overflow-hidden">
              <img src={figmaLogo} alt="Figma Image" className="w-[120px] h-[120px] border border-4" />
              <p className="ml-4 font-inter font-medium text-[24px] leading-[150%] tracking-normal uppercase text-[#777777]">FIGMA</p>
            </div>

          </div>
        </div>
      </section>
      <section className="overflow-hidden w-[100vw] h-[76vh] flex flex-col component3 bg-[#4731D3]">
        PROFILEINFOS : basic infos and About me infos
      </section>
      <section className="overflow-hidden w-[100vw] h-[94vh] flex flex-col component4 bg-[#CBF281]">
        Projects infos and descs
      </section>
      <section className="overflow-hidden w-[100vw] h-[58vh] flex flex-col component5 bg-[#F9F9F9]">
        <div className="m-auto  flex flex-col items-center gap-[24px]">
          <p className="font-inter font-bold text-[48px] leading-[72px] tracking-normal text-[#4731D3]">Send me a Message!</p>
          <p className="font-inter font-normal text-[24px] leading-[150%] tracking-normal pl-[80px] pr-[80px] text-[#120B39]">Got a question or proposal, or just want to say hello? Go ahead.</p>
          <p className="font-inter font-medium text-[20px] leading-[100%] tracking-[5%] underline decoration-solid  text-[#4731D3] decoration-[0%]">sedatsahin224444@gmail.com</p>
          <div className="flex flex-row gap-[24px] pb-[20px]">
            <img src={reactLogo} alt="" />
            <img src={reactLogo} alt="" />
            <img src={reactLogo} alt="" />
            <img src={reactLogo} alt="" />
          </div>
        </div>
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
