<template>
  <div id="app"> 
    <!-- <LandingPage/> -->
    <RoomSelection/>
  </div>
</template>

<script>
// import LandingPage from './components/LandingPage.vue'
import RoomSelection from './components/RoomSelection.vue'

export default {
  name: 'App',
  components: {
    // LandingPage,
    RoomSelection
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
