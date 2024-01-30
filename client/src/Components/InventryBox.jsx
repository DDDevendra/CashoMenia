import React from "react";
import style from "../styles/InventoryBox.module.css";
// import { BASE_URL } from '../helper/helper'

export default function InventryBox({ Image, Cost }) {
  return (
    <div>
      <div className={style.MainBox}>
        <div className={style.ProImg}></div>
        <div className={style.But}>
          <div className={style.ExpoBut}></div>
          <div className={style.ProfileBut}></div>
        </div>
      </div>
    </div>
  );
}
