<template>
    <div class="metamask-info">
        <p>메타마스크 : {{web3.isInjected}}</p>
        <p>네트워크 : {{web3.networkId}}</p>
        <p>주소 : {{web3.coinbase}}</p>
        <p>금액 : {{web3.balance}}</p>
    </div>
</template>

<script>
export default {
    name: 'MetaMask',
    computed:{
        web3(){
            return this.$store.state.web3
        }
    }
}
</script>

<style>

</style>
