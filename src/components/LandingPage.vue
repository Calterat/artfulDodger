<template>
<div>
    <b-jumbotron header="Welcome To Artful Dodger!" lead="Please Login or Create an Account below" class="mainSplash">
        <h3>Log In:</h3>
        <b-container>
            <b-row align-h="center">
            <b-form @submit="onSubmitLogIn" @reset="onResetLogin" v-if="show" class="formSizing">
                <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                >
                    <b-form-input
                    id="LoginEmail"
                    v-model="formLogin.email"
                    type="email"
                    placeholder="Enter email"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                    <b-form-input
                    id="LoginPassword"
                    v-model="formLogin.password"
                    type="password"
                    placeholder="Enter Password"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="outline-danger">Reset</b-button>
            </b-form>
            </b-row>
                <b-card class="mt-3" header="Displaying formLogin in JSON">
                <pre class="m-0">{{ formLogin }}</pre>
                </b-card>
        </b-container>
        <!-- Register Form -->
        <h3>Register:</h3>
        <b-container>
            <b-row align-h="center">
            <b-form @submit="onSubmitRegister" @reset="onResetRegister" v-if="show" class="formSizing">
                <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                >
                    <b-form-input
                    id="Register"
                    v-model="formRegister.email"
                    type="email"
                    placeholder="Enter email"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-1"
                    label="User Name:"
                    label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    v-model="formRegister.username"
                    type="input"
                    placeholder="Enter Username"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="formRegister.password"
                    type="password"
                    placeholder="Enter Password"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="outline-danger">Reset</b-button>
            </b-form>
            </b-row>
                <b-card class="mt-3" header="Displaying formRegister in JSON">
                <pre class="m-0">{{ formRegister }}</pre>
                </b-card>
        </b-container>
    </b-jumbotron>
</div>
</template>

<script>
  export default {
    data() {
      return {
        formLogin: {
          email: '',
          password: '',
        },
        formRegister: {
            email: '',
            username: '',
            password: '',
        },
        show: true,
        
      }
    },
    methods: {
      async onSubmitLogIn(event) {
        event.preventDefault()
        
        const email = this.formLogin.email.trim();
        const password = this.formLogin.password.trim();

        const response = await fetch('/api/dodgers/login', {
          method: 'POST',
          body: JSON.stringify({
            email,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
          alert("Welcome Back, Chump!  **snickers, then yells to the back** Didn't we just crush this weasel?!");
          const { dodgername, games_loss, games_won, loggedIn } = await response.json();
          this.$session.start();
          this.$session.set('dodgername', dodgername);
          this.$session.set('games_loss', games_loss);
          this.$session.set('games_won', games_won);
          this.$session.set('loggedIn', loggedIn);
          this.$session.set('inRoom', false);
          this.$emit('loggingIn');
        } else alert(response.statusText);
      },
      onResetLogin(event) {
        event.preventDefault()
        // Reset our form values
        this.formLogin.email = ''
        this.formLogin.password = ''

        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
        this.show = true
        })
      },
      async onSubmitRegister(event) {
        event.preventDefault()

        const dodgername = this.formRegister.username.trim();
        const email = this.formRegister.email.trim();
        const password = this.formRegister.password.trim();
        const games_won = 0;
        const games_loss = 0;

        const response = await fetch('/api/dodgers', {
          method: 'POST',
          body: JSON.stringify({
            dodgername,
            email,
            password,
            games_won,
            games_loss
          }),
          headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
          alert('Welcome, Chump!  **snickers, then yells to the back** Fresh Meat Joining!');
          const { dodgername, games_loss, games_won, loggedIn } = await response.json();
          this.$session.start();
          this.$session.set('dodgername', dodgername);
          this.$session.set('games_loss', games_loss);
          this.$session.set('games_won', games_won);
          this.$session.set('loggedIn', loggedIn);
          this.$session.set('inRoom', false);
        } else alert(response.statusText);
      },

    onResetRegister(event) {
        event.preventDefault()
        // Reset our form values
        this.formRegister.email = ''
        this.formRegister.username = ''
        this.formRegister.password = ''

        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
    }
  }
</script>

<style>
    .formSizing {
        width: 30em;
    }
</style>