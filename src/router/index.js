import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import SGPage from '@/components/SGPage'

import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Search',
            component: Search
        },
        {
            path: '/gif',
            name: 'singleGif',
            component: SGPage,
            props: true
        }
    ]
})
