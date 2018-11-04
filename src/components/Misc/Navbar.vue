<template>
    <div id="navbar">
        <div class="menu">
            <div class="menu-label title is-4 white">KONTOROL</div>
            <ul class="menu-list">
                <li>
                    <div class="icon is-left">
                        <i class="fa fa-key"></i>
                    </div>
                    <router-link to="/dashboard" class="white">Overview</router-link>
                </li>
                <li>
                    <router-link to="/ManageDevices" class="white">Manage Devices</router-link>
                </li>
                <li>
                    <router-link to="/training" class="white">Training</router-link>
                </li>
                <li>
                    <router-link to="/" class="white">Logout</router-link>
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
        width: 15%;
        background-color: #43425D;
    }

    .white {
        color: white;
    }

    .menu {
        color: white;
    }
</style>