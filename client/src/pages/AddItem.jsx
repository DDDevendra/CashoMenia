import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "../helper/helper";

import style from "../styles/AddItem.module.css";

export default function AddItem() {
  const [Name, setName] = useState("");
  const [Cost, setCost] = useState('');
  const [Info, setInfo] = useState("");
  const [Image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.persist();
    const Data = new FormData();
    Data.append("Name", Name);
    Data.append("Cost", Cost);
    Data.append("Info", Info);
    Data.append("Image", Image);
    try {
      const response = await fetch(`${BASE_URL}/api/additem`, {
        method: "POST",
        body: Data,
      });

      if (response.status === 200) {
        toast.success("Item Added Successfuly ");
      } else {
        toast.error(" Failed To Add Item ");
      }
    } catch (error) {
      toast.error("Failed To add Item");
    }
  };

  return (
    <div>
      <div className={style.MainAddItem}>

      <div className={style.Logo}></div>
     

      <div className={style.LogoName}>
            <p>CashoMenia</p>
      </div>

      <div className={style.MainCard}>
      <form onSubmit={handleSubmit}>
       
        <input
          type="text"
          placeholder="Item Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="Number"
          placeholder="item Cost"
          value={Cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <input
          type="text"
          placeholder="info"
          value={Info}
          onChange={(e) => setInfo(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Add</button>
      </form> 
      <div className={style.SideCard}></div>
      </div>

      <div className={style.footer}>
          <div>
            <p>Buy / Sell Items </p>
          </div>
          <button>Market</button>
        </div>
      </div>

      

      <Toaster />
    </div>
  );
}

 
