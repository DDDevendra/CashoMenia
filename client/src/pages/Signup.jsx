import React from 'react'
import { useNavigate } from "react-router-dom";

import style from '../styles/Signpu.module.css'


export default function Signup() {

  const nav = useNavigate();

  const gotoLogin = ()=>{
    nav('/');
  }
  return (
    <div>
      <div className={style.MainSignup}>
        <div className={style.MainCard}>
          <div className={style.Logo}></div>
          <div className={style.LogoName}>
              <p>CashoMenia</p>
            </div>

            <div className={style.ProfilePic}></div>
            <div className={style.ProfilePic1}></div>
            
           
            <input type="text" placeholder='UserName'/>
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Password'/>
            <input type="text" placeholder='Conform password' />
            <button>SIGNUP</button>
        </div>
        <div className={style.footer}>
          <div><p>Do Have Account ?</p></div>
          <button onClick={gotoLogin}>LOGIN</button>
          </div>
      </div>
    </div>
  )
}
