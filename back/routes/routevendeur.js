const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Utilisateur = require('../models/utilisateur');
const Vendeur = require('../models/vendeur'); // Assurez-vous que le chemin est correct

// Ajouter un nouveau vendeur
router.post('/vendeurs', async (req, res) => {
    try {
        const vendeurData = req.body;
        const salt = await bcrypt.genSalt(10); // Générer un sel
        const hashedPassword = await bcrypt.hash(vendeurData.motDePasse, salt); // Hacher le mot de passe avec le sel généré

        const nouveauVendeur = new Vendeur({
            ...vendeurData,
            motDePasse: hashedPassword, // Utiliser le mot de passe haché
        });

        const vendeurSauvegarde = await nouveauVendeur.save();

        if(vendeurSauvegarde){
            //save the user
            const nouvelUtilisateur = new Utilisateur({
                nom: vendeurSauvegarde.nomSociete,
                email: vendeurSauvegarde.email,
                role: 'seller',
                motDePasse: hashedPassword,
            });
            await nouvelUtilisateur.save();
            res.status(201).send({user : vendeurSauvegarde , ok : true});
        }else{
            res.status(400).send({ok : false , message : "Erreur lors de l'ajout du vendeur"});
        }

    } catch (error) {
        res.status(400).send({ message: error.message  , ok : false});
    }
});

module.exports = router;

