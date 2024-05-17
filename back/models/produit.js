const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    nom: { type: String, required: true },
    description: { type: String, required: true },
    prix: { type: Number, required: true },
    promo: { type: Boolean, default: false },
    prixPromo: {
        type: Number,
        required : function () { return this.promo; },
        validate: {
            validator: function (value) {
                // Vérifie si le produit est en promo et que le prix est entre 0 et 100
                return this.promo ? value > 0 && value < 100 : true;
            },
            message: "Le percentage de promotion doit être entre 0 et 100%"
        }
    },
    stock: { type: Number, required: true },
    quantiteRestante: { type: Number, required: true },
    pourcentageAchat: { type: Number, required: true },
    couleurs: [String],
    tailles: {
        type: [String],
        validate : {
            validator : function (value) { console.log(value) 
                if (this.categorie === 'vetements' || this.categorie === 'chaussures') {
                    return value.length > 0;
                } else {
                    return true;
                }
             }
        },
        required: function () { 
            return (this.categorie === 'vetements' || this.categorie === 'chaussures'); }
    },
    categorie: {
        type: String,
        required: true,
        enum: ['electromenager', 'vetements', 'chaussures', 'electroniques', 'autre']
    },
    sousCategorie: {
        type: String,
        required: function () { return this.categorie === 'vetements' || this.categorie === "chaussures" ; },
        enum: ['homme', 'femme']
    },
    categorieCustom: {
        type: String,
        required: function () { return this.categorie === 'autre'; }
    },
    images: {
        type: [String],
        // validate: {
        //     validator: function (url) {
        //         return /^(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))$/i.test(url); // Vérifie que l'URL est bien formatée pour une image
        //     },
        //     message: 'URL non valide. Doit être une URL d\'image valide.'
        // }
    },
    vendeurId: { type: Schema.Types.ObjectId, ref: 'Vendeur', required: true }
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;