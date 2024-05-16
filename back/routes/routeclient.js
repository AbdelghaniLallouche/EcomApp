const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Client = require('../models/client');
const Utilisateur = require('../models/utilisateur')
router.post('/clients', async (req, res) => {
    try {
        const clientData = req.body;
        const salt = await bcrypt.genSalt(10); // Générer un sel
        const hashedPassword = await bcrypt.hash(clientData.motDePasse, salt); // Hacher le mot de passe
        const nouveauClient = new Client({
            ...clientData,
            motDePasse: hashedPassword,
        });

        const clientSauvegarde = await nouveauClient.save();

        const nouvelUtilisateur = new Utilisateur({
            nom: clientSauvegarde.nom,
            email: clientSauvegarde.email,
            role: 'client',
            motDePasse: hashedPassword,
        });
        await nouvelUtilisateur.save();

        res.status(201).send(clientSauvegarde);
    } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
    }
});


module.exports = router;
