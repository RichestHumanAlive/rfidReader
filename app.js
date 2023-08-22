const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const tagsRoute = require('./routes/tags');


// Middleware Body Parser pour analyser les données JSON
app.use(bodyParser.json());

// Utilisation de la route pour les tags dans l'application
app.use('/tags', tagsRoute);

app.listen(port, () => console.log(`Serveur en écoute sur le port ${port}`));
