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
<h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="bg-blue-500 text-orange p-4 rounded">
        Tailwind CSS Test
      </div>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      <section className="flexbox-item component1">
        <p className="almila">almila</p> 
        <div>
          <div>
            <h1 className="merhaba">I am a Frontend Developer...</h1> 
            <p>...who likes to craft solid and scalable frontend products with great user experiences.</p>
            <p>Github Linkedin</p>
          </div>
          <p className="image">RESİM</p>
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
