import React from 'react';
import HomePage from "./pages/home/HomePage";
import NavBar from "./components/NavBar/NavBar";
import 'react-toastify/dist/ReactToastify.min.css';
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <HomePage/>
        <ToastContainer />
    </div>
  );
}

export default App;
