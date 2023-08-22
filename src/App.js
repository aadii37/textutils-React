// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/MyNavbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


// let name = 'Adi';
function App() {
  const [dorl, setMode] = useState('light') //wether dark mode is enabled or not
  const toggleMode = () => {
    if (dorl === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'

    }
  }
  return (
    <>
      {/* <Navbar title='TextUtils' aboutText="About TextUtils"/> */}
      <Navbar title='TextUtils' Mode={dorl} togglenav={toggleMode} />
      <div className="container my-3">
        <TextForm heading='Enter The Text To Analyze' Mode={dorl}/>
        {/* <About/> */}
      </div>
    </>
  );
}
export default App;

