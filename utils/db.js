import mongoose from "mongoose";

import dotenv from "dotenv"
dotenv.config()


function db() {

    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => console.log('Connected!'))
        .catch((err) => console.log("not connected"))
}
export default db