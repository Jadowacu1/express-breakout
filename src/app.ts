import  express  from "express";
import  "./database/config/connection";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", routes);

const port: any = process.env.PORT || 3000;
app.listen(port, () => {
     console.log("Server is running on port:", port);
})