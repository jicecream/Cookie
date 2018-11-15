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
                                <select>
                                    <option>Turn on the Lights</option>
                                    <option>Please turn on the Lights</option>
                                </select>
                            </span>
                        </div>

                        <div class="field">
                            <label class="label">Age: </label>
                            <div class="control has-icons-left">
                                <input class="input restrict" type="number" placeholder="Age" v-model="age">
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
                                <input class="input" type="text" placeholder="Location" v-model="email">
                                <span class="icon is-left">
                                    <i class="fa fa-map-marker"></i>
                                </span>
                                <p class="help" v-if="!checkEmail"></p>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Device: </label>
                            <div class="control has-icons-left">
                                <input class="input" type="text" placeholder="Device" v-model="email">
                                <span class="icon is-left">
                                    <i class="fa fa-envelope"></i>
                                </span>
                                <p class="help" v-if="!checkEmail"></p>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Channel: </label>
                            <div class="control has-icons-left">
                                <input class="input" type="text" placeholder="Channel" v-model="email">
                                <span class="icon is-left">
                                    <i class="fa fa-microphone"></i>
                                </span>
                                <p class="help" v-if="!checkEmail"></p>
                            </div>
                        </div>
                    </div>

                    <div class="column">

                    </div>
                </div>
            </form>
        </div>
        <div class="bottomButtons">
            <button class="button is-danger">
                <span>Record</span>
                <span class="icon is-small">
                    <i class="icon is-right fa fa-microphone"/>
                </span>
            </button>
            <button class="button is-warning">
                <span>Playback</span>
                <span class="icon is-small">
                    <i class="icon is-right fa fa-play"/>
                </span>
            </button>
            <button class="button is-success">
                <span>Submit</span>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class TrainingCard extends Vue {

    }
</script>

<style lang="scss" scoped>

    .trainingCard {
        overflow-y: auto;
        overflow-x: hidden;
        height: 100vh;
        padding: 2vh;
    }

    .bottomButtons {

    }
</style>