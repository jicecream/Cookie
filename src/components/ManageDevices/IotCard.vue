<template>
    <div class="iotCard materialCard cursorPtr">
        <div class="columns">
            <div class="column" @click="toggleDetails">{{iot.name}}</div>
            <div class="column" @click="toggleDetails">{{iot.category}}</div>
            <div class="column" @click="toggleDetails">{{iot.location}}</div>
            <div class="column" @click="toggleDetails">{{iot.description}}</div>
            <div class="column" @click="toggleDetails">{{dummyStatusStr}}</div>
            <div class="column has-text-centered" @click="showDeleteModal"><i class="fas fa-trash-alt"></i></div>
        </div>
        <div class="columns iotDetails" v-if="additionalInfoShown">
            <div class="column"><p>IP: {{iot.iotIP}}</p></div>
            <div class="column">Serial Number: {{iot.serialNo}}</div>
            <div class="column">Created At: {{iot.createdAt}}</div>
            <div class="column"></div> <!-- madhacks dont remove -->
            <div class="column"></div> <!-- madhacks dont remove -->
        </div>
        <delete-device :id="iot.iotId" :is-showing="deleteModalShowing"></delete-device>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {Iot} from "../../models/Iot";
    import DeleteDevice from "./DeleteDevice.vue";

    @Component({
        components: {DeleteDevice},
        props: {
            iot: Iot
        }
    })
    export default class IotCard extends Vue {

        additionalInfoShown: boolean = false
        dummyStatus: boolean = false
        deleteModalShowing: boolean = false

        toggleDetails() {
            this.additionalInfoShown = !this.additionalInfoShown
        }

        showDeleteModal() {
            this.deleteModalShowing = !this.deleteModalShowing
        }

        get dummyStatusStr() {
            return this.dummyStatus ? 'OFF' : 'ON'
        }
    }
</script>

<style scoped lang="scss">
    .iotCard {
        border-radius: 1vw;
    }

    .iotDetails {
        border-top: 1px solid lightgrey;
    }

    .fas {
        font-size: 1.5rem;
    }


</style>