<!-- hello-metamask.vue -->

<template lang="html">
  <div class='metamask-info'>
    <p v-if="isInjected" id="has-metamask"><i aria-hidden="true" class="fa fa-check"></i> 메타마스크 지갑 연결</p>
    <p v-else id="no-metamask"><i aria-hidden="true" class="fa fa-times"></i> 메타마스크를 찾을수가 없습니다</p>
    <p>네트워크환경: {{ network }}</p>
    <p>계정: {{ coinbase }}</p>
    <p>금액: {{ balance }} Wei </p>
  </div>
</template>

<script>
  import {NETWORKS} from '../util/constants/networks'
  import {mapState} from 'vuex'

  export default {
    name: 'hello-metamask',
    computed: mapState({
      isInjected: state => state.web3.isInjected,
      network: state => NETWORKS[state.web3.networkId],
      coinbase: state => state.web3.coinbase,
      balance: state => state.web3.balance
    })
  }
</script>

<style scoped>
#has-metamask {
  color: green;
}
#no-metamask {
  color:red;
}
.metamask-info{
  text-align: center;
  margin-top: 20%;
}
</style>