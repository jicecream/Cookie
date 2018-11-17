<template>
    <div class="trainingCard">
        <div class="title is-3">Training</div>

        <!--training should include gender,age,command dropdown,location,device,channel-->
        <div class="trainingForm">
            <form class="trainingFormClass">
                <div class="columns">
                    <div class="column">
                        <div class="field">
                            <label class="label">Command: </label>
                            <span class="select">
                                <select v-model="command">
                                    <option value="turnOn">Turn on the Lights</option>
                                    <option value="pleaseTurnOn">Please turn on the Lights</option>
                                </select>
                            </span>
                        </div>

                        <div class="field">
                            <label class="label">Age: </label>
                            <div class="control has-icons-left">
                                <input class="input restrict" type="number" placeholder="Age" v-model="age" min="0">
                                <span class="icon is-left">
                                    <i class="fa fa-birthday-cake"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Gender: </label>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="gender" value="0" v-model="gender"> Male
                                </label>
                                <label class="radio">
                                    <input type="radio" name="gender" value="1" v-model="gender"> Female
                                </label>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Location: </label>
                            <div class="control has-icons-left">
                                <input class="input" type="text" placeholder="Location" v-model="location">
                                <span class="icon is-left">
                                    <i class="fa fa-map-marker"></i>
                                </span>
                                <p class="help" v-if="!checkEmail"></p>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Device: </label>
                            <div class="control has-icons-left">
                                <input class="input" type="text" placeholder="Device" v-model="device">
                                <span class="icon is-left">
                                    <i class="fa fa-mobile"></i>
                                </span>
                                <p class="help" v-if="!checkEmail"></p>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label tooltip is-tooltip-right" data-tooltip="Tekokokokxt">Channel: </label>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="gender" value="0" v-model="channel"> Left
                                </label>
                                <label class="radio">
                                    <input type="radio" name="gender" value="1" v-model="channel"> Middle
                                </label>
                                <label class="radio">
                                    <input type="radio" name="gender" value="2" v-model="channel"> Right
                                </label>
                            </div>
                        </div>
                        <br>
                        <div class="columns">
                            <div class="column">
                                <div class="buttons">
                                    <button class="button">
                                        <span>Record</span>
                                        <span class="icon is-small red">
                                    <i class="icon is-right fa fa-microphone"/>
                                </span>
                                    </button>
                                    <button class="button">
                                        <span>Playback</span>
                                        <span class="icon is-small orange">
                                    <i class="icon is-right fa fa-play"/>
                                </span>
                                    </button>
                                    <button class="button is-primary">
                                        <span>Submit</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <!--mad hacks column, repurposed to a view training history list-->
                        <div class="historyColumn padding">
                            <p class="title is-5">Training History</p>
                            <table class="table is-hoverable is-striped is-fullwidth is-scrollable">
                                <tr>
                                    <th>Voice File Name</th>
                                    <th>Playback</th>
                                </tr>
                                <!--where each voice file is generated for each file belonging to user-->
                                <tbody>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>
                                <tr>
                                    <td>file 1</td>
                                    <td>playback button</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class TrainingCard extends Vue {
        command: string = 'turnOn'

    }
</script>

<style lang="scss" scoped>

    .trainingCard {
        overflow-y: auto;
        overflow-x: hidden;
        height: 100vh;
        padding: 2vh;
    }

    .red {
        color: red;
    }

    .orange {
        color: orange;
    }

    .historyColumn {
        height: 100%;
    }

    .padding {
        padding: 0.5em;
    }

    /*overflow-y: scroll;*/
    /*width: auto;*/
    /*position: absolute;*/
    .is-scrollable {
        overflow-y: scroll;
        width: 100%
    }

</style>