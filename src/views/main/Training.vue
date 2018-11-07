<template>
    <div class="training">
        <Navbar></Navbar>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Navbar from "../../components/Misc/Navbar.vue";

    @Component({
        components: {Navbar}
    })
    export default class Training extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>