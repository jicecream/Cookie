<template>
    <div class="dashboard">
        <Navbar></Navbar>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navbar from "../components/Misc/Navbar.vue";

    @Component({
        components: {Navbar}
    })
    export default class Dashboard extends Vue {

    }
</script>

<style scoped lang="scss">
    html, body {
        margin: 0;
        padding: 0;
    }
    .background {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        z-index: 0;
    }
</style>