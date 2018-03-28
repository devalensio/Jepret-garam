const Image = require('../models/images');
const jwt = require('jsonwebtoken');

module.exports = {
  addPhoto: function (req, res) {
    console.log('hahaha');
    let token = req.headers.token
    let decoded = jwt.verify(token, process.env.SECRET)
    const image = new Image()
    image.photo = req.file.cloudStoragePublicUrl
    image.caption = req.body.caption
    image.userId = decoded.id
    // Image.save().then( data => {
    //   res.status(200).json({
    //     message: 'succes create photo',
    //     data
    //   })
    // })
  }
}
