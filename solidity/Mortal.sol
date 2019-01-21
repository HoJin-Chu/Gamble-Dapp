pragma solidity ^0.5.0;
import "./Ownable.sol";

// Motral컨트랙트는 Ownable컨트랙트를 상속하고 있다.
// 따라서 kill함수에 onlyOwner접근제어자를 사용할수있게 된다.
// kill함수는 컨트랙트 소유자만이 실행할수있는 함수가 된다 

// 또 kill 함수가 wrapping중인 selfdestruct는 컨트랙트를 파기하는 함수로서 인자로 
// 받은 주소에 컨트랙트에 묶인 이더를 송금한 뒤에 컨트랙트를 파기한다 
contract Mortal is Ownable{
    function kill() public onlyOwner{
        selfdestruct(owner);
    }
}