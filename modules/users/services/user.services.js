// services/userService.js

const User = require('../../../models/user');

async function createUser(firstName, lastName, email) {
  try {
    const user = await User.create({ firstName, lastName, email });
    return user;
  } catch (error) {
    throw new Error('Error creating user');
  }
}

async function getUsers() {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error('Error fetching users');
  }
}

async function getUserById(id) {
  try {
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found');
    return user;
  } catch (error) {
    throw new Error('Error fetching user');
  }
}

async function updateUser(id, updates) {
  try {
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found');
    await user.update(updates);
    return user;
  } catch (error) {
    throw new Error('Error updating user');
  }
}

async function deleteUser(id) {
  try {
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found');
    await user.destroy();
    return user;
  } catch (error) {
    throw new Error('Error deleting user');
  }
}

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
