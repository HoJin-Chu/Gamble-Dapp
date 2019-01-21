import Vue from 'vue'
import Router from 'vue-router'
import GamblingDapp from '@/components/GamblingDapp'

Vue.use(Router)

export const router = new Router({
    mode : 'history',
    routes : [
        {
            path:'/',
            name:'GamblingDapp',
            component : GamblingDapp
        }
    ]
})