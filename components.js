import Vue from 'vue'

Vue.component( "index-component", require('./components/index.vue').default)
// Vue.component( "home-component", require('./components/index.vue').default)
Vue.component( "tasks-component", require('./components/TaskComponent.vue').default)
Vue.component( "reminders-component", require('./components/ReminderComponent.vue').default)


