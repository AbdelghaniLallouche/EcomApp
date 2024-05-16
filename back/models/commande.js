const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commandeSchema = new Schema({
    client: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
    panier: { type: Schema.Types.ObjectId, ref: 'Panier', required: true },
    produits: [{
        produit: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantite: { type: Number, required: true }
    }],
    dateCommande: { type: Date, default: Date.now },
    prixTotal: { type: Number, required: true }
});

const Commande = mongoose.model('Commande', commandeSchema);

module.exports = Commande;
