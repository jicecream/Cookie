<template>
    <div class="dashboardCard">
        <div class="title is-3">Overview</div>
        <div class="columns">
            <div class="column temperature">
                <div class="content">
                    <div class="title is-6">
                        Temperature
                    </div>
                    <div class="data">
                        26°C
                    </div>
                    <div class="help red">
                        <i class="fa fa-arrow-down"></i>
                        1°C
                    </div>
                </div>
            </div>

            <div class="column humidity">
                <div class="content">
                    <div class="title is-6">
                        Humidity
                    </div>

                    <div class="data">
                        38%
                    </div>
                    <div class="help red">
                        <i class="fa fa-arrow-down"></i>
                        20%
                    </div>
                </div>
            </div>

            <div class="column lightstatus">
                <div class="content">
                    <div class="title is-6">
                        Light 1 Status
                    </div>
                    <div class="data">
                        OFF
                    </div>
                    <div>
                        <i class="fa fa-lightbulb"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column tempgraph">
                <div class="contentr2">
                    <div class="title-is6">
                        Temperature Trends
                    </div>

                <div class="chart">
                    chart goes here
                    <canvas id="myChart"></canvas>
                    </div>

            </div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="column lightchart">
                    kokok
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class DashboardCard extends Vue {

    }


</script>

<style lang="scss" scoped>




    .dashboardCard {
        overflow-y: auto;
        overflow-x: hidden;
        height: 94vh;
    }

    .red {
        color: red;
    }

    .data {
        font-size: 2vw;
    }

    .content {
        background-color: white;
        border-radius: 1vw;
        padding: 5%;
        text-align: left;
    }

    .floating {
        float: right;
    }
</style>