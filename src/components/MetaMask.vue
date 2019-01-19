<template>
    <div class="metamask-info">
        <p>메타마스크 : </p>
        <p>네트워크 : </p>
        <p>주소 : </p>
        <p>금액 : </p>
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
