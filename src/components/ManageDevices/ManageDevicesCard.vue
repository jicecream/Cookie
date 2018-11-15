<template>
    <div class="manageDevicesCard padding">
        <!--This contains table with name, category, location, description, toggable button, trash icon-->
        <div class="columns">
            <div class="column"><p class="title is-3">Manage Devices</p></div>
            <div class="column is-1"><i class="fas fa-plus-circle cursorPtr"></i></div>
        </div>
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