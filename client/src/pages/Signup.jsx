import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../helper/helper";
import style from "../styles/Signpu.module.css";
import toast, { Toaster } from "react-hot-toast";

// import {  useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { login } from "../actions/Authentication";

export default function Signup() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  // const {auth} = useSelector((state)=>state);

  const gotoLogin = () => {
    nav("/");
  };

  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [userCPassword, setuserCPassword] = useState("");

  const doSignUp = async (e) => {
    e.preventDefault();

    const Data = {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
    };

    if (userName === "") {
      return toast.error("Enter Valid UserNaMe");
    }
    if (userEmail === "") {
      return toast.error("Enter Valid Email");
    }

    if (userPassword === "") {
      return toast.error("Enter Valid password ");
    }

    if (userPassword === userCPassword) {
      try {
        const responce = await fetch(`${BASE_URL}/api/Signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Data),
        });

        const res = await responce.json();

        if (responce.status === 201) {
          toast.success(" SignedUp Successfuly ");

          // console.log(res.data);

          const x = {
            userToken: res.data,
            userName: userName,
          };
          await dispatch(login(x));

          setTimeout(() => {
            nav("/home");
          }, 2000);
        } else {
          toast.error(res.data);
        }
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error(" Password Don't Match ");
    }
  };

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

          <input
            type="text"
            placeholder="UserName"
            value={userName}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setuserEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => setuserPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Conform password"
            value={userCPassword}
            onChange={(e) => setuserCPassword(e.target.value)}
          />
          <button onClick={doSignUp}>SIGNUP</button>
        </div>
        <div className={style.footer}>
          <div>
            <p>Do Have Account ?</p>
          </div>
          <button onClick={gotoLogin}>LOGIN</button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
