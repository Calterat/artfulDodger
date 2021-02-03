const servestatic = require('serve-static');
const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');

/*

add additional requirements here

*/

const app = express();
let PORT = process.env.PORT || 3001;

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// IF YOU WANT VUE's HOT RELOAD
// comment out the line below AND run two servers with 'npm run serve' and 'npm start'
app.use(servestatic(path.join(path.resolve(), 'dist')));
app.use(routes);

// ALSO

// UNCOMMENT THIS FOR HOT RELOAD
// LEAVE THIS CODE HERE
// if(process.env.NODE_ENV === 'production') {
//   app.use(servestatic(path.join(path.resolve(), 'dist')));
// }

/*

add additional app.use() here

*/

// starts Express Server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {console.log(`API server lending an ear on port: ${PORT}`)});
});
