<template>
    <div class="manageDevicesCard padding">
        <add-device-modal @click="addDevice"
                          @close-add-device="onAddModalShow"
                          v-if="addModalShown"></add-device-modal>
        <div class="columns">
            <div class="column"><p class="title is-3">Manage Devices</p></div>
            <div class="column is-1"><i class="fas fa-plus-circle cursorPtr" @click="addDevice"></i></div>
        </div>
        <table class="table is-striped">
            <tr>
                <th>IOT Name</th>
                <th>Category</th>
                <th>Location</th>
                <th>Description</th>
                <th>Status</th>
                <th>IP Address</th>
                <th>Serial Number</th>
                <th>Created At</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            <tbody>
            <iot-card v-for="iot in iots" :iot="iot"></iot-card>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {IotService} from "../../api/IotService";
    import {Iot} from '../../models/Iot';
    import IotCard from "./IotCard.vue";
    import {bus} from "../../main";
    import {DevicesEvents} from "./Events";
    import AddDeviceModal from "./AddDeviceModal.vue";
    @Component({
        components: {AddDeviceModal, IotCard}
    })
    export default class ManageDevicesCard extends Vue {

        iots: Array<Iot> = []
        addModalShown = false

        created() {
            this.getIots()
            bus.$on(DevicesEvents.DELETED,  (id: number) =>
                this.iots.splice(this.iots.findIndex(each => each.iotId  == id), 1))
        }

        onAddModalShow(addModalShown: boolean) {
            this.addModalShown = addModalShown
            this.getIots()
        }

        getIots() {
            IotService.getIots()
                .then(res => this.iots = res.data.data.map((each: object) => Iot.fromJSON(each)))
                .catch(e => console.log(e))
        }

        addDevice() {
            this.addModalShown = true
        }
    }
</script>

<style lang="scss" scoped>
    .padding {
        padding: 1vw;
    }

    .fas {
        font-size: 2rem;
    }

    .manageDevicesCard {
        overflow-y: auto;
        overflow-x: hidden;
        height: 100vh;
        padding: 2vh;
    }

</style>