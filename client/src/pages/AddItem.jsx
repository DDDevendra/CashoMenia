import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "../helper/helper";


export default function AddItem() {


  const [Name, setName] = useState('');
  const [Cost, setCost] = useState(0);
  const [Info, setInfo] = useState('');
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


 
    // const data = {
    //   Name: Name,
    //   Cost: Cost,
    //   Info: Info,
    //   Image: Image,
    // };
    // Data.forEach((i)=>{
    //     console.log(i);
    // })


    console.log(Data);

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
      <form onSubmit={handleSubmit}>
        <h2>this is add item page</h2>
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

      <Toaster />
    </div>
  );
}
