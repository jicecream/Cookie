<template>
    <div class="manageDevices page">
        <div class="columns is-paddingless">
            <div class="column is-one-fifth">
                <navbar></navbar>
            </div>
            <div class="column padding">
                <ManageDevicesCard></ManageDevicesCard>
            </div>
        </div>
    </div>


</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'

    import ManageDevicesCard from "../../components/Misc/ManageDevicesCard.vue"
    import Navbar from "../../components/Misc/Navbar.vue";

    @Component({
        components: {Navbar, ManageDevicesCard}
    })
    export default class ManageDevices extends Vue {

    }
</script>

<style lang="scss" scoped>
    .padding {
        padding: 1vw;
    }
</style>