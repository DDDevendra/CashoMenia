import React, { useEffect, useState } from 'react'
import style from '../styles/Market.module.css'
import Navbar from '../Components/Navbar'
import ItemBox from '../Components/ItemBox'
import InventryBox from '../Components/InventryBox'
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from '../helper/helper'
import { useSelector } from 'react-redux'



export default function Market() {

  const [Items,setItems]= useState([]);
  const {auth}= useSelector((state)=>state);

  
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
        

        // return toast.success('Data Loded');
      }else{
        return toast.error(res.data);
      }


    }catch(error)
    {
        toast.error("Failed To Load Data");
    }

  }

  useEffect(()=>{
    getData();
    console.log(Items);
    console.log(auth);
  },[]);

  

  return (
    <div>
      <div className={style.MarketPage}>
        <Navbar/>
        <div className={style.LogoName}>CashoMenia</div>
        <div className={style.InventoriesCard}>
          <div className={style.InvHead}>InvenTories</div>
          <div className={style.InvBody}>
            <InventryBox/>
            <InventryBox/>
            <InventryBox/>
            <InventryBox/>
            <InventryBox/>
            <InventryBox/>
          </div>
        </div>
        <div className={style.ShopLeft}>

        {Items.map((item,index)=>(
              <>
                <ItemBox  Image={item.Image} Cost={item.Cost} Name={item.Name}/>
              </>
          ))}
        </div>
        <div className={style.GovCard}>
          {Items.map((item,index)=>(
              <>
                <ItemBox  Image={item.Image} Cost={item.Cost} Name={item.Name}/>
              </>
          ))}
        </div>
        <div className={style.ShopRight}>
        {Items.map((item,index)=>(
              <>
                <ItemBox  Image={item.Image} Cost={item.Cost} Name={item.Name}/>
              </>
          ))}
        </div>
      </div>
      <Toaster/>
    </div>
  )
}
