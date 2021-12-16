'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Product = {
    id,
    title,
    slug,
    description,
    price,
    qtd,
    image
  } 
*/

const schema = new Schema({
  // _id
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  qtd: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Product', schema);