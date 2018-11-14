<template>
    <div class="iotCard materialCard cursorPtr">
        <div class="columns" @click="toggleDetails">
            <div class="column">{{iot.name}}</div>
            <div class="column">{{iot.category}}</div>
            <div class="column">{{iot.location}}</div>
            <div class="column">{{iot.description}}</div>
            <div class="column">{{iot.status}}</div>
        </div>
        <div class="columns" v-if="additionalInfoShown">
            <div class="column"><p>IP: {{iot.iotIP}}</p></div>
            <div class="column">Serial Number: {{iot.serialNo}}</div>
            <div class="column">Created At: {{iot.createdAt}}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {Iot} from "../../models/Iot";

    @Component({
        props: {
            iot: Iot
        }
    })
    export default class IotCard extends Vue {

        additionalInfoShown: boolean = false

        toggleDetails() {
            this.additionalInfoShown = !this.additionalInfoShown
        }
    }
</script>

<style scoped lang="scss">

</style>