<template>
    <div class="manageDevicesModal">
        <title class="title is-3">Add Device</title>
        <h3 class="subtitle is-3">Please complete to add new IOT device</h3>
        <div class="form">
            <Form>
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
                        <select>
                            <option>Lights</option>
                            <option>Door</option>
                        </select>
                    </span>
                </div>
                <div class="field">
                    <label class="label">Location: </label>
                    <div class="control has-icons-left">
                        <input class="input" type="text" placeholder="Name" v-model="name">
                        <span class="icon is-left">
                        <i class="fa fa-user"></i>
                    </span>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Description: </label>
                    <div class="control has-icons-left">
                        <input class="input" type="text" placeholder="Name" v-model="name">
                        <span class="icon is-left">
                            <i class="fa fa-user"></i>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <label class="label">IOT IP Device: </label>
                    <div class="control has-icons-left">
                        <input class="input" type="text" placeholder="Name" v-model="name">
                        <span class="icon is-left">
                        <i class="fa fa-user"></i>
                    </span>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Serial Number: </label>
                    <div class="control has-icons-left">
                        <input class="input" type="text" placeholder="Name" v-model="name">
                        <span class="icon is-left">
                            <i class="fa fa-user"></i>
                        </span>
                    </div>
                </div>
                <br><br>
                <div class="mid">
                    <button @click="back" class="button">Cancel</button>
                    <button class="button is-primary" @click="register">Sign Up</button>
                </div>
            </Form>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class AddDeviceModal extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>