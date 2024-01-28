import React, { useState,useEffect } from 'react'
// import styles from "../styles/Home.module.css"
import { useSelector } from 'react-redux'
// import { UseDispatch } from 'react-redux'


export default function Home() { 

  

  const [ok,setok]=useState('');
  const {auth} = useSelector((state)=>state);
  

  useEffect(()=>{
    setok(auth.userToken)
  },[auth.userToken])

  setTimeout(() => {
    // setok(auth.usertoken);
    console.log(auth);
  }, 1000);
  

  return (

    <div>
      <h1>{ok}</h1>
    </div>
  )
}
