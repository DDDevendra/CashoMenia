import React from "react";
import style from "../styles/Navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const nav=useNavigate();
  return (
    <div>
      <div className={style.MainNavBar}>
        <div className={style.NavBut1} onClick={()=>{ nav('/profile')}}></div>
        <div className={style.NavBut2}></div>
        <div className={style.NavBut3}></div>
        <div className={style.NavBut4}></div>
        <div className={style.NavBut5}></div>
      </div>

      <div className={style.LogoBg}></div>
      <div className={style.Logo}></div>
    </div>
  );
}
