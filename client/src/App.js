import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';

import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddItem from "./pages/AddItem";
import Market from "./pages/Market";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/additem" element={<AddItem/>}/>
          <Route path="/market" element={<Market/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
