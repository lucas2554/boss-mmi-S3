import Vue from 'vue'
import Router from 'vue-router'
import accueil from '@/components/accueil'
import biographie from '@/components/biographie'
import filmographie from '@/components/filmographie'
import detroit from '@/components/detroit'
import recompense from '@/components/recompense'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'accueil',
            component: accueil
        },

        {
            path: '/biographie',
            name: 'biographie',
            component: biographie
        },

        {
            path: '/filmographie',
            name: 'filmographie',
            component: filmographie
        },

        {
            path: '/detroit',
            name: 'detroit',
            component: detroit
        },

        {
            path: '/recompense',
            name: 'recompense',
            component: recompense
        }
    ]
})
