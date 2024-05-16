import { useState } from "react";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import { ShopIcon, ModifyIcon, CloseIcon } from "../public/Svgs";

const Gestion = () => {
  const [model, setModel] = useState(false);
  const [id,setId] = useState()
  const [name ,setName] = useState("")
  const [price ,setPrice] = useState()
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "macbook",
      price: 1000,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 2,
      name: "macbook",
      price: 1000,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 3,
      name: "macbook",
      price: 1000,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
  ]);
  return (
    <div className="mx-4">
      <h1 className="p-1 txt">Mes Produits :</h1>
      <div className="grid grid-cols-1 gap-2 justify-center lil:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <Link 
          to="/addProduct"
          className="flex w-full h-full pb-2 flex-col hover:cursor-pointer justify-center items-center bg-white shadow-md border-y-[1px] rounded-sm">
            <div className="rounded-full bg-slate-400 px-2 pt-1 pb-[6px] text-white font-semibold">
              +
            </div>
          </Link>
        </div>
        {products.map((product, index) => (
          <div>
            <div
              key={index}
              className="flex relative w-full pb-2 flex-col bg-white shadow-md border-y-[1px] rounded-sm gap-2"
            >
              <div className="flex w-full gap-2 absolute top-0 py-1 pr-1 justify-end items-center">
                <button>
                  <CloseIcon />
                </button>
                <button onClick={(e)=>{
                    setModel(true)
                    setName(product.name)
                    setPrice(product.price)
                    setId(product.id)
                }}>
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
      {
        model && 
        <div
        className="fixed top-0 left-0 w-full h-full bg-black z-10 bg-opacity-50 flex justify-center items-center"
      >
        <div className="bg-white p-4 w-96 h-96 flex flex-col gap-2 justify-center items-center rounded-md">
          <h1 className="title">Modify le produit :</h1>
          <input type="text" value={name} placeholder="Nom du produit" className="inputt" onChange={(e)=>{
            setName(e.target.value)
          }}/>
          <input type="number" value={price} placeholder="Prix du produit" onChange={(e)=>{
            setPrice(e.target.value)
          }} className="inputt" />

          <div className="flex w-full justify-center items-center gap-2 mt-1">
            <button 
            onClick={(e) => {
                e.preventDefault();
               
                    if(name === "" || price === 0){
                        alert("Veuillez remplir tous les champs");
                    }else{
                        // get the product with id = id and change its name and price
                        const newProducts = products.map((product) => {
                            if(product.id === id){
                                product.name = name;
                                product.price = price;
                            }
                            return product;
                        }
                        )
                        setProducts(newProducts);
                        setModel(false);
                    }
                
            }}
            className="bg-slate-400 text-white px-2 pt-1 pb-[6px] rounded-lg">
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
      }
    </div>
  );
};

export default Gestion;
