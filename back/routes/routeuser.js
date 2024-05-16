// routes/routeuser.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Utilisateur = require('../models/utilisateur');
const jwt = require('jsonwebtoken');

router.post('/utilisateurs', async (req, res) => {
    try {
        const nouvelUtilisateur = new Utilisateur(req.body);
        const utilisateurSauvegarde = await nouvelUtilisateur.save();
        res.status(201).send(utilisateurSauvegarde);
    } catch (error) {
        res.status(400).send(error);
    }
});
router.get('/utilisateurs/recherche', async (req, res) => {
    try {
        const email = req.query.email;
        const utilisateur = await Utilisateur.findOne({ email: email });

        if (!utilisateur) {
            return res.status(404).send({ message: "Aucun utilisateur trouvé avec cet email" });
        }
        res.status(200).send(utilisateur);
    } catch (error) {
        res.status(500).send({ message: "Erreur serveur", error: error });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, motDePasse } = req.body;
        console.log(`Tentative de connexion pour l'email : ${email}`);
        const utilisateur = await Utilisateur.findOne({ email });
        console.log(utilisateur ? 'Utilisateur trouvé' : 'Utilisateur non trouvé'); // Débogage

        if (!utilisateur) {
            return res.status(400).send({ message: "Identifiants incorrects" , ok : false});
        }
        const match = await bcrypt.compare(motDePasse, utilisateur.motDePasse);
        console.log(match ? 'Mot de passe valide' : 'Mot de passe invalide'); // Débogage

        if (match) {
            const token = jwt.sign({nom : utilisateur.nom , id : utilisateur._id , email: utilisateur.email, role: utilisateur.role }, 'your_secret_key', { expiresIn: '24h' });
            if (utilisateur.role === 'seller') {
                res.send({ redirect: '/' , token : token , ok : true});
            } else if (utilisateur.role === 'client') {
                res.send({ redirect: '/' , token : token, ok : true});
            } else if (utilisateur.role === 'admin') {
                res.send({ redirect: '/admin' , token : token, ok : true});
            }

        } else {
            res.status(400).send({ message: "Identifiants incorrects" , ok : false });
        }
    } catch (error) {
        res.status(400).send(error);
    }
});


module.exports = router;
