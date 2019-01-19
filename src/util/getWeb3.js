import Web3 from 'web3'

let getWeb3 = new Promise((resolve, reject) => {
    let web3js = window.web3    //브라우저 상의 web3 인스턴스
    if(typeof web3js !== 'undefined'){
        let web3 = new Web3(web3js.currentProvider);
        resolve({
            injectedWeb3:web3.isConnected(),
            web3(){
                return web3;
            }
        })
    }else{
        reject(new Error('메타마스크를 찾을수 없습니다'));
    }
}).then(result => {
    return new Promise((resolve,reject) => {
        result.web3().version.getNetwork((err, networkId) => {
            if(err){
                reject(new Error('network ID 찾을수 없습니다'))
            }else{
                result = Object.assign({},result,{networkId})
                resolve(result)
            }
        })
    })
}).then(result => {
    return new Promise((resolve, reject) => {
        result.web3().eth.getCoinbase((err,coinbase) => {
            if(err){
                reject(new Error('coinbase를 찾을수 없습니다'))
            }else{
                result = Object.assign({},result,{coinbase})
                resolve(result)
            }
        })
    })
}).then(result => {
    return new Promise((resolve, reject) => {
        result.web3().eth.getBalance(result.coinbase,(err,balance) => {
            if(err){
                reject(new Error(`${result.coinbase} 주소의 금액을 찾을수 없습니다 `))
            }else{
                result = Object.assign({},result,{balance});
                resolve(result)
            }
        })
    })
})

export default getWeb3