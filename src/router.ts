import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'
import ResetPassword from './views/auth/ResetPassword.vue'
import ResetPasswordSuccess from './views/auth/ResetPasswordSuccess.vue'
import RegisterSuccess from './views/auth/RegisterSuccess.vue'
import Dashboard from './views/main/Dashboard.vue'
import ManageDevices from './views/main/ManageDevices.vue'
import Training from './views/main/Training.vue'
import Settings from './views/main/Settings.vue'

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
            path: '/registersuccess',
            name: 'RegisterSuccess',
            component: RegisterSuccess
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
