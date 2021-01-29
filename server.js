const servestatic = require('serve-static');
const path = require('path');
const express = require('express');


const app = express();
let PORT = process.env.PORT || 3001




// If you want Vue Hot Reload comment this out AND uncomment the IF statement
app.use(servestatic(path.join(path.resolve(), 'dist')));

// if(process.env.NODE_ENV === 'production') {
//   app.use(servestatic(path.join(path.resolve(), 'dist')));
// }




// starts Express Server
app.listen(PORT, () => {console.log(`API server started on ${PORT}`)});