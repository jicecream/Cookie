<template>
    <div class="manageDevicesModal">
        <div class="modal is-active">
            <div class="modal-background" @click="closeModal"></div>
            <div class="modal-content animated slideInUp">
                <div class="has-background-white padding">
                    <h1 class="title is-2 mid">Edit device</h1>
                    <h3 class="subtitle mid">Please complete to add you IOT device</h3>
                    <div class="form">
                        <form>
                            <div class="field">
                                <label class="label">Device Name: </label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" placeholder="Device Name" v-model="iot.name">
                                    <span class="icon is-left">
                                        <i class="fa fa-mobile-phone"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Category: </label>
                                <span class="select is-fullwidth">
                                    <select v-model="iot.category">
                                        <option value="Lights">Lights</option>
                                        <option value="Door">Door</option>
                                    </select>
                                </span>
                            </div>
                            <div class="field">
                                <label class="label">Location: </label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" placeholder="Location" v-model="iot.location">
                                    <span class="icon is-left">
                                        <i class="fa fa-map-marker"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Description: </label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" placeholder="Description" v-model="iot.description">
                                    <span class="icon is-left">
                                        <i class="fa fa-sticky-note"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">IOT IP: </label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" placeholder="IP" v-model="iot.iotIP">
                                    <span class="icon is-left">
                                        <i class="fa fa-bullseye"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Serial Number: </label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" placeholder="Serial Number" v-model="iot.serialNo">
                                    <span class="icon is-left">
                                        <i class="fa fa-barcode"></i>
                                    </span>
                                </div>
                            </div>
                            <br><br>
                            <div class="buttons">
                                <button @click="closeModal" class="button">Cancel</button>
                                <button class="button is-primary" @click="editDevice">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <button class="modal-close is-large" @click="closeModal"></button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import {DevicesEvents} from "./Events";
    import {IotService} from "../../api/IotService";
    import {IotForm} from "../../models/Forms/IotForm";
    import {Iot} from "../../models/Iot";

    @Component({})
    export default class EditDeviceModal extends Vue {

        @Prop()
        iot: Iot

        closeModal() {
            this.$emit(DevicesEvents.CLOSE_EDIT_DEVICE, false)
        }

        editDevice() {
            if(this.iotForm.isValid) {
                IotService.updateIot(this.iotForm, this.iot.iotId)
                    .then(res => this.closeModal())
                    .catch(e => {
                        console.log(e)
                        this.closeModal()
                    })
            } else {
                // TODO
            }
        }

        get iotForm() {
            return new IotForm(this.iot.name,
                this.iot.category.valueOf().toString(),
                this.iot.location,
                this.iot.description,
                this.iot.iotIP,
                this.iot.serialNo)
        }

    }
</script>

<style lang="scss" scoped>
    .mid {
        text-align: center;
    }

    .padding {
        padding: 2em;
    }
</style>