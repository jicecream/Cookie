<template>
    <div id="navbar">
        <div class="menu">
            <div class="menu-label white header">KONTOROL</div>
            <ul class="menu-list">
                <li v-for="link in links">
                    <a @click="navigate(link.to)" class="white">
                        <i class="icon is-left" :class="link.icons"></i> {{link.str}}
                    </a>
                </li>
                <li>
                    <a @click="logout" class="white">
                        <i class="fas fa-sign-out-alt"></i> Logout
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import router from "../../router"

    @Component({})
    export default class Navbar extends Vue {

        links = [
            {to: '/dashboard', icons: 'fas fa-key', str: 'Overview'},
            {to: '/manageDevices', icons: 'fas fa-mobile', str: 'Manage Devices'},
            {to: '/training', icons: 'fas fa-chalkboard-teacher', str: 'Training'},
            {to: '/settings', icons: 'fas fa-cog', str: 'Settings'},
        ]

        created() {}

        navigate(link: string) {
            this.$router.push(link)
        }

        logout() {
            localStorage.clear()
            this.$router.push('/')
        }
    }
</script>

<style scoped lang="scss">
    .menu {
        display: block;
        z-index: 1;
        position: fixed;
        overflow-x: hidden;
        height: 100%;
        background-color: #43425D;
        min-width: 20vw;
    }

    .header {
        font-size: 23px;
        padding: 3% 3% 3% 5%;

    }

    .white {
        color: white;
    }

    .menu {
        color: white;
    }
</style>