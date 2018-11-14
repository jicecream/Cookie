<template>
  <div id="app">
      <router-view/><!-- is actually impt-->
  </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Component from "vue-class-component"
    import Navbar from "./components/Misc/Navbar.vue"

    @Component({
        components: {Navbar}
    })
    export default class App extends Vue {
    }
</script>
<style lang="scss">
    .page {
        min-height: 100vh;
    }

    .centerall {
        height: 100vh;
        padding: 0;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }

    #app {
        background-color: #F0F0F7;
        min-height: 100%
    }

    .cursorPtr {
        cursor: pointer;
    }

    .materialCard {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        color: black;
        background-color: white;
        padding: 2em;
        margin-bottom: .5em;
        &:hover {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
    }
</style>
