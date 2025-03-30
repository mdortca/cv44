import './App.css'
import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

function App() {

  const notify = () => toast('Wow so easy !');
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme}`}>
      <div className="">
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>

      <section className="flexbox-item component1">
      <button className="bg-sky-400 mt-5 w-32 h-12" onClick={toggleTheme}>
          Toggle Theme
        </button>
        <p className="almila">almila</p> 
        <div>
          <div>
            <h1 className="merhaba">I am a Frontend Developer...</h1> 
            <p>...who likes to craft solid and scalable frontend products with great user experiences.</p>
            <div className="flex-grow"></div> 
      
      <div className="flex gap-3 justify-center mb-8" style={{ left: "40%" }}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Button 1</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Button 2</button>
      </div>
    </div>
          <p className="image ">RESİM</p>
        </div>
      </section>
      <section className="flexbox-item component2">
        <h1>SKILLS</h1>
      </section>
      <section className="flexbox-item component3">
        PROFILEINFOS : basic infos and About me infos
      </section>
      <section className="flexbox-item component4">
        Projects infos and descs
      </section>
      <section className="flexbox-item component5">
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
