<template>
    <div id="registerCard">
        <form>
            <h1 class="title is-2 mid">Register</h1>
            <h3 class="subtitle mid">Please complete to create your account</h3>
            <div class="field">
                <label class="label">Name: </label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Name" v-model="name">
                    <span class="icon is-left">
                        <i class="fa fa-user"></i>
                    </span>
                </div>
            </div>
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
                <label class="label">Email: </label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Email" v-model="email">
                    <span class="icon is-left">
                        <i class="fa fa-envelope"></i>
                    </span>
                    <p class="help" v-if="!checkEmail">Please enter a valid email</p>
                </div>
            </div>
            <div class="field">
                <label class="label">Password: </label>
                <div class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password" v-model="userPassword">
                    <span class="icon is-left">
                        <i class="fa fa-key"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">Confirm Password: </label>
                <div class="control has-icons-left">
                    <input class="input" type="password" placeholder="Confirm Password" v-model="confirmPassword">
                    <span class="icon is-left">
                        <i class="fa fa-key"></i>
                    </span>
                    <p class="help" v-if="!checkPassword">Password does not match</p> <!--//this wants false to render okokokokokokokokokokokokok
                    okokokokkokokokokokokokokokokokokokokok
                    its 6am what-->
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field">
                    <label class="label">Age: </label>
                    <div class="control has-icons-left">
                        <input class="input restrict" type="number" placeholder="Age" v-model="age">
                        <span class="icon is-left">
                        <i class="fa fa-birthday-cake"></i>
                    </span>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Gender: </label>
                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="gender" value="0" v-model="gender"> Male
                        </label>
                        <label class="radio">
                            <input type="radio" name="gender" value="1" v-model="gender"> Female
                        </label>
                    </div>
                </div>
            </div>
            <br>
            <div class="mid">
                <button @click="back" class="button">Cancel</button>
                <button class="button is-primary" @click="register">Sign Up</button>
            </div>
            <br>
            <div class="mid">
                <router-link to="/">Already have an account? Log in!</router-link>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import router from "../../router";
    import {AuthService} from "../../api/AuthService";
    import {RegisterForm} from '../../models/Forms/RegisterForm';
    import {Gender} from "../../models/User";
    import {processRegister} from "../../utils/auth/AuthProcessor";

    @Component
    export default class RegisterCard extends Vue {
        email: string = ``
        name: string = ``
        username: string = ``
        userPassword: string = ``
        confirmPassword: string = ``
        age: string = `0`
        gender: string = `0`

        back() {
            router.push('/')
        }

        register() {
            AuthService.register(this.genRegisterForm)
                .then(res => {
                    processRegister(res.data)
                    router.push('/registersuccess')
                })
                .catch(e => console.log(e))
        }

        get genRegisterForm() {
            return new RegisterForm(this.username,
                this.userPassword,
                this.confirmPassword,
                this.name,
                this.email,
                parseInt(this.gender),
                parseInt(this.age))
        }

        get checkEmail() {
            return RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(this.email)
                || this.email.length == 0
        }

        get checkPassword() {
            return ((this.userPassword == this.confirmPassword) || (this.confirmPassword == "" && this.userPassword.length >= 0))
                && (this.userPassword.length >= 0 && this.confirmPassword.length >= 0)
        }
    }
</script>

<style lang="scss" scoped>
    .mid {
        text-align: center;
    }

    .restrict {
        max-width: 90%;
    }
</style>