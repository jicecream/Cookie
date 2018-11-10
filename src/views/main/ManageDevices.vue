<template>
    <div class="manageDevices">
        <div class="columns">
            <div class="column is-one-fifth">
                <Navbar></Navbar>
            </div>
            <div class="column">
                <ManageDevicesCard></ManageDevicesCard>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Navbar from '../.././components/Misc/Navbar.vue'
    import ManageDevicesCard from "../../components/Misc/ManageDevicesCard";

    @Component({
        components: {ManageDevicesCard, Navbar}
    })
    export default class ManageDevices extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>