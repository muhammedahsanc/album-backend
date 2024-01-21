const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { Readable }  = require('stream');
const  sharp   = require('sharp');

const storage = multer.memoryStorage();

cloudinary.config({
  cloud_name: 'dteo8gino',
  api_key:'721761374896543',
  api_secret: 'Tbt2Jr-YZ23J4SI2sBvH47J8V4A'
});

const fileFilter = (req, file, cb) => {
  const file_extension = file.originalname.slice(
    ((file.originalname.lastIndexOf(".") - 1) >>> 0) + 2
  );
  const array_of_allowed_files = ["png", "jpeg", "jpg", "gif"];
  const array_of_allowed_file_types = [
    "image/png",
    "image/jpeg", 
    "image/jpg",
    "image/gif",
  ];
  if (
    array_of_allowed_files.includes(file_extension) &&
    array_of_allowed_file_types.includes(file.mimetype)
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error("Type validation failed"));
  }
};
 
const bufferToStream = (buffer) => {
  const readable = new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    },
  });
  return readable;
};

const uploadFiles = multer({
    storage,
    fileFilter,
    limits: { fileSize: 4000000 },
  }).array("file", 10);
  
  const uploadToCloudinaryMultiple = async (req, res, next) => {
    try {
      if (req.files) {
        req.fileOriginalname = [];
        const uploadPromises = Array.isArray(req.files)
          ? req.files.map((file) => {
              req.fileOriginalname.push(file.originalname);
              return new Promise(async (resolve, reject) => {
                try {
                  const data = await sharp(file.buffer)
                    .webp({ quality: 20 })

                    .toBuffer();
                   const stream = cloudinary.uploader.upload_stream(
                    { folder: "photoAlbum" },
                    (error, result) => {
                      if (error) {
                        reject(error);
                      } else {
                        resolve({ URL: result.secure_url });
                      }
                    }
                  );
                  bufferToStream(data).pipe(stream);
                } catch (error) {
                  reject(error);
                }
              });
            })
          : [];
  
        const results = await Promise.all(uploadPromises);
        req.filenames = results.map((result) => result.URL);
        next();
      } else {
        throw new Error("No files were uploaded.");
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
  module.exports = {
    uploadFiles,
    uploadToCloudinaryMultiple,
  };
