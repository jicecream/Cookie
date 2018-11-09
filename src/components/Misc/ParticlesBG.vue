<template>
    <div id="particles">
        <img src="../../assets/bg.jpg" alt="bg"/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class ParticlesBG extends Vue {

    }
</script>

<style lang="scss" scoped>
    img {
        min-height: 100vh;
    }
</style>