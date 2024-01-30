import React from 'react'
import style from '../styles/ItemBox.module.css'
import { BASE_URL } from '../helper/helper';


export default function ItemBox({ Image , Cost , Name}) {

     

  const  ImageUrl = `${BASE_URL}/${Image.replace(/\\/g, "/")}`

  return (
    <div>
      <div className={style.ItemBox}>
        <img className={style.ItemImg} src={ImageUrl} alt="Img" />
  
        <div className={style.ButBox}>
            <div className={style.BuyBut}></div>
            <div className={style.CostBut}>{Cost} Rs <br/>{Name}</div>
        </div>
      </div>
    </div>
  )
}
