<template>
  <div id="app"> 
    <LandingPage v-if="!loggedIn" @roomSelection="loggedInSwitch"/>
    <RoomSelection v-else-if="loggedIn && !inRoom" @joinRoom="inRoomSwitch"/>
    <GameRoom v-else/>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import RoomSelection from './components/RoomSelection.vue'
import GameRoom from './components/GameRoom.vue'

export default {
  data() {
    return {
    name: 'App',
    loggedIn: false,
    inRoom: false,
    }
  },
  components: {
      LandingPage,
      RoomSelection,
      GameRoom
    },
    methods: {
      loggedInSwitch() {
        this.loggedIn = !this.loggedIn;
      },
      inRoomSwitch() {
        this.inRoom = !this.inRoom;
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
