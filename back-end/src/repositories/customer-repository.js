'use strict'
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.create = async(data) => {
  var customer = new Customer(data);
  await customer.save();
}

exports.authenticate = async(data) => {
  const res = await Customer
    .findOne({
      email: data.email,
      password: data.password,
    });
  return res;
}

exports.getById = async(id) => {
  const res = await Customer
    .findById(id);
  return res;
}

exports.changePermission = async(id) => {
  let customer = await this.getById(id);
  if(!customer)
    return ;

  let role;
  if(customer.roles == 'admin')
    role = 'user';
  else
    role = 'admin';
  await  Customer
    .findByIdAndUpdate(id, {
      $set : {
        roles: role
      }
    })
}

exports.delete = async(id) => {
  await Customer.findByIdAndDelete(id);
}

exports.get = async() => {
  return await Customer.find({}, 'email roles');
}