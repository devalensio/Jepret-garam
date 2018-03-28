var express = require('express');
var router = express.Router();
const { addPhoto,getPhoto,editPhoto,deletePhoto } = require('../controllers/image.js')
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
router.put('/:id', editPhoto)
router.delete('/delete/:id', deletePhoto)


module.exports = router;
