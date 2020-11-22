import express from "express";
import mongoose from "mongoose";
import data from './data.js';
import keys from './config/dev.js'
import Videos from './models/Videos.js'
// app config
const app = express();
const port = 8000;

// middlewares
app.use(express.json());
app.use((req, res, next)=> {
    res.setHeaders('Access-Control-Allow-Origin', '*');
    res.setHeaders('Access-Control-Allow-Headers', '*');
    next();
});

// DB config

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// API endpoints
app.get("/", (req, res) => {
    res.status(200).send("HELLO WORLD");
});

app.get('/v1/posts', (req, res) => {
    res.status(200).send(data);
});

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
       if(err) {
           res.status(500).send(err);
       } else {
           res.status(200).send(data);
       }
    });
});

app.post('/v2/posts', (req, res) => {
    console.log(req.body);
    Videos.create(req.body, (err, data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

// listener
app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});