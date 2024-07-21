import mongoose from "mongoose";


async function dbConnect(){
    return await mongoose.connect(process.env.MONGO_DB_URI);
}

export default  dbConnect;  