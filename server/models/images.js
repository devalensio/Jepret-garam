const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  photo: String,
  caption: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},{
  timestamps: true
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image
