const express = require('express');
const router = express.Router();
const Panier = require('../models/panier')// Assurez-vous que le chemin est correct
const Product = require('../models/produit') // Assurez-vous que le chemin est correct

// Ajouter un produit au panier
router.post('/ajouter/:clientId/:produitId', async (req, res) => {
    try {
        const { clientId, produitId } = req.params;
        const { quantite } = req.body;

        const produit = await Product.findById(produitId);
        if (!produit || produit.quantiteRestante < quantite) {
            return res.status(400).send('Quantité demandée non disponible en stock.');
        }

        const panier = await Panier.findOne({ client: clientId });
        if (panier) {
            const indexProduit = panier.articles.findIndex(item => item.produit.toString() === produitId);
            if (indexProduit !== -1) {
                panier.articles[indexProduit].quantite += quantite;
            } else {
                panier.articles.push({ produit: produitId, quantite });
            }
        } else {
            const nouveauPanier = new Panier({
                client: clientId,
                articles: [{ produit: produitId, quantite }]
            });
            await nouveauPanier.save();
        }

        await panier.save();
        res.send('Produit ajouté au panier.');
    } catch (error) {
        res.status(500).send('Erreur lors de l\'ajout du produit au panier.');
    }
});

// Supprimer un produit du panier
router.delete('/supprimer/:clientId/:produitId', async (req, res) => {
    try {
        const { clientId, produitId } = req.params;
        const panier = await Panier.findOne({ client: clientId });
        if (panier) {
            panier.articles = panier.articles.filter(item => item.produit.toString() !== produitId);
            await panier.save();
            res.send('Produit supprimé du panier.');
        } else {
            res.status(404).send('Panier non trouvé.');
        }
    } catch (error) {
        res.status(500).send('Erreur lors de la suppression du produit du panier.');
    }
});

// Modifier la quantité d'un produit dans le panier
router.put('/modifier/:clientId/:produitId', async (req, res) => {
    try {
        const { clientId, produitId } = req.params;
        const { nouvelleQuantite } = req.body;

        const produit = await Product.findById(produitId);
        if (!produit || produit.quantiteRestante < nouvelleQuantite) {
            return res.status(400).send('Quantité demandée non disponible en stock.');
        }

        const panier = await Panier.findOne({ client: clientId });
        if (panier) {
            const indexProduit = panier.articles.findIndex(item => item.produit.toString() === produitId);
            if (indexProduit !== -1) {
                panier.articles[indexProduit].quantite = nouvelleQuantite;
                await panier.save();
                res.send('Quantité mise à jour.');
            } else {
                res.status(404).send('Produit non trouvé dans le panier.');
            }
        } else {
            res.status(404).send('Panier non trouvé.');
        }
    } catch (error) {
        res.status(500).send('Erreur lors de la modification de la quantité du produit.');
    }
});

module.exports = router;
