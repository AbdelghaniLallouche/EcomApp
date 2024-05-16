const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendeurSchema = new Schema({
    nomSociete: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    adresse: {
        rue: String,
        ville: String,
        codePostal: String,
        pays: String,
    },
    description: String,
    numeroTVA: String,
    produits: [{ type: Schema.Types.ObjectId, ref: 'Produit' }],
    dateCreationCompte: { type: Date, default: Date.now },
    estApprouve: { type: Boolean, default: false },
});




module.exports = mongoose.model('Vendeur', vendeurSchema);
