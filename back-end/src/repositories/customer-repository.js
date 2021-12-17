'use strict'
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const md5 = require('md5');

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
  if(customer.roles == "admin")
    role = "user";
  else
    role = "admin";
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
  return await Customer.find();
}

exports.update = async(id, data) => {
  let customer = await this.getById(id);
  if(!customer)
    return ;

  let newPass = md5(data.password + global.SALT_KEY);

  if(!data.password || data.password == newPass)
    data.password = customer.password;
  else  
    data.password = newPass;

  await  Customer
    .findByIdAndUpdate(id, {
      $set : {
        name: data.name,
        address: data.address,
        phone: data.phone,
        email: data.email,
        password: data.password,
      }
    })
}