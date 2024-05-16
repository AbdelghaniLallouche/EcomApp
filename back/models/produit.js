const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    nom: { type: String, required: true },
    description: { type: String, required: true },
    prix: { type: Number, required: true },
    promo: { type: Boolean, default: false },
    prixPromo: {
        type: Number,
        validate: {
            validator: function (value) {
                return this.promo ? value != null : true; // Vérifie si le produit est en promo pour requérir un prix promo
            },
            message: "Prix promo doit être spécifié si le produit est en promotion."
        }
    },
    stock: { type: Number, required: true },
    quantiteRestante: { type: Number, required: true },
    pourcentageAchat: { type: Number, required: true },
    couleurs: [String],
    tailles: {
        type: [String],
        required: function () { return this.categorie === 'vetement' || this.categorie === 'chaussure'; }
    },
    categorie: {
        type: String,
        required: true,
        enum: ['electromenager', 'vetement', 'chaussure', 'electronique', 'autre']
    },
    sousCategorie: {
        type: String,
        required: function () { return this.categorie === 'vetement'; },
        enum: ['homme', 'femme']
    },
    categorieCustom: {
        type: String,
        required: function () { return this.categorie === 'autre'; }
    },
    images: [{
        type: String,
        validate: {
            validator: function (url) {
                return /^(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))$/i.test(url); // Vérifie que l'URL est bien formatée pour une image
            },
            message: 'URL non valide. Doit être une URL d\'image valide.'
        }
    }],
    vendeurId: { type: Schema.Types.ObjectId, ref: 'Vendeur', required: true }
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;