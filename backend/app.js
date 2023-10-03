const express= require('express');
const app = express();
const errorMiddleware = require('./middleware/error');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload=require('express-fileupload')

app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(express.json({ limit: "5000mb" })); 
app.use(express.urlencoded({ limit: "5000mb", extended: true }));



// Routes imports ................
const user=require('./routes/userRoute')
const product=require("./routes/productRoute");
app.use("/api/v1",product);
app.use("/api/v1",user);

// middleware for error 
app.use(errorMiddleware);








module.exports=app;