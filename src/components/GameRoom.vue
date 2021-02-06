<template>
  <div :style="{'background-image':'url(https://webgradients.com/public/webgradients_png/035%20Itmeo%20Branding.png)'}">
    <p>Welcome, {{ user }}!</p>
    <form @submit.prevent="sendMessage">
        <input type="text" v-model="message" placeholder="Message..." />
        <button type="submit">Send Message</button>
    </form>
    <br>
    <div>
        <p v-for="pack in messages" v-bind:key="pack"><strong>{{ pack.user }}:</strong> {{ pack.message }}</p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
    data() {
        return {
            isCOnnected: false,
            socketMessage: '',
            messages: [],
            message: '',
            user: this.$session.get('dodgername'),
            socket: io(),
        }
    },
    mounted() {
        this.socket.on("connection", data => {
            this.messages.unshift({ user: this.user, message: data });
        });
        this.socket.on('send-message', (data) => {
            this.messages.unshift(data);
        })
    },
    methods: {
        sendMessage(event) {
            event.preventDefault();
            console.log(this.$session.get('dodgername'));
            console.log(this.message);
            this.socket.emit("send-message", {user: this.user, message: this.message});
            this.message = '';
        }
    }
}
</script>

<style>

</style>