<template>
  <div id="app"> 
    <LandingPage v-if="!loggedIn" @roomSelection="loggedInSwitch"/>
    <RoomSelection v-else/>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import RoomSelection from './components/RoomSelection.vue'

export default {
  data() {
    return {
    name: 'App',
    loggedIn: false
    }
  },
  components: {
      LandingPage,
      RoomSelection
    },
    methods: {
      loggedInSwitch() {
        this.loggedIn = !this.loggedIn;
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
