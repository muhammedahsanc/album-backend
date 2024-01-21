const express = require("express");
const app = express();
const cors = require("cors");
const { errorHandling, notFound } = require("./middlewares");
require("./dbconnection").dbConnection();
const {
  addSignUpData,
  addLoginData,
  addGoogleLoginData,
  addGmailVerify,
  addImage,
  gallery,
  getAlbums,
  getGallery,
  addFavourite,
  getFavourite,
  deletePhoto,
  deleteAlbum,
  RemoveFavPhoto,
  getAllPhotos
} = require("./routes");
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/addSignUpData", addSignUpData);
app.use("/addLoginData", addLoginData);
app.use("/addGoogleLoginData", addGoogleLoginData);
app.use("/addGmailVerification", addGmailVerify);
app.use("/image", addImage);
app.use("/gallery", gallery);
app.use("/getAlbums", getAlbums);
app.use("/getGallery", getGallery);
app.use("/FavPhoto", addFavourite);
app.use("/getFavourite", getFavourite);
app.use("/deletePhoto", deletePhoto);
app.use("/deleteAlbum", deleteAlbum);
app.use("/RemoveFavPhoto", RemoveFavPhoto);
app.use("/getAllPhotos", getAllPhotos);





app.use("*", notFound);
app.use(errorHandling);

module.exports = app;
