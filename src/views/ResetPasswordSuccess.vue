<template>
    <div class="resetPasswordSuccess">
        <div class="columns page">
            <ParticlesBG class="column is-half"></ParticlesBG>
            <div class="kms">
                <h1 class="title is-2 mid">Reset Password Success!</h1>
                <h3 class="subtitle mid">Password was successfully reset! Please login again.</h3>
                <br><br><br><br><br><br><br><br><br>
                <div class="mid">
                    <button @click="back" class="button is-primary is-fullwidth">Return to Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import router from "../router";
    import ParticlesBG from "../components/Misc/ParticlesBG.vue"

    @Component({
        components: {ParticlesBG}
    })
    export default class ResetPasswordSuccess extends Vue {
        back(){
            router.push('/')
        }

    }
</script>

<style lang="scss" scoped>
    .mid {
        text-align: center;
    }
    .kms {
        align-self: center;
        max-width: 50%;
        margin: 0 auto;
    }
</style>