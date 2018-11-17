<template>
    <div class="deleteDevice">
        <div class="modal is-active">
            <div class="modal-background" @click="closeModal"></div>
            <div class="modal-content has-background-white is-black padding animated slideInUp">
                <div class="columns">
                    <div class="column">
                        <p class="title is-2"><i class="fa fa-warning"></i> Delete Device <i class="fa fa-warning"></i>
                        </p>
                        <p class="bigbigfont">Deleting this device will delete it <b>forever</b>! Are you sure you want
                            to delete this device?</p>
                        <br><br>
                        <button class="button closeButton" @click="closeModal">No</button>
                        <button class="button deleteButton has-background-danger has-text-white" @click="deleteDevice">
                            Yes
                        </button>
                    </div>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
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
                .catch(e => this.closeModal())
        }

        closeModal() {
            this.$emit(DevicesEvents.CLOSE_DELETE_MODAL, !this.isShowing)
        }

        processSuccess() {
            bus.$emit(DevicesEvents.DELETED, this.id)
            this.closeModal()
        }

    }
</script>

<style scoped lang="scss">

    .padding {
        padding: 2em;
    }

    .bigbigfont {
        font-size: 1.1em;
    }
</style>