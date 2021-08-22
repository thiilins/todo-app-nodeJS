const filesModel = {
  formatURL(images) {
    let imagesURL = [];
    images.forEach((img) => {
      imagesURL.push(img.filename);
    });
    return imagesURL;
  },
};
// ROUTES
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  },
});
const uploadFile = multer({ storage });

//uploadFile.array("img")
module.exports = filesModel;
