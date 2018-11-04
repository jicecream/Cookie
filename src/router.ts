import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import ResetPassword from './views/ResetPassword.vue'
import ResetPasswordSuccess from './views/ResetPasswordSuccess.vue'
import Dashboard from './views/Dashboard.vue'
import ManageDevices from './views/ManageDevices.vue'
import Training from './views/Training.vue'
import Settings from './views/Settings.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Login
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/resetpassword',
            name: 'ResetPassword',
            component: ResetPassword
        },{
            path: '/resetpasswordsuccess',
            name: 'ResetPasswordSuccess',
            component: ResetPasswordSuccess
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/managedevices',
            name: 'ManageDevices',
            component: ManageDevices
        },
        {
            path: '/training',
            name: "Training",
            component: Training
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings
        }


    ]
})
