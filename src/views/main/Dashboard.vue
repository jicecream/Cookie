<template>
    <div class="dashboard">
        <div class="columns is-paddingless">
            <div class="column is-one-fifth">
                <navbar></navbar>
            </div>
            <div class="column dashboard">
                <div class="padding">
                    <DashboardCard></DashboardCard>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import DashboardCard from '../../components/Misc/DashboardCard.vue'
    import Navbar from "../../components/Misc/Navbar.vue";

    @Component({
        components: {Navbar, DashboardCard }
    })
    export default class Dashboard extends Vue {

    }
</script>

<style scoped lang="scss">
    /*html, body {*/
        /*margin: 0;*/
        /*padding: 0;*/
    /*}*/

    .dashboard {

    }

    .padding {
        padding: 1vw;
    }
</style>