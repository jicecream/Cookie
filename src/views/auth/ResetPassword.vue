<template>
    <div class="resetPassword">
        <div class="columns page">
            <ParticlesBG class="column is-half is-paddingless"></ParticlesBG>
            <div class="kms">
                <ResetPasswordCard class="column"></ResetPasswordCard>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import ResetPasswordCard from "../../components/Auth/ResetPasswordCard.vue"
    import ParticlesBG from "../../components/Misc/ParticlesBG.vue"

    @Component({
        components: {ResetPasswordCard, ParticlesBG}
    })
    export default class ResetPassword extends Vue {

    }
</script>

<style lang="scss" scoped>
    .kms {
        align-self: center;
        max-width: 50%;
        margin: 0 auto;
    }
</style>