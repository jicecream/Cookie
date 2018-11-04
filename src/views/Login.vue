<template>
    <div id="login">
        <div class="columns page">
            <ParticlesBG class="column is-half"></ParticlesBG>
            <div class="kms">
                <LoginCard class="column"></LoginCard>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import LoginCard from "../components/Auth/LoginCard.vue"
    import ParticlesBG from "../components/Misc/ParticlesBG.vue"

    @Component({
        components: {LoginCard, ParticlesBG}
    })

    export default class Login extends Vue {

    }

</script>

<style scoped lang="scss">
    .kms {
        align-self: center;
        max-width: 50%;
        margin: 0 auto;
    }
</style>