const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const utilisateurRouter = require('./routes/routeuser');
const clientRouter = require('./routes/routeclient');
const adminRouter = require('./routes/routeadmin');
const vendeurRouter = require('./routes/routevendeur');
const produitRouter = require('./routes/routeproduit');
const panierRouter = require('./routes/routepanier');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

mongoose.connect('mongodb+srv://alallouche:HhHW9NkaCV1kdELv@cluster0.jhiloxq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connecté à MongoDB'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));

app.use('/api', utilisateurRouter); // Utilise le routeur pour les utilisateurs
app.use('/api', clientRouter); // Utilise le routeur pour les clients
app.use('/api', adminRouter); // Utilise le routeur pour les admins
app.use('/api', vendeurRouter);
app.use('/api/produits', produitRouter);// Utilise le routeur pour les vendeurs
app.use('/api/panier', panierRouter);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
