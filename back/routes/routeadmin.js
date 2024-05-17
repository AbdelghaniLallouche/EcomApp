const express = require("express");
const router = express.Router();
const Admin = require("../models/admin");
const Vendeur = require("../models/vendeur");
const Utilisateur = require("../models/utilisateur");

router.post("/admins", async (req, res) => {
  try {
    const nouvelAdmin = new Admin(req.body);
    const adminSauvegarde = await nouvelAdmin.save();
    res.status(201).send(adminSauvegarde);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.patch("/vendeurs/approuver/:id/:email", async (req, res) => {
  try {
    const idVendeur = req.params.id;
    const emailVendeur = req.params.email;
    const utilisateurExistant = await Utilisateur.findOne({
      email: emailVendeur,
    });
    if (utilisateurExistant) {
      return res.status(400).send({
        message:
          "Un utilisateur avec cet email existe déjà , refuser ce utilisateur ?",
        ok: false,
      });
    }

    const vendeurApprouve = await Vendeur.findByIdAndUpdate(
      idVendeur,
      { estApprouve: true },
      { new: true }
    );

    console.log(vendeurApprouve);

    if (vendeurApprouve) {
       const nouvelUtilisateur = new Utilisateur({
        nom: vendeurApprouve.nomSociete,
        email: vendeurApprouve.email,
        role: "seller",
        motDePasse: vendeurApprouve.motDePasse,
      });

      await nouvelUtilisateur.save();
      res.status(200).send({
        vendeur: vendeurApprouve,
        message: "Vendeur approuvé et ajouté dans la table utilisateur.",
        ok: true,
      });
    } else {
      res.status(404).send({ message: "Vendeur non trouvé", ok: false });
    }
  } catch (error) {
    res.status(400).send({ message: error, ok: false });
  }
});

router.delete("/vendeurs/refuser/:id", async (req, res) => {
  try {
    const idVendeur = req.params.id;
    const vendeurSupprime = await Vendeur.findByIdAndDelete(idVendeur);
    if (!vendeurSupprime) {
      return res.status(404).send({ message: "Vendeur non trouvé", ok: false });
    }
    res
      .status(200)
      .send({ message: "Vendeur refusé et supprimé avec succès", ok: true });
  } catch (error) {
    res.status(400).send({ message: error, ok: false });
  }
});

module.exports = router;
