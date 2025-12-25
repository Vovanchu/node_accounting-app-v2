'use strict';

const serviceUser = require('../service/users');

const getAllUsers = (req, res) => {
  res.send(serviceUser.getAllUsers());
};

const getUserById = (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(400).send('User ID is required');

    return;
  }

  const user = serviceUser.getUserById(id);

  if (!user) {
    res.status(404).send('Not Found');

    return;
  }

  res.status(200).send(user);
};

const createUser = (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).send('Name is required');

    return;
  }

  const user = serviceUser.createUser(name);

  res.status(201).send(user);
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  const user = serviceUser.getUserById(+id);

  if (!user) {
    return res.sendStatus(404);
  }

  serviceUser.deleteUser(+id);

  return res.sendStatus(204);
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  if (!id) {
    res.status(400).send('User ID is required');

    return;
  }

  if (!name) {
    res.status(400).send('Name is required');

    return;
  }

  const updatedUser = serviceUser.updateUser(id, name);

  if (!updatedUser) {
    res.status(404).send('User not found');

    return;
  }

  res.status(200).send(updatedUser);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
