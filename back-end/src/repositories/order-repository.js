'use strict'
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async() => {
  // const res = await Order.find({})
  //   .populate('customer')
  //   .populate('items.product');
  const res = await Order.find({}, 'number status items')
    .populate('customer', 'name')
    .populate('items.product', 'title');
  return res;
}

exports.create = async(data) => {
  var order = new Order(data);
  await order.save();
}