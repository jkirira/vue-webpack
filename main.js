import Vue from 'vue'
import VueRouter  from "vue-router";
import router  from './router'
import App from  './app'
// require('./assets/scss/index.scss')

require('./components')

Vue.use(VueRouter)

new Vue({
    el: '#app',

    router,

    render: h => h(App)

})