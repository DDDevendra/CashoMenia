import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/Authentication";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "../helper/helper";


import style from "../styles/Login.module.css";

export default function Login() {


  const dispatch = useDispatch();

  // const {  isAuthenticated, userToken } = useSelector(state => state.auth);
  // console.log(isAuthenticated,userToken);
 
 
  // console.log(auth.name);

  const nav = useNavigate();

  const gotoSignup = () => {
    nav("/signup");
  };

  const [userName, setuserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  
  
  const doLogin = async()=>{

      try{
          
        if(userName==='')
         return toast.error('Enter Valid UserName');

        if(userPassword==='')
          return toast.error('Enter Valid Password ');

          const data = {
            userName:userName,
            userPassword:userPassword
          }

        const response = await fetch(`${BASE_URL}/api/login`,{
          method:'PATCH',
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify(data)
        })

        const res = await response.json();

        if(response.status===201)
        {
          toast.success('Logged in Successfuly');

          const x = {
            userToken:res.data,
            userName:userName

          }

          sessionStorage.setItem('userToken',res.data);

          
          await dispatch(login(x))
  
         
           
          setTimeout(() => {
            nav('/market')
          },  2000);

        }else{
          toast.error(res.data);
        }

      }catch(error)
      {
         toast.error("Failed To Login ");
      }

  }

  return (
    <div>
      <div className={style.MainLogin}>
        <div className={style.MainCard}>
          <div className={style.Logo}></div>
          <div className={style.LogoName}>
            <p>CashoMenia</p>
          </div>
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            value={userPassword}
            onChange={(e) => setuserPassword(e.target.value)}
          />
          <button onClick={doLogin}>LOGIN</button>
          <div className={style.forgot}>
            <p>Forgot Password ?</p>
          </div>
        </div>

        <div className={style.footer}>
          <div>
            <p>Don't Have Account ?</p>
          </div>
          <button onClick={gotoSignup}>SIGNUP</button>
        </div>
      </div>
      <Toaster/>
    </div>
  );
}
