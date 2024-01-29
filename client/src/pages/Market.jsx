import React from 'react'
import style from '../styles/Market.module.css'
import Navbar from '../Components/Navbar'
import ItemBox from '../Components/ItemBox'


export default function Market() {
  return (
    <div>
      <div className={style.MarketPage}>
        <Navbar/>
        <div className={style.LogoName}>CashoMenia</div>
        <div className={style.ShopLeft}>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>

        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        </div>
        <div className={style.GovCard}>
      
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>

        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>      
        </div>
        <div className={style.ShopRight}>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>

        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        <ItemBox/>
        </div>
      </div>
    </div>
  )
}
