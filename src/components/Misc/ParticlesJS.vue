<template>
    <div class="particlesJS">
        <!--content goes here-->
        <h1>{{title}}</h1>
        <p>{{user.firstName }}</p>
        <p>{{user.lastName }}</p>
        <p v-if="showName">{{user.firstName }} {{user.lastName }}</p>

        <div id="particles-js"></div>

    </div>
</template>


<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import particles from 'particles.js'

    @Componentb
    export default class ParticlesJS extends Vue {
    name:'particlesJS'
        mounted(){

        console.log('mounted');

    }

        data(){
        return{
            title:'Hello World',

            user:{ firstName:'John', lastName:'Doe'},

            showName:false,

            items:[
                {title:'Item one'},
                {title:'Item two'},
                {title:'Item three'}


            ]



        }
    }
    }

</script>



<style lang="scss" scoped>
    /*css for the particlesjs goes here*/

    body{

        background-color: black;

    }
</style>