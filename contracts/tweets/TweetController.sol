pragma solidity ^0.4.19;
import '../helpers/BaseController.sol';
import '../ContractManager.sol';
import './TweetStorage.sol';

contract TweetController is BaseController {

  function createTweet(uint _userId, string _text) public returns(uint) {
    ContractManager _manager = ContractManager(managerAddr);

    address _tweetStorageAddr = _manager.getAddress("TweetStorage");
    TweetStorage _tweetStorage = TweetStorage(_tweetStorageAddr);

    return _tweetStorage.createTweet(_userId, _text);
  }
}