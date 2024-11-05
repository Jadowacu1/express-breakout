import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbUrl:any  = process.env.dbUrl;

const dbcon = async () => {
    await mongoose
    .connect(dbUrl)
    .then((result) => {
      console.log("Database is connected now");
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export default dbcon;