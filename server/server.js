import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connect from "./connection.js";
import router from "./router/routes.js";
import multer from "multer";
import path from "path";

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true , limit: '50mb'}));

app.get("/", () => {
  console.log("Server is Connected !");
});


const projectRoot = path.resolve();
app.use("/uploads", express.static(path.join(projectRoot, "uploads")));


Connect()
  .then(() => {
    app.listen(PORT, async () => {
      console.log("server is Connected at " + PORT);
    });
  })
  .catch((error) => {
    console.log("Faild To Connect server !");
  });

app.use("/api", router);
