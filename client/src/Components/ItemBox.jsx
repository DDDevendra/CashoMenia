import React from 'react'
import style from '../styles/ItemBox.module.css'


export default function ItemBox() {

    const rs = 102.3;
  return (
    <div>
      <div className={style.ItemBox}>
        <div className={style.ItemImg}></div>
        <div className={style.ButBox}>
            <div className={style.BuyBut}></div>
            <div className={style.CostBut}>{rs} Rs</div>
        </div>
      </div>
    </div>
  )
}
