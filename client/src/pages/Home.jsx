import React, { useState,useEffect } from 'react'
// import styles from "../styles/Home.module.css"
import { useSelector } from 'react-redux'
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from '../helper/helper';

// import { UseDispatch } from 'react-redux'


export default function Home() { 

  
  const [Items,setItems]= useState([]);
  

  const [ok,setok]=useState('');
  const {auth} = useSelector((state)=>state);
  
  const getData = async()=>{

    try{
        
      const response = await fetch(`${BASE_URL}/api/getItems`,{
        method:'GET'
      })
      const res = await response.json();

      if(response.status===200)
      {

        console.log(res.data)
        setItems(res.data);
        

        return toast.success('Data Loded');
      }else{
        return toast.error(res.data);
      }


    }catch(error)
    {
        toast.error("Failed To Load Data");
    }

  }

  useEffect( () => {
    setok(auth.userToken)
    getData();
    console.log(auth);
  }, [auth, auth.userToken])
  

  setTimeout(() => {
    setok(auth.usertoken);
    console.log(auth);   
  }, 1000);
  

  return (

    <div>
    <h1>{ok}</h1>
    {/* <p>
      {Items.map((item, index) => (
        <div key={index}>
        
          <p>{`${BASE_URL}/${item.Image.replace(/\\/g, "/")}`}</p>
          <img src={`${BASE_URL}/${item.Image.replace(/\\/g, "/")}`} alt={item.Name} />
      
        </div> 
        
          ))}

    </p> */}
   
    <Toaster/>
    </div>
  )
}
