'use strict'

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');
const md5 = require('md5');
const authService = require('../services/auth-service');

exports.post = async(req, res, next) => {
  try {
    await repository.create({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      password: md5(req.body.password + global.SALT_KEY)
    });

    res.status(201).send({ 
      message: 'Cliente cadastrado com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

exports.authenticate = async(req, res, next) => {
  try {
    var customer = await repository.authenticate({
      email: req.body.email,
      password: md5(req.body.password + global.SALT_KEY)
    });

    if(!customer){
      res.status(404).send({
        message: 'Usuário ou senha invalidos'
        }
      );
      return ;
    }

    const token = await authService.generateToken({
      id: customer.id,
      email: customer.email,
      name: customer.name,
      roles: customer.roles
    });

    res.status(200).send({
      token: token,
      data: {
        email: customer.email,
        name: customer.name
      }
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

exports.refreshToken = async(req, res, next) => {
  try {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    const data = await authService.decodeToken(token);

    var customer = await repository.getById(data.id);

    if(!customer){
      res.status(404).send({
        message: 'Cliente não encontrado'
        }
      );
      return ;
    }

    const tokenData = await authService.generateToken({
      id: customer.id,
      email: customer.email,
      name: customer.name,
      roles: customer.roles
    });

    res.status(200).send({
      token: tokenData,
      data: {
        email: customer.email,
        name: customer.name
      }
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

exports.changePermission = async(req, res, next) => {
  try {
    await repository.changePermission(req.body.id);

    res.status(201).send({ 
      message: 'Role Cliente alterado com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

exports.delete = async(req, res, next) => {
  try {
    await repository.delete(req.body.id);
    res.status(200).send({ 
      message: 'Customer removido com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

exports.get = async(req, res, next) => {
  try {
    var data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

exports.put = async(req, res, next) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(200).send({ 
      message: 'Usuario atualizado com sucesso'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};