<template>
    <div class="training">
        <div class="columns">
            <div class="column is-one-fifth">
                <Navbar></Navbar>
            </div>
            <div class="column">
                <TrainingCard></TrainingCard>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Navbar from '../.././components/Misc/Navbar.vue'
    import TrainingCard from '../.././components/Misc/TrainingCard.vue'

    @Component({
        components: {Navbar, TrainingCard}
    })
    export default class Training extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>