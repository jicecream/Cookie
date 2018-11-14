<template>
    <div class="manageDevicesCard">
        <!--This contains table with name, category, location, description, toggable button, trash icon-->
        <div class="title is-3">Manage Devices</div>
        <iot-card v-for="iot in iots" :iot="iot"></iot-card>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {IotService} from "../../api/IotService";
    import {Iot} from '../../models/Iot';
    import IotCard from "./IotCard.vue";
    @Component({
        components: {IotCard}
    })
    export default class ManageDevicesCard extends Vue {

        iots: Array<Iot> = []

        created() {
            IotService.getIots()
                .then(res => this.iots = res.data.data.map((each: object) => Iot.fromJSON(each)))
                .catch(e => console.log(e))
        }
    }
</script>

<style lang="scss" scoped>
    .manageDevicesCard {
        overflow-y: auto;
        overflow-x: hidden;
        height: 100vh;
        padding: 2vh;
    }

</style>