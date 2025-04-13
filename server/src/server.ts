import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/dbConfig';
dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${port}`);
});


