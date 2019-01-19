/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getWeb3 from '../util/getWeb3'

Vue.use(Vuex);
    
export const store = new Vuex.Store({
 strict: true,
 state,
 mutations: {
    registerWeb3Insctance (state,payload){
        console.log('registerWeb3Instance store mutations 발생',payload)
        let web3Copy = state.web3;
        
        web3Copy.coinbase = payload.coinbase;
        web3Copy.networkId = payload.networkId;
        web3Copy.balance = parseInt(payload.balance, 10);
        web3Copy.isInjected = payload.injectedWeb3;
        web3Copy.web3Instance = payload.web3;
        state.web3 = web3Copy;
    }
 },
 actions: {
     async registerWeb3 (context){
         console.log('registerWeb3 store action 발생')
         try{
            let result = await getWeb3;
            console.log('registerWeb3Instance', result);
            context.commit('registerWeb3Instance',result);
         }catch(err){
            console.log('registerWeb3에서의 에러',err)
         }
     }
 }
});