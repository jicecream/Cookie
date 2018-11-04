<template>
    <div class="settings">
        <Navbar></Navbar>
        <div class="changePassword" style="margin-left: 25%;">
            <h1 class="title is-4">Change Password</h1>
            <form>
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
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Navbar from "../components/Misc/Navbar.vue";

    @Component({
        components: {Navbar}
    })
    export default class Settings extends Vue {

    }
</script>

<style lang="scss" scoped>
    .changePassword {

    }
</style>