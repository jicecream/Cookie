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
        min-width: 100%;
        min-height: 100%;
        padding: 0;
    }
</style>