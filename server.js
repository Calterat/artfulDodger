const servestatic = require('serve-static');
const path = require('path');
const express = require('express');

let PORT = process.env.PORT || 3001

app = express();

if(process.env.NODE_ENV === 'production') {
  app.use(servestatic(path.join(path.resolve(). '/dist')));
}

app.listen(PORT, () => {console.log(`API server started on ${app.get('PORT')}`)});