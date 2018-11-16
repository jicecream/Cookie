<template>
    <div class="deleteDevice">
        <div class="columns" v-if="isShowing">
            <div class="column">
                <p>Are you sure you want to delete this device?</p>
                <button class="button" @click="closeModal">No</button>
                <button class="button has-background-danger has-text-white" @click="deleteDevice">Yes</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import HelloWorld from '@/components/HelloWorld.vue'
    import {IotService} from "../../api/IotService";
    import {bus} from "../../main";
    import {DevicesEvents} from "./Events"; // @ is an alias to /src

    @Component({
        components: {},
    })
    export default class DeleteDevice extends Vue {

        @Prop()
        id: number

        @Prop()
        isShowing: boolean


        deleteDevice() {
            IotService.deleteIot(this.id)
                .then(res => this.processSuccess())
                .catch(e => this.toggleShowing())
        }

        toggleShowing() {
            this.$emit(DevicesEvents.TOGGLE_DELETE, !this.isShowing)
        }

        processSuccess() {
            bus.$emit(DevicesEvents.DELETED, this.id)
            this.toggleShowing()
        }

    }
</script>

<style scoped lang="scss">

</style>