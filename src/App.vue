<template>
  <div id="app"> 
    <div>
      <b-navbar text="black" :style="{'background-image':'url(https://www.solidbackgrounds.com/images/2560x1600/2560x1600-pale-blue-solid-color-background.jpg)'}">
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" v-if="loggedIn && inRoom" @click="leaveRoom">The Artful Dodger</b-nav-item>
        <b-nav-item href="#" v-if="loggedIn && !inRoom" @click="ball">The Artful Dodger</b-nav-item>
      </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" v-if="loggedIn && inRoom" @click="leaveRoom">Home</b-nav-item>
        <b-nav-item-dropdown
          id="account-dropdown"
          text="User"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item v-if="!loggedIn">You can logout from here if you log in!</b-dropdown-item>
          <b-dropdown-item v-if="loggedIn" @click="logout" right>Logout</b-dropdown-item>
          <b-dropdown-item v-if="loggedIn && inRoom" @click="leaveRoom" right>Leave Room</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
    </div>
    <LandingPage v-if="!loggedIn" @loggingIn="login" />
    <RoomSelection v-else-if="loggedIn && !inRoom" @joiningRoom="joinRoom" />
    <GameRoom v-else/>
    <FoundBall v-if="ballFound && !inRoom"/>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import RoomSelection from './components/RoomSelection.vue'
import GameRoom from './components/GameRoom.vue'
import FoundBall from './components/FoundBall'

export default {
  data() {
    return {
    name: 'App',
    loggedIn: false,
    inRoom: false,
    ballFound: false
    }
  },
  components: {
      LandingPage,
      RoomSelection,
      GameRoom,
      FoundBall
  },
  mounted() {
    if (this.$session.exists() && this.$session.get('loggedIn')) this.loggedIn = true;
  },
  methods: {
    login() {
      this.$session.remove('loggedIn');
      this.$session.set('loggedIn', true);
      this.loggedIn = true;
    },
    joinRoom() {
      this.$session.remove('inRoom');
      this.$session.set('inRoom', true);
      this.inRoom = true;
    },
    leaveRoom() {
      this.$session.remove('inRoom');
      this.$session.set('inRoom', false);
      this.inRoom = false;
    },
    logout() {
      this.$session.clear();
      this.$session.destroy();
      this.loggedIn = false;
      this.inRoom = false;
    },
    ball () {
      this.ballFound = !this.ballFound;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1d2022;
  
}

  .titleName {
    margin: auto;
  }
</style>
