const TweetStorage = artifacts.require('TweetStorage');
const TweetController = artifacts.require('TweetController');
const utils = require('../utils');
const { assertVMException } = utils;

contract('tweets', () => {

  // before(async () => {
  //   const tweetStorage = await TweetStorage.deployed()
  //   await tweetStorage.createTweet(1, "Hello world!")
  // });

  it("can't create tweet without controller", async () => {
    const storage = await TweetStorage.deployed()

    try {
      const tx = await storage.createTweet(1, "tristan")
      assert.fail();
    } catch (err) {
      assertVMException(err);
    }
  })

  it("can create tweet with controller", async () => {
    const controller = await TweetController.deployed()

    const tx = await controller.createTweet(1, "Hello world!")

    assert.isOk(tx)
  })

})