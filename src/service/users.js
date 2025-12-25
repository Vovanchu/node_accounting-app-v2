'use strict';

let users = [];

const getAllUsers = () => {
  if (users.length === 0) {
    return [];
  }

  return users;
};

const getUserById = (id) => {
  return users.find((user) => user.id === +id);
};

const createUser = (name) => {
  const user = {
    id: users.length + 1,
    name,
  };

  users.push(user);

  return user;
};

const deleteUser = (id) => {
  users = users.filter((user) => user.id !== id);
};

const updateUser = (id, name) => {
  const index = users.findIndex((user) => user.id === +id);

  if (index === -1) {
    return null;
  }

  users[index].name = name;

  return users[index];
};

const clear = () => {
  users = [];
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  clear,
};
