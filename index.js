//app create
const express = require("express");
const app = express();
//port
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:'/tmp/'
}));

//db connnection
const db = require("./config/databse");
db.connect();

//cloud connection
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// api route mount
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);

//activate server
app.listen(PORT, () => {
  console.log(`APP is running at ${PORT}`);
});
