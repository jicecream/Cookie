<template>
    <div id="navbar">
        <router-link to="/dashboard">Overview</router-link>
        <router-link to="/ManageDevices">Manage Devices</router-link>
        <router-link to="/training">Training</router-link>
        <router-link to="/settings">Settings</router-link>
        <router-link to="/login">Logout</router-link>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class Navbar extends Vue {

    }
</script>

<style scoped lang="scss">

</style>