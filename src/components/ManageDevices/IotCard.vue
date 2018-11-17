<template>
    <tr class="iotCard cursorPtr">
        <td>{{iot.name}}</td>
        <td>{{iot.category}}</td>
        <td>{{iot.location}}</td>
        <td>{{iot.description}}</td>
        <td>{{dummyStatusStr}}</td>
        <td><p>{{iot.iotIP}}</p></td>
        <td>{{iot.serialNo}}</td>
        <td>{{humanDate}}</td>
        <td @click="showEditModal"><i class="fas fa-edit"></i></td>
        <td @click="showDeleteModal"><i class="fas fa-trash-alt"></i></td>
        <delete-device :id="iot.iotId"
                       :is-showing="deleteModalShowing"
                       v-if="deleteModalShowing"
                       @close-delete-modal="onCloseDeleteModal"
        ></delete-device>
        <edit-device-modal :iot="iot"
                           :is-showing="editModalShowing"
                           @close-edit-device="onCloseEditModal"
                           v-if="editModalShowing"></edit-device-modal>
    </tr>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import {Iot} from "../../models/Iot";
    import DeleteDevice from "./DeleteDevice.vue";
    import {DevicesEvents} from "./Events";
    import EditDeviceModal from "./EditDeviceModal.vue";

    @Component({
        components: {EditDeviceModal, DeleteDevice}
    })
    export default class IotCard extends Vue {

        @Prop()
        iot: Iot

        editModalShowing: boolean = false
        dummyStatus: boolean = false
        deleteModalShowing: boolean = false

        
        showEditModal() {
            this.editModalShowing = !this.editModalShowing
        }

        onCloseDeleteModal(deleteModalShowing: boolean) {
            this.deleteModalShowing = deleteModalShowing
        }

        onCloseEditModal(editModalShowing: boolean) {
            this.editModalShowing = editModalShowing
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
