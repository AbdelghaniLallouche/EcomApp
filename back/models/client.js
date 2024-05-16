const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    adresseLivraison: [{
        rue: String,
        ville: String,
        codePostal: String,
        pays: String,
    }],
    panier: {
        articles: [{
            produitId: { type: Schema.Types.ObjectId, ref: 'Produit' },
            quantite: Number
        }],
        prixTotal: { type: Number, default: 0 }
    },
    historiqueCommandes: [{
        commandeId: { type: Schema.Types.ObjectId, ref: 'Commande' },
        date: Date,
        total: Number,
        status: String,
    }],
    dateCreationCompte: { type: Date, default: Date.now }
});




module.exports = mongoose.model('Client', clientSchema);
