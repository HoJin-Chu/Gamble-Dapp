<template>
 <div class="Gambling">
   <h1>도박 DAPP</h1>
   <h3>1에서 10까지의 숫자에 돈을 걸어보세요</h3>
   배팅 금액 : <input v-model="amount" placeholder="0 Ether">
   <ul>
     <li v-on:click='clickNumber'>1</li>
     <li v-on:click='clickNumber'>2</li>
     <li v-on:click='clickNumber'>3</li>
     <li v-on:click='clickNumber'>4</li>
     <li v-on:click='clickNumber'>5</li>
     <li v-on:click='clickNumber'>6</li>
     <li v-on:click='clickNumber'>7</li>
     <li v-on:click='clickNumber'>8</li>
     <li v-on:click='clickNumber'>9</li>
     <li v-on:click='clickNumber'>10</li>
  </ul>
  <img v-if="pending" id="loader" src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif">
  <div class="event" v-if="winEvent">
    <p>Won: {{ winEvent.userWin }}</p>
    <p>Winning Number: {{ winEvent.winningNumber }}</p>
    <p>Amount: {{ winEvent.rewards }} Wei</p>
  </div>
  <div class="event" v-if="winEvent">
   <p v-if="winEvent.userWin" id="has-won"><i aria-hidden="true" class="fa fa-check"></i> Congragulations, you have won {{winEvent.rewards}} wei</p>
   <p v-else id="has-lost"><i aria-hidden="true" class="fa fa-check"></i> Sorry you lost, please try again.</p>
  </div>
 </div>
</template>

<script>
export default {
    name: 'Gambling',
    mounted () {
    console.log('dispatching getContractInstance')
    this.$store.dispatch('getContractInstance')
    },
    data () {
    return {
        amount: null,
        pending: false,
        winEvent: null
        }
    },
   methods: {
    clickNumber (event) {
        console.log(event.target.innerHTML, this.amount)
        this.winEvent = null
        this.pending = true
        this.$store.state.contractInstance().bet(event.target.innerHTML, {
        gas: 300000,
        value: this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'),
        from: this.$store.state.web3.coinbase
        }, (err, result) => {
        if (err) {
            console.log(err)
            this.pending = false
        } else {
            let bettingResult = this.$store.state.contractInstance().bettingResult()
            /* .watch => solidity event를 감시 */
            bettingResult.watch((err, result) => {
            if (err) {
                console.log('could not get event Won()')
            } else {
                this.winEvent = result.args
                this.winEvent.rewards = parseInt(result.args.rewards, 10)
                console.log(`winEvent: ${result.args}`)
                this.pending = false
            }
          });
        }
      });
    }
  }
}
</script>

<style scoped>
.Gambling {
 margin-top: 50px;
 text-align:center;
}
#loader {
 width:150px;
}
ul {

 
 margin-top: 100px;
 list-style-type: none;
 display: grid;
 grid-template-columns: repeat(5, 1fr);
 grid-column-gap:10%;
 grid-row-gap:20%;
}
li{
 margin-right: 5px;
 border-radius: 50%;
 width: 80px;
 cursor: pointer;
 font-size : 50px;
 font-weight: 900;
 background-color:rgb(169, 129, 221);
}
li:hover{
 background-color:#ff95ea;
 color:white;
}
li:active{
 opacity: 0.7;
}
*{
 color: #444444;
}
#has-won {
  color: green;
}
#has-lost {
  color:red;
}
</style>