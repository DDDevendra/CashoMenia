import  express  from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connect from "./connection.js";
import router from "./router/routes.js";

const app  = express();
const PORT = process.env.PORT || 9000

app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', ()=>{
    console.log("Server is Connected !");
})



Connect().then(()=>{

    app.listen(PORT, async()=>{
        console.log("server is Connected at " + PORT);
    })
    
}).catch((error)=>{
        console.log("Faild To Connect server !");
})


app.use('/api',router);