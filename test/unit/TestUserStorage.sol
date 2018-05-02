pragma solidity ^0.4.19;

import "truffle/Assert.sol";
import "../../contracts/users/UserStorage.sol";

contract TestUserStorage {
  UserStorage userStorage;

  function TestUserStorage() public {
    userStorage = new UserStorage();
    userStorage.setControllerAddr(this);
  }

  function testCreateFirstUser() public {
    uint _expectedId = 1;

    Assert.equal(userStorage.createUser("tristan"), _expectedId, "Should create user with ID 1");
  }

}