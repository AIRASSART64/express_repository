// installation de dotenv : npm install dotenv
// Récupération des infos du .env pour lancer les prama de Node

const app = require('./app');

require('dotenv').config();

const PORT = process.env.PORT;

if(!PORT) {
 
    console.log("PORT absent, compléter le fichier .env");

    process.exit(1);
    

}

app.listen(PORT, ()=> {

    console.log(`Serveur lancé sur le port ${PORT}`);
    
});


 