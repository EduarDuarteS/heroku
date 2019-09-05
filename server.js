//Install express server   (contenido archivo server.js)
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
//dudas buscar archivo angular.json "outputPath" para saber nombre capetaprincipal
app.use(express.static(__dirname + '/dist/herokuApp'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/herokuApp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

