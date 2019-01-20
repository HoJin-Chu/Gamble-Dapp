/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getWeb3 from '../util/getWeb3'
import pollWeb3 from '../util/pollWeb3'
import getContract from '../util/getContract'

Vue.use(Vuex);
    
export const store = new Vuex.Store({
 strict: true,
 state,
 mutations: {
    registerWeb3Instance (state,payload){
        console.log('registerWeb3Instance store mutations 발생',payload)
        let web3Copy = state.web3;
        
        web3Copy.coinbase = payload.coinbase;
        web3Copy.networkId = payload.networkId;
        web3Copy.balance = parseInt(payload.balance, 10);
        web3Copy.isInjected = payload.injectedWeb3;
        web3Copy.web3Instance = payload.web3;
        state.web3 = web3Copy;

        pollWeb3();
    },
    pollWeb3Instance(state, payload) {
        console.log('pollWeb3Instance mutation being executed', payload);
        state.web3.coinbase = payload.coinbase;
        state.web3.balance = parseInt(payload.balance, 10);
    },
    registerContractInstance(state, payload) {
        console.log('Casino contract instance: ', payload);
        state.contractInstance = () => payload;
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
     },
     async getContractInstance({ commit }) {
        try {
          let result = await getContract;
          commit('registerContractInstance', result);
        } catch (err) {
          console.log('error in action getContractInstance', err);
        }
      }
 }
});