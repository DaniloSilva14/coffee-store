'use strict'
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
  return await Product.find();
}

exports.getById = async(id) => {
  return await  Product.findById(id)
}

exports.create = async(data) => {
  var product = new Product(data);
  await product.save();
}

exports.update = async(id, data) => {
  await  Product
    .findByIdAndUpdate(id, {
      $set : {
        title: data.title,
        slug: data.slug,
        description: data.description,
        price: data.price,
        qtd: data.qtd,
        sold: data.sold,
        image: data.image
      }
    })
}

exports.delete = async(id) => {
  await Product.findByIdAndDelete(id);
}

exports.sellProduct = async(id, data) => {
  let product = await this.getById(id)

  if(!product) return;

  let newQtd = product.qtd - data;
  let newSold = Number(product.sold) + Number(data);

  await  Product
    .findByIdAndUpdate(id, {
      $set : {
        qtd: newQtd,
        sold: newSold
      }
    })
}