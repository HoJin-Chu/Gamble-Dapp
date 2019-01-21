<template>
    <div>
        <Gambling/>
        <MetaMask></MetaMask>
    </div>
</template>

<script>
import MetaMask from './MetaMask'
import Gambling from './GamblingComponent'

export default {
    name: 'CasinoDapp',
    components:{
        MetaMask,
        Gambling
    },
    // web3 요소를 컴포넌트가 생성되기 이전에 실행할수 있도록 beforeCreate사용 
    beforeCreate(){
        // eslint-disable-next-line
        console.log('CasinoDapp에서의 registerWeb3 action 디스패치')
        this.$store.dispatch('registerWeb3')
    }
}
</script>

<style>

</style>
