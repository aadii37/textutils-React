// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/MyNavbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';


// FUNCTIONS
export default function App() {
  const [dorl, setMode] = useState('light'); //wether dark mode is enabled or not
  const [dissalert, setAlert] = useState(null);

  const funcAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (dorl === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      funcAlert('Light Mode has been enabled.', 'success')
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      funcAlert('Dark Mode has been enabled.', 'success')
    }
  }



// MAIN APP

  return (
    <>
      {/* <Navbar title='TextUtils' aboutText="About TextUtils"/> */}
      <Navbar title='TextUtils' Mode={dorl} togglenav={toggleMode} />
      <Alert alert={dissalert} />
      <div className="container my-3">
        <TextForm funcAlert={funcAlert} heading='Enter The Text To Analyze' Mode={dorl} />
        {/* <About/> */}
      </div>
    </>
  );
}


