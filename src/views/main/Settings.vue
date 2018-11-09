<template>
    <div class="settings">
        <div class="columns">
            <div class="column is-one-fifth">
                <Navbar></Navbar>
            </div>
            <div class="column">
                <ChangePasswordCard></ChangePasswordCard>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import ChangePasswordCard from "../../components/Auth/ChangePasswordCard.vue"
    import Navbar from '../.././components/Misc/Navbar.vue'

    @Component({
        components: {ChangePasswordCard, Navbar}
    })
    export default class Settings extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>