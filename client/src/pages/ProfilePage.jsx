import React, { useEffect, useState } from "react";
import style from "../styles/ProfilePage.module.css";
import Navbar from "../Components/Navbar";

import { BASE_URL } from "../helper/helper";
import { useSelector } from "react-redux";
import { json } from "react-router-dom";
import InventryBox from "../Components/InventryBox";
import MyInventoryBox from "../Components/MyInventoryBox";
import ShopBox from "../Components/ShopBox";
import ItemBox from "../Components/ItemBox";

export default function ProfilePage() {
  const [user, setuser] = useState("");
  const { auth } = useSelector((state) => state);

  const getUserData = async () => {
    try {
      console.log(sessionStorage.getItem("userToken"));
      const response = await fetch(`${BASE_URL}/api/getuserdata`, {
        method: "PATCH",
        headers: {
          // 'x-access-token':auth.userToken,
          "Content-Type": "application/json",
          "x-access-token": sessionStorage.getItem("userToken"),
        },
      });

      const res = await response.json();
      if (response.status === 201) {
        setuser(res.data);
      } else {
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className={style.MainPage}>
      <Navbar />

      <div className={style.BodyContaint}>
        <div className={style.LeftCrad}>
          <div className={style.Head}>InveTories</div>
          <div className={style.InventoryBox}>
            <MyInventoryBox />
            <MyInventoryBox />
            <MyInventoryBox />
            <MyInventoryBox />
            <MyInventoryBox />
            <MyInventoryBox />
          </div>
        </div>
        <div className={style.CenterCard}>
          <div className={style.ProfileCard}>
            <div className={style.ProfileImage}></div>
            <div className={style.OtherInfo}>
              <div className={style.Name}>{user.userName}</div>
              <div className={style.Bio}>{user.userEmail}</div>
              <div className={style.Amount}>{user.userAmount}</div>
            </div>
          </div>
          <div className={style.Other}>
            <ItemBox Image={"x"} />

            <ItemBox Image={"x"} />
            <ItemBox Image={"x"} />
            <ItemBox Image={"x"} />
            <ItemBox Image={"x"} />
          </div>
        </div>
        <div className={style.RightCard}>
          <div className={style.Head}>My Shops</div>
          <div className={style.InventoryBox}>
            <ShopBox />
            <ShopBox />
            <ShopBox />
            <ShopBox />
            <ShopBox />
            <ShopBox />
          </div>
        </div>
      </div>
    </div>
  );
}
