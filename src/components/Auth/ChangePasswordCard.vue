<template>
    <div class="changePassword">
        <form>
            <h1 class="title is-4">Change Password</h1>
            <br><br>
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
                <button @click="changepassword" class="button">Request</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import router from "../../router";

    @Component
    export default class ChangePasswordCard extends Vue {
        newPassword: string = ``
        confirmPassword: string = ``

        changepassword() {
            router.push('/')
        }
    }
</script>

<style lang="scss" scoped>
    .changePassword {
        margin-left: 15%;
    }
</style>