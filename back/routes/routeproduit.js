const express = require('express');
const router = express.Router();
const Product = require('../models/produit')// Assurez-vous que le chemin est correct

// Ajouter un nouveau produit
router.post('/add', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).send(savedProduct);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Supprimer un produit
router.delete('/delete/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send("Produit non trouvé.");
        }
        res.status(200).send("Produit supprimé avec succès.");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Mettre à jour les informations d'un produit
router.put('/update/:id', async (req, res) => {
    try {
        const updates = req.body;
        const product = await Product.findByIdAndUpdate(req.params.id, updates, { new: true });
        if (!product) {
            return res.status(404).send("Produit non trouvé.");
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Mettre un produit en promotion
router.put('/promote/:id', async (req, res) => {
    try {
        const { promo, prixPromo } = req.body;
        if (!promo || prixPromo === undefined) {
            return res.status(400).send("Les données de promotion sont incomplètes.");
        }
        const product = await Product.findByIdAndUpdate(req.params.id, {
            promo: promo,
            prixPromo: prixPromo
        }, { new: true });

        if (!product) {
            return res.status(404).send("Produit non trouvé.");
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
