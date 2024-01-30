import React from 'react'
import style from '../styles/InventoryBox.module.css'

export default function MyInventoryBox() {
  return (
   
      <div>
      <div className={style.MainBox}>
        <div className={style.ProImg}></div>
        <div className={style.But}>
          <div className={style.ExpoBut}></div>
          <div className={style.DeleteBut}></div>
        </div>
      </div>
    </div>
   
  )
}
