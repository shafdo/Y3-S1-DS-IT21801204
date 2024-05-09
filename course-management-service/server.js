//assigning variables and importing the dependencies installed
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

//Routes
app.get("/", (req, res) => {
    res.send("Home Page");
})

/* video upload functionality (head) */
const multer = require('multer');
const firebase = require('firebase/app')
const {getStorage, ref, uploadBytes, getDownloadURL} = require('firebase/storage')

const firebaseConfig = {
    apiKey: "AIzaSyBl4UkVcQ84mkmWF52Vpd0DT4kbrO_RmnQ",
    authDomain: "dsassignment-66e14.firebaseapp.com",
    projectId: "dsassignment-66e14",
    storageBucket: "dsassignment-66e14.appspot.com",
    messagingSenderId: "461683121719",
    appId: "1:461683121719:web:6b8d41cd6411819e3e29b2",
    measurementId: "G-1W09E138C3"
  };

firebase.initializeApp(firebaseConfig);
const storage = getStorage();
const upload = multer({storage: multer.memoryStorage()});
app.post('/content/video/add', upload.single("video"), (req,res)=> {
    if(!req.file){
        return res.status(400).json({message: 'No file found'});
    }
    
    const StorageRef = ref(storage, req.file.originalname);
    const metadata = {
        contentType: 'video/mp4'
    }
    uploadBytes(StorageRef, req.file.buffer, metadata)
    .then(()=> {
        getDownloadURL(StorageRef).then(url => {
            res.send({url})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: `error: ${err}`})
        })
    })
})



/* video upload functionality (tail) */

//defining the port numbers (if 8070 is not available, assign any available port number)
const PORT = process.env.PORT || 8070;

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//connecting the database
const URL = process.env.MONGODB_URL;
//mongoDB configurations
mongoose.connect(URL, {
    
});

// Importing and accessing the course.js route file
const courseRouter = require("./routes/course.js")
// using the imported route
app.use("/course", courseRouter);

// Importing and accessing the content.js route file
const contentRouter = require("./routes/content.js")
// using the imported route
app.use("/content", contentRouter);

//creating the connection
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connection Successful")
})

//run this in the port
app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`)
})