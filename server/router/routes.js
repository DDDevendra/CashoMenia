import { Router } from "express";
import multer from "multer";

import * as userController from "../controller/userController.js";
import * as ItemController from "../controller/itemController.js";

const router = Router();

const userStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/users/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const itemStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/items/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const userUpload = multer({ storage: userStorage });
const itemUpload = multer({ storage: itemStorage });


router.route("/test").get(userController.test);
router.route("/signUp").post(userController.SingUp);
router.route("/login").put(userController.Login);

router.route("/addItem").post(itemUpload.single("Image"), ItemController.addItem);

export default router;
