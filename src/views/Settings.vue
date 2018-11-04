<template>
    <div class="settings">
        <Navbar></Navbar>
        <ChangePasswordCard></ChangePasswordCard>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Navbar from "../components/Misc/Navbar.vue";
    import ChangePasswordCard from "../components/Auth/ChangePasswordCard.vue"

    @Component({
        components: {Navbar, ChangePasswordCard}
    })
    export default class Settings extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>