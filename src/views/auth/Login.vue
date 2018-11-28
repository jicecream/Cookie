<template>
    <div id="login">
        <div class="columns page">
            <div class="column is-half is-paddingless">
                <ParticlesBG></ParticlesBG>


            </div>

            <div class="kms">
                <div class="column">
                    <LoginCard></LoginCard>
                    <particlesJS></particlesJS>



                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import LoginCard from "../../components/Auth/LoginCard.vue"
    import ParticlesBG from "../../components/Misc/ParticlesBG.vue"
    import ParticlesJS from "../../components/Misc/ParticlesJS.vue"
    @Component({
        components: {LoginCard, ParticlesBG, ParticlesJS}
    })

    export default class Login extends Vue {

    }

</script>

<style scoped lang="scss">
    html, body {
        margin: 0;
        padding: 0;
    }

    .kms {
        align-self: center;
        max-width: 50%;
        margin: 0 auto;
    }
</style>