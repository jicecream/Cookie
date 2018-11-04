<template>
    <div class="register page">
        <div class="columns page">
            <ParticlesBG class="column is-half"></ParticlesBG>
            <div class="kms">
                <RegisterCard class="column"></RegisterCard>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import RegisterCard from "../components/Auth/RegisterCard.vue"
    import ParticlesBG from "../components/Misc/ParticlesBG.vue"

    @Component({
        components: {RegisterCard, ParticlesBG}
    })
    export default class Register extends Vue {

    }
</script>

<style lang="scss" scoped>
    .kms {
        align-self: center;
        max-width: 50%;
        margin: 0 auto;
    }
</style>