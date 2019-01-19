import Vue from 'vue'
import Router from 'vue-router'
import CasinoDapp from '@/components/CasinoDapp'

Vue.use(Router)

export default new Router({
    mode : 'history',
    routes : [
        {
            path:'/',
            name:'CasinoDapp',
            component : CasinoDapp
        }
    ]
})