import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import { ShopIcon, ModifyIcon, CloseIcon } from "../public/Svgs";
import { deleteProduct, getSellerProducts, updateProduct } from "../public/Helpers";

const Gestion = () => {
  const [model, setModel] = useState(false);
  const [id, setId] = useState();
  const [colors, setColors] = useState();
  const [tailles, setTailles] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [categorie, setCategorie] = useState();
  const [promoperc, setPromoperc] = useState();
  const [products, setProducts] = useState();

  useEffect( () => {
    getSellerProducts(setProducts)
},[products])

  return (
    <div className="mx-4">
      <h1 className="p-1 txt">Mes Produits :</h1>
      <div className="grid grid-cols-1 gap-2 justify-center lil:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <Link
            to="/addProduct"
            className="flex w-full h-full pb-2 flex-col hover:cursor-pointer justify-center items-center bg-white shadow-md border-y-[1px] rounded-sm"
          >
            <div className="rounded-full bg-slate-400 px-2 pt-1 pb-[6px] text-white font-semibold">
              +
            </div>
          </Link>
        </div>
        {products && products?.map((product, index) => (
          <div>
            <div
              key={index}
              className="flex relative w-full pb-2 flex-col bg-white shadow-md border-y-[1px] rounded-sm gap-2"
            >
              <div className="flex w-full gap-2 absolute top-0 py-1 pr-1 justify-end items-center">
                <button
                onClick={async (e)=>{
                  if(confirm("you are going to delete this product are u sure !!")){
                    deleteProduct(e,product._id,setProducts,products)
                  }
                }}
                >
                  <CloseIcon />
                </button>
                <button
                  onClick={(e) => {
                    setModel(true);
                    setPromoperc(product.prixPromo);
                    setTailles(product.tailles);
                    setColors(product.couleurs);
                    setName(product.nom);
                    setPrice(product.prix);
                    setId(product._id);
                  }}
                >
                  <ModifyIcon />
                </button>
              </div>
              <img
                className="bg-cover w-full h-40 rounded-sm"
                src={product.pic}
                alt=""
              />
              <div className="flex flex-row mx-1 justify-between items-center">
                <h1 className="text-base">{product.name}</h1>
                <h1 className="title">{product.price} DA</h1>
              </div>

              <div className="flex flex-row mx-1 justify-between items-center">
                <ReactStars
                  count={5}
                  size={20}
                  color2={"#ffd700"}
                  edit={false}
                  value={product.rating}
                />
                <ShopIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
      {model && (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-10 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 w-96 h-96 flex flex-col gap-2 justify-center items-center rounded-md">
            <h1 className="title">Modify le produit :</h1>
            <input
              type="text"
              value={name}
              placeholder="Nom du produit"
              className="inputt"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="number"
              value={price}
              placeholder="Prix du produit"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              className="inputt"
            />
            <input
              type="number"
              value={promoperc}
              placeholder="Promotion percentage (optional)"
              onChange={(e) => {
                setPromoperc(e.target.value);
              }}
              className="inputt"
            />
            <input
              type="text"
              value={colors}
              placeholder="product colors"
              onChange={(e) => {
                setColors(e.target.value);
              }}
              className="inputt"
            />

            {(categorie === "vetements" || categorie === "chaussures") && (
              <div className="m-1 shadow-lg bg-white">
                {tailles.map((p, index) => (
                  <label className="labell" key={index} htmlFor={`'${p}'`}>
                    <input
                      type="checkbox"
                      checked={tailles.includes(p)}
                      onChange={(e) => {
                        if (tailles.includes(p)) {
                          setTailles(tailles.filter((t) => t !== p));
                        } else {
                          tailles.push(p);
                          setTailles(tailles);
                        }
                      }}
                    />
                    <h1 className="title">{p}</h1>
                  </label>
                ))}
              </div>
            )}

            <div className="flex w-full justify-center items-center gap-2 mt-1">
              <button
                onClick={async (e) => {
                  if (name === "" || price === 0) {
                    alert("Veuillez remplir tous les champs");
                  } else {
                    updateProduct(
                      e,
                      id,
                      name,
                      price,
                      promoperc === null || promoperc === "" ? false : true,
                      promoperc,
                      colors,
                      tailles,
                      setProducts,
                      products
                    );
                    setModel(false);
                  }
                }}
                className="bg-slate-400 text-white px-2 pt-1 pb-[6px] rounded-lg"
              >
                Modify
              </button>
              <button
                className="bg-slate-400 text-white px-2 pt-1 pb-[6px] rounded-lg"
                onClick={() => {
                  setModel(false);
                }}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gestion;
