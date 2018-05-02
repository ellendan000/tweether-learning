import { getInstance, eth } from './provider';

import UserStorage from "./artifacts/UserStorage.json";
import UserController from "./artifacts/UserController.json";

import Web3 from "web3";

const {
  utils: {
    hexToString,
  },
} = Web3;

export const getUserInfo = async (userId) => {
  const storage = await getInstance(UserStorage);
  const [id, username] = await storage.profiles.call(userId);

  return {
    id: parseInt(id),
    username: hexToString(username),
  }
};

export const createUser = async (username) => {
  const controller = await getInstance(UserController);
  const addresses = await eth.getAccounts();

  return await controller.createUser(
    username,
    {
      from: addresses[0],
    });
};