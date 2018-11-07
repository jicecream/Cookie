<template>
    <div class="manageDevices">
        <Navbar></Navbar>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Navbar from "../../components/Misc/Navbar.vue";

    @Component({
        components: {Navbar}
    })
    export default class ManageDevices extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>