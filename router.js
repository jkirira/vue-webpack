import Vue from 'vue'
import VueRouter from "vue-router";
// import Home from "./components/HomeComponent"
import Home from "/views/Home"
import Tasks from "/views/Tasks"
import Reminders from "/views/Reminders";
import ReminderDetails from "/views/ReminderDetails";


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/tasks', component: Tasks, name: 'tasks', props: true },
    {
        path: '/reminders',
        component: Reminders,
        name: 'reminders',
        children: [
            {
                path:':id',
                name: 'reminder_details',
                component: ReminderDetails,
                props:true
            }
        ],
    }
]

// 3. Create the views instance and pass the `routes` option
// You can pass in additional options here, but let's
const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})


export default router;