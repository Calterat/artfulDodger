<template>
    <div>
        <div class="titleContainer w-auto bg-secondary">
            <h1 class="title">Welcome Username to the Artful Dodger!</h1>
        </div>
        <b-container>
            <b-row>
                <b-col>
                <h2>Game Rules:</h2>
                <p>The game starts when there are 4 players present in the arena.</p>
                <p>The ball will be givin to a random player.</p>
                <p>Click on the player you wish for the ball to go to</p>
                <p>And don't be the last one with it!</p>
                </b-col>
                <b-col>
                <h2>You have won this many times!</h2>
                <h4>UserWins</h4>
                <h2>You have Lost UserLose this many times!</h2>
                <h4>UserLosses</h4>
                <h3>You are UserRating!</h3>
                
                </b-col>
            </b-row>
        </b-container>
        <h2>To Join A game press the button below!</h2>
        <b-button squared variant="outline-danger">Join Game</b-button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

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
</style>