import mongoose from "mongoose";
export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://vishnu7797jk_db_user:resume123@cluster0.idnuevn.mongodb.net/RESUME')
    .then(()=>console.log('DB CONNRCTED'))
}