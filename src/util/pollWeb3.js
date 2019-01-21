/* eslint-disable no-console */
// 자동으로 변경된 데이터를 로드하지 않고 페이지를 리프레시해야 변경된 데이터가 화면에 표시된다. 변경되지 않고 구현 할수 있도록 데이터를 폴링하는 방식 

// 메타마스크 인스턴스에 의존하지 않기 위해서 web3를 import
// web3 인스턴스 생성 
// 계정이 변경되었는지 매번 확인할 interval 세팅한다, 계정이 바뀐것이 아니면 잔액을 비교하여 잔액 변화도 반영할수있도록 한다 
// 메타마스크 컴포넌트가 computed 프로퍼티로 web3를 가지고 있으므로 위과정에 의한 
// 데이터 변경은 즉각적으로 반영될 것이다 

import Web3 from 'web3'
import { store } from '../store'

let pollWeb3 = () => {
    let web3 = window.web3;
    web3 = new Web3(web3.currentProvider);
  
    setInterval(() => {
      if(web3 && store.state.web3.web3Instance) {
        if(web3.eth.coinbase !== store.state.web3.coinbase) {
          let newCoinbase = web3.eth.coinbase;
          web3.eth.getBalance(newCoinbase, (err, newBalance) => {
            if (err) {
              console.log(err);
            } else {
              store.commit('pollWeb3Instance', {
                coinbase: newCoinbase,
                balance: parseInt(newBalance, 10)
              });
            }
          });
        } else {
          web3.eth.getBalance(store.state.web3.coinbase, (err, polledBalance) => {
            if (err) {
              console.log(err);
            } else if (parseInt(polledBalance, 10) !== store.state.web3.balance) {
              store.commit('pollWeb3Instance', {
                coinbase: store.state.web3.coinbase,
                balance: polledBalance
              });
            }
          });
        }
      }
    }, 500);
  }
  
  export default pollWeb3;