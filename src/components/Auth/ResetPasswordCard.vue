<template>
    <div class="resetPasswordCard">
        <form>
            <h1 class="title is-2 mid">Reset Password</h1>
            <h3 class="subtitle mid">Enter your email and the associated username</h3>
            <br><br>
            <div class="field">
                <label class="label">Email: </label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Email" v-model="email">
                    <span class="icon is-left">
                    <i class="fa fa-envelope"></i>
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
                <label class="label">New Password: </label>
                <div class="control has-icons-left">
                    <input class="input" type="password" placeholder="New Password" v-model="newPassword">
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
                </div>
            </div>
            <br>
            <div class="mid">
                <button @click="back" class="button is-primary">Cancel</button>
                <button @click="changepassword" class="button">Request</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import router from "../../router";

    @Component
    export default class ResetPasswordCard extends Vue {
        email: string = ``
        username: string = ``
        newPassword: string=``
        confirmPassword: string=``

        back() {
            router.push('/')
        }
        changepassword(){
            router.push('/resetpasswordsuccess')
        }
    }
</script>

<style lang="scss" scoped>
    .mid {
        text-align: center;
    }
</style>