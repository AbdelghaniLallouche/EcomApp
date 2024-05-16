// models/utilisateur.js
const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    motDePasse: { type: String, required: true },
});

module.exports = mongoose.model('Utilisateur', utilisateurSchema);
