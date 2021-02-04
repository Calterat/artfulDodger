<template>
  <div id="app"> 
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item-dropdown
          id="account-dropdown"
          text="User"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item v-if="!loggedIn">You can logout from here if you log in!</b-dropdown-item>
          <b-dropdown-item v-if="loggedIn" @click="logout">Logout</b-dropdown-item>
          <b-dropdown-item v-if="loggedIn && inRoom" @click="leaveRoom">Leave Room</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">The Artful Dodger</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    </div>
    <LandingPage v-if="!loggedIn" @loggingIn="login" />
    <RoomSelection v-else-if="loggedIn && !inRoom" @joiningRoom="joinRoom" />
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
    inRoom: false
    }
  },
  components: {
      LandingPage,
      RoomSelection,
      GameRoom
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
  },
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
