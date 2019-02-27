import Vue from 'vue'
import Router from 'vue-router'
import ContactList from './components/ContactList.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            name: 'contactlist',
            component: ContactList
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }  
    ]
})