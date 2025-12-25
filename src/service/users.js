'use strict';

const users = [];

const resetUsers = () => {
  users.length = 0;
};

const getAllUsers = () => {
  if (users.length === 0) {
    return [];
  }

  return users;
};

const getUserById = (id) => {
  const index = users.findIndex((user) => user.id === +id);

  if (index === -1) {
    return null;
  }

  return users[index];
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
  const index = users.findIndex((user) => user.id === +id);

  if (index === -1) {
    return null;
  }

  users.splice(index, 1);

  return true;
};

const updateUser = (id, name) => {
  const index = users.findIndex((user) => user.id === +id);

  if (index === -1) {
    return null;
  }

  users[index].name = name;

  return users[index];
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  resetUsers,
};
