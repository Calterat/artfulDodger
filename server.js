const servestatic = require('serve-static');
const path = require('path');
const express = require('express');


const app = express();
let PORT = process.env.PORT || 3001




// IF YOU WANT VUE's HOT RELOAD
// comment out the line below AND run two servers with 'npm run serve' and 'npm start'
app.use(servestatic(path.join(path.resolve(), 'dist')));

// ALSO

// UNCOMMENT THIS FOR HOT RELOAD
// LEAVE THIS CODE HERE
// if(process.env.NODE_ENV === 'production') {
//   app.use(servestatic(path.join(path.resolve(), 'dist')));
// }




// starts Express Server
app.listen(PORT, () => {console.log(`API server started on ${PORT}`)});