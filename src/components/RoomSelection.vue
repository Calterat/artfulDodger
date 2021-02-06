<template>
  <div :style="{'background-image':'url(https://webgradients.com/public/webgradients_png/035%20Itmeo%20Branding.png)'}">
    <div class="titleContainer w-auto">
      <h1 class="title"><strong class="headerRoom">{{userName}}</strong> decided to join the chat!</h1>
    </div>
    <b-container class="titleRoom">
      <b-row align-h="between">
        <b-col cols="4">
        <h2 class="headerRoom">Chat Rules:</h2>
        <p>-If you see a developer in the room, you are required by the USER AGREEMENT to harrass them with messages (positive or other).</p>
        <p>-There is ball, find it.</p>
        <p>-Be nice to other users, or naw.</p>
        <p>-And don't be the last one in the chat! Cool cats leave early.</p>
        </b-col>
        <b-col cols="4">
        <h2 class="headerRoom">You have sent this many messages!</h2>
        <h4>{{ messageSentCount }}</h4>
        <h3>You are UserRating!</h3>
        
        </b-col>
      </b-row>
    </b-container>
    <h2 class="joinRoomRoom"><strong> To Join a chat, press the button below! </strong></h2>
    <p>(..not to pressure you, but I heard that Julian is in here..)</p>
    <b-button squared variant="outline-danger" @click="joinRoom">Join Chat</b-button>
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
    },
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

  .titleRoom {
    padding-top: 3em;
  }

  .joinRoomRoom {
    padding-top: 1.5em;
  }
</style>