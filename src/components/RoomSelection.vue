<template>
  <div>
    <div class="titleContainer w-auto bg-secondary">
      <h1 class="title"><strong class="headerRoom">{{userName}}</strong> decided to show up...</h1>
    </div>
    <b-container>
      <b-row align-h="between">
        <b-col cols="4">
        <h2 class="headerRoom">Chat Rules:</h2>
        <p>If you see a developer in the room, you are required by the USER AGREEMENT to harrass them with messages (positive or other)</p>
        <p>There is ball, find it</p>
        <p>Be nice to other users,, or naw</p>
        <p>And don't be the last one in the chat! Cool cats leave early</p>
        </b-col>
        <b-col cols="4">
        <h2 class="headerRoom">You have sent this many messages!</h2>
        <h4>{{ messageSentCount }}</h4>
        <h3>You are UserRating!</h3>
        
        </b-col>
      </b-row>
    </b-container>
    <h2><strong> To Join a chat, press the button below! </strong></h2>
    <p>(..not to pressure you, but I heard that Julian is in here..)</p>
    <b-button squared variant="outline-danger" @click="joinRoom">Join Game</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: this.$session.get('dodgername'),
      messageSentCount: this.$session.get('games_won'),
    }
  },
  methods: {
    joinRoom() {
      this.$session.remove('inRoom');
      this.$session.set('inRoom', true);
      this.$emit('joiningRoom');
    }
  }
}
</script>

<style>
  .titleContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8em;
  }

  .headerRoom {
    text-decoration: underline;
  }
</style>