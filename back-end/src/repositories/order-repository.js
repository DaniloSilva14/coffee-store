'use strict'
const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const productRepository = require('./product-repository');

exports.get = async() => {
  const res = await Order.find({}, 'number status items')
    .populate('customer', 'name')
    .populate('items.product', 'title');
  return res;
}

exports.create = async(data) => {
  var order = new Order(data);
  order.save();

  data.items.forEach(o => {
    productRepository.sellProduct(o.product, o.quantity)
  });
}