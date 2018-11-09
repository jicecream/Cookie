<template>
    <div id="loginCard">
        <form>
            <h1 class="title is-2 mid">KONTOROL</h1>
            <h3 class="subtitle mid">Welcome back! Please login to your account</h3>
            <br><br>
            <div class="field">
                <label class="label">Username: </label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Username" v-model="username">
                    <span class="icon is-left">
                    <i class="fa fa-user"></i>
                </span>
                </div>
            </div>
            <div class="field">
                <label class="label">Password: </label>
                <div class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password" v-model="password">
                    <span class="icon is-left">
                        <i class="fa fa-key"></i>
                    </span>
                </div>
            </div>
            <div class="right">
                <router-link to="/resetpassword">Forgot Password</router-link>
            </div>
            <br>
            <div class="mid">
                <button @click="login" :disabled="!isValid" class="button is-primary">Login</button>
                <button @click="register" class="button">Sign Up</button>
                <br>
                <router-link to="/dashboard">skip</router-link>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {AuthService} from "../../api/AuthService"
    import {LoginForm} from "../../models/Forms/LoginForm"
    import router from "../../router"
    import {processLogin} from "../../utils/auth/AuthProcessor"

    @Component
    export default class LoginCard extends Vue {
        username: string = ``
        password: string = ``

        login() {
            const loginForm = this.genLoginForm

            AuthService
                .login(loginForm)
                .then(res => {
                    processLogin(res.data)
                    router.push(`dashboard`)
                })
                .catch(e => console.log(e))
        }

        register() {
            router.push('register')
        }

        get isValid(): boolean {
            return this.genLoginForm.isValid()
        }

        get genLoginForm(): LoginForm {
            return new LoginForm(this.username, this.password)
        }

    }
</script>

<style scoped lang="scss">
    .loginCard {
        height: 100vh;
    }

    .mid {
        text-align: center;
    }

    .right {
        text-align: right;
    }
</style>