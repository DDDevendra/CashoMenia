import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import {login} from '../actions/Authentication'
import { useNavigate } from "react-router-dom";

import style from '../styles/Login.module.css'

export default function Login() {

  const dispatch = useDispatch();

  // const {  isAuthenticated, userToken } = useSelector(state => state.auth);
  // console.log(isAuthenticated,userToken);

  const {auth} = useSelector((state)=>state);
  console.log(auth.name);

  const [ok,setok] = useState('');
  
  useEffect(()=>{
    setok(auth.userToken);
    dispatch(login('XYsgsgwqe124'))
  },[auth.userToken, dispatch]);


  const nav = useNavigate();

  const gotoSignup = ()=>{
    console.log(ok);
    nav('/signup')
  }
  
  return (
    <div>
        <div className={style.MainLogin}>
          <div className={style.MainCard}>
            <div className={style.Logo}></div>
            <div className={style.LogoName}>
              <p>CashoMenia</p>
            </div>
            <input type="text" placeholder='User Name' />
            <input type="password" name="" id="" placeholder='Password' />
            <button>LOGIN</button>
            <div className={style.forgot}>
            <p>Forgot Password ?</p>
            </div>
          </div>
        
         <div className={style.footer}>
          <div><p>Don't Have Account ?</p></div>
          <button onClick={gotoSignup}>SIGNUP</button>
          </div>
        
        </div>



    </div>
  )
}
