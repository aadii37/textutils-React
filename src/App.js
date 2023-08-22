// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/MyNavbar';
// import TextForm from './components/TextForm';

// let name = 'Adi';
function App() {
  return (
    <>
      {/* <Navbar title='TextUtils' aboutText="About TextUtils"/> */}
      <Navbar title='TextUtils' />
      <div className="container my-3">
        {/* <TextForm heading='Enter The Text To Analyze' /> */}
        <About/> 
      </div>
    </>
  );
}
export default App; 
