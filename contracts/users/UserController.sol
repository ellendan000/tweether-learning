pragma solidity ^0.4.19;
import '../helpers/BaseController.sol';
import '../ContractManager.sol';
import './UserStorage.sol';

contract UserController is BaseController {
  
  function createUser(bytes32 _username) public returns(uint) {
    ContractManager _manager = ContractManager(managerAddr);

    address _userStorageAddr = _manager.getAddress("UserStorage");
    UserStorage _userStorage = UserStorage(_userStorageAddr); 

    return _userStorage.createUser(_username);
  }
}