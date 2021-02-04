const servestatic = require('serve-static');
const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

let PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(servestatic(path.join(path.resolve(), 'dist')));
app.use(routes);

// IF YOU WANT VUE's HOT RELOAD
// comment out the line below AND run two servers with 'npm run serve' and 'npm start'

// UNCOMMENT THIS FOR HOT RELOAD
// LEAVE THIS CODE HERE
// if(process.env.NODE_ENV === 'production') {
//   app.use(servestatic(path.join(path.resolve(), 'dist')));
// }

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => {console.log(`API server lending an ear on port: ${PORT}`)});
});

io.on('connection', function(socket) {
  console.log(socket.id);
  socket.emit('connection', 'connected!')
  socket.on("send-message", data => {
    io.emit("send-message", data)
  });
});

