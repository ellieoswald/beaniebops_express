const express = require('express');

const app = express();

const port = 1337;

const dir = __dirname + '/public/';

app.use(express.static('public'));

app.use(express.static('public/img'));

app.get('/', function(request, response){
  response.sendFile(dir + 'index.html');
});

app.get('/artists', function(request, response){
  response.sendFile(dir + 'artists.html');
});

app.get('/songs', function(request, response){
  response.sendFile(dir + 'songs.html');
});

app.get('/genres', function(request, response){
  response.sendFile(dir + 'genres.html');
});

app.get('/*', function(request, response){
  response.sendFile(dir + '404.html');
});

app.listen(port, function(){
  console.log('Listening on http://localhost:' + port + " press ctrl+c to quit...");
});
