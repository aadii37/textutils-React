// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/MyNavbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

// FUNCTIONS
export default function App() {
  const [dorl, setMode] = useState('light'); //wether dark mode is enabled or not
  // const [borl, setMode2] = useState('light'); //wether dark mode is enabled or not

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
      document.title = 'TextUtils-Light Mode'
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      funcAlert('Dark Mode has been enabled.', 'success')
      document.title = 'TextUtils-Dark Mode'
    }
  }



  // MAIN APP

  return (
    <>
      <BrowserRouter>
        <Navbar title='TextUtils' Mode={dorl} togglenav={toggleMode} />
        <Alert alert={dissalert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<TextForm funcAlert={funcAlert} heading='Enter The Text To Analyze' Mode={dorl} />}></Route>
          </Switch>
        </div>
      </BrowserRouter >
    </>
  );
}


