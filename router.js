import Vue from 'vue'
import VueRouter from "vue-router";
// import Home from "./components/HomeComponent"
import Home from "/views/Home"
import Tasks from "/views/Tasks"
import Reminders from "/views/Reminders";
import ReminderDetails from "/views/ReminderDetails";



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


const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})


export default router;