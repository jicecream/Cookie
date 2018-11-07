<template>
    <div class="registerSuccess">
        <div class="columns page">
            <ParticlesBG class="column is-half is-paddingless"></ParticlesBG>
            <div class="kms">
                <h1 class="title is-2 mid">Registration Success!</h1>
                <h3 class="subtitle mid">Welcome! Please login to your new account.</h3>
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
    import ParticlesBG from "../../components/Misc/ParticlesBG.vue";
    import router from "../../router";

    @Component({
        components: {ParticlesBG}
    })
    export default class RegisterSuccess extends Vue {
        back() {
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