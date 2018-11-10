<template>
    <div id="navbar">
        <div class="menu">
            <div class="menu-label white header">KONTOROL</div>
            <ul class="menu-list">
                <li>
                    <router-link to="/dashboard" class="white">
                        <i class="icon is-left fa fa-key"></i>
                        Overview
                    </router-link>
                </li>
                <li>
                    <router-link to="/ManageDevices" class="white">
                        <i class="icon is-left fas fa-mobile"></i>
                        Manage Devices
                    </router-link>
                </li>
                <li>
                    <router-link to="/training" class="white">
                        <i class="icon is-left fas fa-chalkboard-teacher"></i>
                        Training
                    </router-link>
                </li>
                <li>
                    <router-link to="/settings" class="white">
                        <i class="icon is-left fa fa-cog"></i>
                        Settings
                    </router-link>
                </li>
                <li>
                    <router-link to="/" class="white">
                        <i class="icon is-left fas fa-sign-out-alt"></i>
                        Logout
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class Navbar extends Vue {

    }
</script>

<style scoped lang="scss">
    .menu {
        display: block;
        z-index: 1;
        position: fixed;
        overflow-x: hidden;
        height: 100%;
        background-color: #43425D;
        min-width: 20vw;
    }

    .header {
        font-size: 23px;
        padding: 3% 3% 3% 5%;

    }

    .white {
        color: white;
    }

    .menu {
        color: white;
    }
</style>