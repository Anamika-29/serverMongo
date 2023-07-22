import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-ykodbqe-shard-00-00.eagdhfs.mongodb.net:27017,ac-ykodbqe-shard-00-01.eagdhfs.mongodb.net:27017,ac-ykodbqe-shard-00-02.eagdhfs.mongodb.net:27017/?ssl=true&replicaSet=atlas-11ru97-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true  });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;