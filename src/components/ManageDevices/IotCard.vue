<template>
    <tr class="iotCard cursorPtr">
        <td @click="toggleDetails">{{iot.name}}</td>
        <td @click="toggleDetails">{{iot.category}}</td>
        <td @click="toggleDetails">{{iot.location}}</td>
        <td @click="toggleDetails">{{iot.description}}</td>
        <td @click="toggleDetails">{{dummyStatusStr}}</td>
        <td><p>{{iot.iotIP}}</p></td>
        <td>{{iot.serialNo}}</td>
        <td>{{humanDate}}</td>
        <td @click="showEditModal"><i class="fas fa-edit"></i></td>
        <td @click="showDeleteModal"><i class="fas fa-trash-alt"></i></td>
        <delete-device :id="iot.iotId" :is-showing="deleteModalShowing"></delete-device>
    </tr>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import {Iot} from "../../models/Iot";
    import DeleteDevice from "./DeleteDevice.vue";
    import {DevicesEvents} from "./Events";

    @Component({
        components: {DeleteDevice}
    })
    export default class IotCard extends Vue {

        @Prop()
        iot: Iot

        additionalInfoShown: boolean = false;
        dummyStatus: boolean = false
        deleteModalShowing: boolean = false

        created() {
            this.$on(DevicesEvents.TOGGLE_DELETE,
                (data:boolean) => this.deleteModalShowing = data)
        }

        showEditModal() {

        }

        toggleDetails() {
            this.additionalInfoShown = !this.additionalInfoShown
        }

        showDeleteModal() {
            this.deleteModalShowing = !this.deleteModalShowing
        }

        get dummyStatusStr() {
            return this.dummyStatus ? 'OFF' : 'ON'
        }

        get humanDate() {
            const date = new Date(this.iot.createdAt)
            return `${date.toLocaleDateString('en-SG')} ${date.toLocaleTimeString('en-SG')}`;
        }
    }
</script>

<style scoped lang="scss">
    .iotCard {
        /*border-radius: 1vw;*/
    }

    .iotDetails {
        border-top: 1px solid lightgrey;
    }

    .fas {
        font-size: 1.5rem;
    }


</style>
