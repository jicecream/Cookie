<template>
    <div class="dashboard">
        <div class="columns">
            <div class="column is-one-fifth">
                <Navbar></Navbar>
            </div>
            <div class="column">
                <DashboardCard></DashboardCard>
            </div>

        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import Navbar from '../../components/Misc/Navbar.vue'
    import DashboardCard from '../../components/Misc/DashboardCard.vue'

    @Component({
        components: {Navbar, DashboardCard}
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