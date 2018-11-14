<template>
    <div class="changePassword">
        <div class="padding">
            <div class="title is-3">Training</div>
            <form class="changePasswordForm">
                <div class="formPadding">
                    <h1 class="header">Change Password</h1>
                    <br>
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
                            <input class="input" type="password" placeholder="Confirm Password"
                                   v-model="confirmPassword">
                            <span class="icon is-left">
                    <i class="fa fa-key"></i>
                </span>
                        </div>
                    </div>
                    <br>
                    <div class="mid">
                        <button @click="changepassword" class="button is-primary">Request</button>
                    </div>
                </div>
            </form>
        </div>
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
        height: 100vh;
    }

    .padding {
        padding: 3%;
    }

    .formPadding {
        padding: 3%;
    }

    .header {
        padding: 2%;
        font-size: 25px;
    }

    .changePasswordForm {
        background-color: white;
        max-width: 40%;
        max-height: 10%;
    }
</style>