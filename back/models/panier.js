const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const panierSchema = new Schema({
    client: { type: Schema.Types.ObjectId, ref: 'Client', required: true, unique: true },
    articles: [{
        produit: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantite: { type: Number, required: true, min: 1 }
    }],
    prixTotal: { type: Number, default: 0 }
}, {
    timestamps: { createdAt: 'dateCreation', updatedAt: 'dateMiseAJour' }
});

const Panier = mongoose.model('Panier', panierSchema);

module.exports = Panier;
