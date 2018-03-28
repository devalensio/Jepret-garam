const Image = require('../models/images');
const jwt = require('jsonwebtoken');

module.exports = {
  addPhoto: function (req, res) {
    console.log(req.file);
    let token = req.headers.token
    let decoded = jwt.verify(token, process.env.SECRET)
    const image = new Image()
    image.photo = req.file.cloudStoragePublicUrl
    image.caption = req.body.caption
    image.userId = decoded.id
    image.save().then( data => {
      res.status(200).json({
        message: 'succes create photo',
        data
      })
    })
  },
  getPhoto: function (req, res) {
    Image.find().populate('userId').exec().then(data => {
      res.status(200).json({
        message: 'berhasil ambil foto',
        data
      })
    })
  },
  editPhoto: function (req, res) {
    let token = req.headers.token
    let decoded = jwt.verify(token, process.env.SECRET)
    Image.updateOne({
      userId: decoded.id,
      _id: req.params.id
    },{
      $set: {
        caption : req.headers.caption
      }
    }).then(data => {
      res.status(200).json({
        message: 'success edit caption',
        data
      })
    })
  },
  deletePhoto: function (req, res) {
    let token = req.headers.token
    let decoded = jwt.verify(token, process.env.SECRET)
    console.log(decoded);
    Image.remove({
      userId: decoded.id,
      _id: req.params.id
    }).then(data => {
      res.status(200).json({
        message: 'success delete data',
        data
      })
    })
  }
}
