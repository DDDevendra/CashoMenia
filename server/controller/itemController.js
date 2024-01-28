import Item from "../model/item.model.js";
import { nanoid } from "nanoid";

export async function addItem(req, res) {
  try {
    const data = req.body;
    if (!data) {
      return res.status(500).send({ data: "Failed to Load data" });
    }

    const profileImg = req.file ? req.file.path : ""; // Foe Image Addition 

    const saveData = new Item({
      Name: data.Name,
      Id: nanoid(8),
      Cost: data.Cost,
      Info: data.Info,
      Image: profileImg,
    });

    await saveData
      .save()
      .then(() => {
        return res.status(200).send({ data: "Item Saved Successfuly " });
      })
      .catch((error) => {
        return res.status(501).send({ data: error });
      });
  } catch (error) {
    return res.status(501).send({ data: "Failed To add Item " });
  }
}
