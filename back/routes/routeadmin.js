const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const Vendeur = require('../models/vendeur');
const Utilisateur = require('../models/utilisateur');

router.post('/admins', async (req, res) => {
    try {
        const nouvelAdmin = new Admin(req.body);
        const adminSauvegarde = await nouvelAdmin.save();
        res.status(201).send(adminSauvegarde);
    } catch (error) {
        res.status(400).send(error);
    }
});
router.patch('/vendeurs/approuver/:id', async (req, res) => {
    try {
        const idVendeur = req.params.id;
        const vendeurApprouve = await Vendeur.findByIdAndUpdate(
            idVendeur,
            { estApprouve: true },
            { new: true }
        );

        if (vendeurApprouve) {
            const utilisateurExistant = await Utilisateur.findOne({ email: vendeurApprouve.email });
            if (utilisateurExistant) {
                return res.status(400).send({ message: "Un utilisateur avec cet email existe déjà." });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(vendeurApprouve.motDePasse, salt);

            const nouvelUtilisateur = new Utilisateur({
                nom: vendeurApprouve.nomSociete,
                email: vendeurApprouve.email,
                motDePasse: hashedPassword,
                role: 'vendeur'
            });

            await nouvelUtilisateur.save();
            res.status(200).send({ vendeur: vendeurApprouve, message: "Vendeur approuvé et ajouté dans la table utilisateur." });
        } else {
            res.status(404).send({ message: "Vendeur non trouvé" });
        }
    } catch (error) {
        res.status(400).send(error);
    }
});


router.delete('/vendeurs/refuser/:id', async (req, res) => {
    try {
        const idVendeur = req.params.id;
        const vendeurSupprime = await Vendeur.findByIdAndDelete(idVendeur);
        if (!vendeurSupprime) {
            return res.status(404).send({ message: "Vendeur non trouvé" });
        }
        res.status(200).send({ message: "Vendeur refusé et supprimé avec succès" });
    } catch (error) {
        res.status(400).send(error);
    }
});


module.exports = router;
