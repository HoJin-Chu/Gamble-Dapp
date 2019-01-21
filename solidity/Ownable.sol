pragma solidity ^0.5.0;

//  Ownable 컨트랙트는 onlyOwner라는 접근제어자를 제공한다.
//  이 제어자가 붙은 함수는 컨트랙트의 소유자만이 실행시킬 수 있는 함수가 된다

contract Ownable {
    address owner;
    
    constructor() public payable {
        owner = msg.sender;
    }
    
     /* 접근 제어자 선언 */
     modifier onlyOwner {
        require ( msg.sender == owner );
         _;
    }
}