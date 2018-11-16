<template>
    <div class="deleteDevice">
        <div class="columns" v-if="isShowing">
            <div class="column">
                <p>Are you sure you want to delete this device?</p>
                <button class="button" @click="toggleShowing">No</button>
                <button class="button" @click="deleteDevice">Yes</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import HelloWorld from '@/components/HelloWorld.vue'
    import {IotService} from "../../api/IotService";
    import {bus} from "../../main";
    import {DevicesEvents} from "./Events"; // @ is an alias to /src

    @Component({
        components: {},
        props: {
            id: Number,
            isShowing: Boolean
        }
    })
    export default class DeleteDevice extends Vue {

        deleteDevice() {
            IotService.deleteIot(this.id)
                .then(res => this.processSucess())
                .catch(e => this.toggleShowing())
        }

        toggleShowing() {
            this.isShowing = !this.isShowing
        }

        processSucess() {
            bus.$emit(DevicesEvents.DELETED, this.id)
            // this.toggleShowing()
            this.isShowing = false
        }

    }
</script>

<style scoped lang="scss">

</style>