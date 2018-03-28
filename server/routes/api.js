var express = require('express');
var router = express.Router();
const { addPhoto,getPhoto } = require('../controllers/image.js')
const { sendUploadToGCS } = require('../middleware/uploadGcs');
const multer = require('multer');
const upload = multer({
 storage  : multer.memoryStorage(),
 limits   : {
   fileSize: 10*1024*1024
   }
})

/* GET users listing. */
router.post('/upload',upload.single('item'),sendUploadToGCS,addPhoto)
router.get('/', getPhoto)


module.exports = router;
