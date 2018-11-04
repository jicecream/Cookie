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
</style>
