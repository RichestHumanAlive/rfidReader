# rfidReader

Ce projet consiste en une application serveur développée en Node.js pour la gestion des lectures de tags RFID. L'application expose une interface REST pour le traitement de tags RFID, en respectant un intervalle de temps minimal entre les lectures pour un même couple <EPC, antenne>. Les données sont stockées dans une base de données MySQL.

## Prérequis

- Node.js
- MySQL

## Clonage du Projet

Pour obtenir une copie de ce projet sur votre machine locale, suivez ces étapes :

1. Ouvrez votre terminal.

2. Naviguez jusqu'au répertoire où vous souhaitez cloner le projet.

3. Exécutez la commande suivante pour cloner le projet depuis GitHub :

   ```bash
   git clone https://github.com/RichestHumanAlive/rfidReader.git
   ```

## Installation

1. Naviguez dans le répertoire du projet :

   ```bash
   cd rfidReader
   ```

2. Installez les dépendances en utilisant la commande suivante :

   ```bash
   npm install
   ```

3. Créez un fichier .env à la racine du projet avec les paramètres de connexion à la base de données :

   ```
    DB_HOST=host
    DB_PORT=port
    DB_USER=username
    DB_PASSWORD=password
    DB_DATABASE=etk
   ```

4. Installez et configurez MySQL en suivant les instructions ci-dessous.

## Installation de MySQL

### Windows

Téléchargez et installez MySQL depuis [le site officiel de MySQL](https://dev.mysql.com/downloads/installer/)

### Linux

Installez MySQL à l'aide des commandes suivantes :

```bash
sudo apt update
sudo apt install mysql-server
```

## Configuration de la Base de Données

1. Connectez-vous à MySQL :

   ```bash
    mysql -u root -p
   ```

2. Exécutez les scripts SQL pour créer la base de données et la table tagread :

   ```sql
    CREATE DATABASE etk;
    USE etk;

    CREATE TABLE tagread (
        id INT AUTO_INCREMENT PRIMARY KEY,
        epc VARCHAR(24) NOT NULL,
        antenna INT NOT NULL,
        rssi INT NOT NULL,
        timestampreader BIGINT NOT NULL,
        timestamprecv BIGINT NOT NULL
    );
   ```

## Utilisation

1. Assurez-vous que MySQL est installé et en cours d'exécution.

2. Exécutez l'application avec la commande suivante :

   ```bash
    npm start
   ```

   L'application sera disponible à l'adresse http://localhost:3000.

3. Pour traiter les lectures de tags, envoyez des requêtes POST à l'URL http://localhost:3000/tags/process-tags en utilisant des données JSON au format suivant :

   ```json
   {
     "epc": "E98A25ABCDEF123456789012",
     "antenna": 1,
     "rssi": -50,
     "timestamp": "1051079640000"
   }
   ```

## Routes

- `POST /tags/process-tags` : Effectue le traitement des lectures de tags en respectant l'intervalle de temps minimal.

## Contribution

Toute contribution au projet est la bienvenue. Si vous trouvez des bogues, souhaitez ajouter des fonctionnalités ou améliorer la documentation, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

Licence
Ce projet n'es soumis à aucune licence.

Pour toute question ou commentaire, n'hésitez pas à me contacter à l'adresse walter.soft.pro@email.com.
