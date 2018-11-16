<template>
    <div class="manageDevicesModal">
        <div class="modal is-active">
            <div class="modal-background" @click="closeModal"></div>
            <div class="modal-content">
                <div class="has-background-white moarpadding">
                    <p class="title is-3">Add Device</p>
                    <p class="subtitle is-3">Please complete to add new IOT device</p>
                    <div class="form">
                        <form>
                            <div class="field">
                                <label class="label">Device Name: </label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" placeholder="Name" v-model="name">
                                    <span class="icon is-left">
                                        <i class="fa fa-user"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Command: </label>
                                <span class="select">
                                    <select v-model="command">
                                        <option>Lights</option>
                                        <option>Door</option>
                                    </select>
                                </span>
                            </div>
                            <div class="field">
                                <label class="label">Location: </label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" placeholder="Name" v-model="location">
                                    <span class="icon is-left">
                                        <i class="fa fa-user"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Description: </label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" placeholder="Name" v-model="description">
                                    <span class="icon is-left">
                                        <i class="fa fa-user"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">IOT IP: </label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" placeholder="Name" v-model="iotIP">
                                    <span class="icon is-left">
                                        <i class="fa fa-user"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Serial Number: </label>
                                <div class="control has-icons-left">
                                    <input class="input" type="text" placeholder="Name" v-model="serialNo">
                                    <span class="icon is-left">
                                        <i class="fa fa-user"></i>
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

    @Component({})
    export default class AddDeviceModal extends Vue {

        command: string = ''
        name: string = ''
        location: string = ''
        description: string = ''
        iotIP: string = ''
        serialNo: string = ''

        created() {

        }

        closeModal() {
            this.$emit(DevicesEvents.CLOSE_ADD_DEVICE, false)
        }

        addDevice() {

        }

    }
</script>

<style lang="scss" scoped>

    .moarpadding {
        padding: 2em;
    }
</style>