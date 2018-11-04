<template>
    <div id="navbar">
        <div class="menu">
            <div class="menu-label title is-4">KONTOROL</div>
            <ul class="menu-list">
                <li>
                    <span class="icon is-left">
                        <i class="fa fa-key"></i>
                    </span>
                    <router-link to="/dashboard">Overview</router-link>
                </li>
                <li>
                    <router-link to="/ManageDevices">Manage Devices</router-link>
                </li>
                <li>
                    <router-link to="/training">Training</router-link>
                </li>
                <li>
                    <router-link to="/">Logout</router-link>
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
    }
</style>