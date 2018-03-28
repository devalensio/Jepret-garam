var express = require('express');
var router = express.Router();
const { addPhoto } = require('../controllers/image')
const {sendUploadToGCS} = require('../middleware/uploadGcs');
const multer = require('multer');
const upload = multer({
 storage  : multer.memoryStorage(),
 limits   : {
   fileSize: 10*1024*1024
}
})

/* GET users listing. */
router.post('/photo', upload.single('item'),sendUploadToGCS,addPhoto);

module.exports = router;
