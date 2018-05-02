import { eth, getInstance } from './provider';

import TweetStorage from "./artifacts/TweetStorage.json";
import TweetController from "./artifacts/TweetController.json";

export const createTweet = async (text) => {
  const controller = await getInstance(TweetController);
  const addresses = await eth.getAccounts();

  return await controller.createTweet(
    1,
    text,
    {
      from: addresses[0],
    });
};

export const getTweetInfo = async (tweetId) => {
  const storage = await getInstance(TweetStorage);
  const tweet = await storage.tweets.call(tweetId);

  const [id, text, userId, postedAt] = tweet;

  // Parse the data to make it look nice:
  return {
    id: parseInt(id),
    userId: parseInt(userId),
    text,
    postedAt: parseInt(postedAt),
  }
};