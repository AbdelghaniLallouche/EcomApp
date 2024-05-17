const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const Product = require("../models/produit");

// Configure multer storage for handling multiple files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../front/src/images/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initialize multer with the updated storage configuration
const upload = multer({ storage: storage });

// Ajouter un nouveau produit
router.post("/add", upload.array("images", 4), async (req, res) => {
  try {
    const images = req.files.map((file) => file.filename);
    console.log(req.body);
    let temp = {
      nom: req.body.nom,
      description: req.body.description,
      prix: req.body.prix,
      promo: req.body.promo === "oui" ? true : false,
      prixPromo: req.body.promo === "oui" ? req.body.prixPromo : null,
      stock: req.body.stock,
      quantiteRestante: req.body.stock,
      pourcentageAchat: 0,
      couleurs: [req.body.couleurs],
      tailles:
        req.body.categorie === "vetements"
          ? JSON.parse(req.body.tailles)
          : req.body.categorie === "chaussures"
          ? JSON.parse(req.body.tailles)
          : null,
      categorie: req.body.categorie,
      sousCategorie:
        req.body.categorie === "vetements" ||
        req.body.categorie === "chaussures"
          ? req.body.sousCategorie
          : null,
      categorieCustom: "null",
      images: images,
      vendeurId: req.body.vendeurId,
    };
    const newProduct = new Product(temp);
    const savedProduct = await newProduct.save();
    res
      .status(201)
      .send({
        product: savedProduct,
        message: "Produit ajouté avec succès.",
        ok: true,
      });
  } catch (error) {
    res.status(400).send({ message: error.message, ok: false });
  }
});

// Supprimer un produit
router.delete("/delete/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send({message : "Produit non trouvé." , ok : false});
    }
    res.status(200).send({message : "Produit supprimé avec succès." , ok : true});
  } catch (error) {
    res.status(500).send({message : error.message , ok : false});
  }
});

// Mettre à jour les informations d'un produit
router.put("/update/:id", async (req, res) => {
  try {
    const updates = req.body;
    const product = await Product.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    if (!product) {
      return res.status(404).send({message : "Produit non trouvé." , ok : false});
    }
    res.status(200).send({product : product , message : "Product updated successfully" , ok : true});
  } catch (error) {
    res.status(400).send({
      message : error.message,
      ok : false
    });
  }
});

// Mettre un produit en promotion
router.put("/promote/:id", async (req, res) => {
  try {
    const { promo, prixPromo } = req.body;
    if (!promo || prixPromo === undefined) {
      return res.status(400).send("Les données de promotion sont incomplètes.");
    }
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        promo: promo,
        prixPromo: prixPromo,
      },
      { new: true }
    );

    if (!product) {
      return res.status(404).send("Produit non trouvé.");
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});



//get all product where user_id = userid
router.get('/userproducts/:user_id' , async (req , res) => {
    const user_id = req.params.user_id;
    try{
      const products = await Product.find({
        vendeurId : user_id
      })
      if(products){
        res.status(200).send({
          products : products,
          ok : true
        })
      }else{
        res.status(400).send({message : "aucune produits !" , ok : false})
      }
  
    }catch(err){
      res.status(400).send({
        message : err.message , 
        ok : false
      })
    }
    


})

module.exports = router;
