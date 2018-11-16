<template>
    <div class="manageDevicesModal">
        <div class="modal is-active">
            <div class="modal-background" @click="closeModal"></div>
            <div class="modal-content">
                <div class="has-background-white padding">
                    <p class="title is-3">Add Device</p>
                    <p class="subtitle is-3">Please complete to add new IOT device</p>
                    <div class="form">
                        <form>
                            <div class="field">
                                <label class="label">Device Name: </label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" placeholder="Device Name" v-model="name">
                                    <span class="icon is-left">
                                        <i class="fa fa-mobile-phone"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Command: </label>
                                <span class="select">
                                    <select v-model="command">
                                        <option value="Lights">Lights</option>
                                        <option value="Door">Door</option>
                                    </select>
                                </span>
                            </div>
                            <div class="field">
                                <label class="label">Location: </label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" placeholder="Location" v-model="location">
                                    <span class="icon is-left">
                                        <i class="fa fa-map-marker"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Description: </label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" placeholder="Description" v-model="description">
                                    <span class="icon is-left">
                                        <i class="fa fa-sticky-note"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">IOT IP: </label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" placeholder="IP" v-model="iotIP">
                                    <span class="icon is-left">
                                        <i class="fa fa-bullseye"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Serial Number: </label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" placeholder="Serial Number" v-model="serialNo">
                                    <span class="icon is-left">
                                        <i class="fa fa-barcode"></i>
                                    </span>
                                </div>
                            </div>
                            <br><br>
                            <div class="buttons">
                                <button @click="closeModal" class="button">Cancel</button>
                                <button class="button is-primary" @click="addDevice">Sign Up</button>
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
    import {IotCategory} from '../../models/Iot';

    @Component({})
    export default class AddDeviceModal extends Vue {

        command: string = 'Lights'
        name: string = ''
        location: string = ''
        description: string = ''
        iotIP: string = ''
        serialNo: string = ''
        category: IotCategory

        closeModal() {
            this.$emit(DevicesEvents.CLOSE_ADD_DEVICE, false)
        }

        addDevice() {
            if(this.iotForm.isValid) {
                IotService.createIot(this.iotForm)
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
            return new IotForm(this.name,
                this.category,
                this.location,
                this.description,
                this.iotIP,
                this.serialNo)
        }

    }
</script>

<style lang="scss" scoped>

    .padding {
        padding: 2em;
    }
</style>