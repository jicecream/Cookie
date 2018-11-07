<template>
    <!--<sidebar-menu :menu="menu"></sidebar-menu>-->
</template>

<script lang="ts">

    /////// THIS IS SO SAD, ALEXA CAN WE IGNORE THIS FILE /////////

    import {Component, Prop, Vue} from 'vue-property-decorator';
    //import {VueSideBarMenu} from 'vue-sidebar-menu';

    //Vue.use(VueSideBarMenu)

    @Component{
        //    components:{VueSideBarMenu}
    }
    export default class SideBar extends Vue {
        data() {
            menu:[
                {
                    href: '/',
                    title: 'Dashboard',
                    icon: 'fa fa-user'
                },
                {
                    href: '/ManageDevices',
                    title: 'ManageDevices',
                    icon: 'fa fa-user'
                }
            ]
        }
    }
</script>

<style lang="scss" scoped>

</style>