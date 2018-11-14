<template>
    <div class="settings">
        <div class="columns">
            <div class="column is-one-fifth">
                <Navbar></Navbar>
            </div>
            <div class="column">
                <ChangePasswordForm></ChangePasswordForm>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Navbar from '../.././components/Misc/Navbar.vue'
    import ChangePasswordCard from "../../components/Settings/ChangePasswordCard.vue";
    import ChangePasswordForm from '../../components/Auth/ChangePasswordForm.vue'

    @Component({
        components: {ChangePasswordForm, Navbar}
    })
    export default class Settings extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>