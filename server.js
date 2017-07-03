const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use('/static', express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));


app.get('/', (req, res)=>{
  // res.send('Hello world');
  res.sendFile(__dirname+'/public/index.html');
});
const port = process.env.PORT || 5000;
app.listen(port ,()=>{
  console.log('el servidor corre en el puerto' + port);
});
