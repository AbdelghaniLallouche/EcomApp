import { useState } from "react";
import ReactStars from "react-stars";
import { ShopIcon , FavIcon } from "../public/Svgs";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const [model, setModel] = useState(false);
  const [product, setProduct] = useState({ id : null , 
    name : "",
    price : 0,
    rating : 0,
    pic : ""
}); // {name: "", price: 0, ...
  const [products, setProducts] = useState([
    //get from database
    {
      id: 1,
      name: "Produit 1",
      price: 100,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 2,
      name: "Produit 2",
      price: 200,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 3,
      name: "Produit 3",
      price: 300,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 4,
      name: "Produit 4",
      price: 400,
      rating: 3,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 5,
      name: "Produit 5",
      price: 500,
      rating: 5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 1,
      name: "Produit 1",
      price: 100,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 2,
      name: "Produit 2",
      price: 200,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 3,
      name: "Produit 3",
      price: 300,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 4,
      name: "Produit 4",
      price: 400,
      rating: 3,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 5,
      name: "Produit 5",
      price: 500,
      rating: 5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 1,
      name: "Produit 1",
      price: 100,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 2,
      name: "Produit 2",
      price: 200,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 3,
      name: "Produit 3",
      price: 300,
      rating: 4.5,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 4,
      name: "Produit 4",
      price: 400,
      rating: 3,
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 5,
      name: "Produit 5",
      price: 500,
      rating: 5,
      pic: "../src/Pics/macbook.jpg",
    },
  ]);

  const [popularprod , setPopularProd] = useState([
    //get from database
    {
    id : 1,
    name : "Produit 1",
    price : 100,
    rating : 4.5,
    pic : "../src/Pics/macbook.jpg"
  },
  {
    id : 2,
    name : "Produit 1",
    price : 100,
    rating : 4.5,
    pic : "../src/Pics/macbook.jpg"
  },
  {
    id : 3,
    name : "Produit 1",
    price : 100,
    rating : 4.5,
    pic : "../src/Pics/macbook.jpg"
  },
  {
    id : 4,
    name : "Produit 1",
    price : 100,
    rating : 4.5,
    pic : "../src/Pics/macbook.jpg"
  },
  {
    id : 5,
    name : "Produit 1",
    price : 100,
    rating : 4.5,
    pic : "../src/Pics/macbook.jpg"
  }
]
);

  return (
    <div className="mx-8 my-8 relative w-calc(100% - 32px)">
      <h1 className="title">Produits Populaires :</h1>
      <div className="grid w-full aa my-2 gap-4 md:grid-cols-5 smal:grid-cols-2 sm:grid-cols-3 smal:justify-between justify-center justify-items-center items-center overflow-scroll">
        
        {popularprod.map((product, index) => (
          <div className="w-full relative">
            <button 
            onClick={(e)=>{
              if(window.confirm("are u sure u want to delete this product from popular ones !")){
                e.preventDefault()
                //delete from database
                setPopularProd(popularprod.filter((prod)=>prod.id !== product.id))
              }
            }}
            className="absolute top-0 right-0 w-6 h-6 bg-opacity-20 rounded-tr-sm rounded-bl-sm bg-black shadow-md">
            <FavIcon color="#ffae00" />
            </button>
            <div
              key={index}
              className="flex w-full pb-2 flex-col bg-white shadow-md border-y-[1px] rounded-sm gap-2"
            >
              <img
                className="bg-cover w-full h-40 rounded-sm "
                src={product.pic}
                alt=""
              />
              <div className="flex flex-row mx-3 my-3 justify-between items-center">
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

      <h1 className="title">Tout Les Produits :</h1>
      <div className="grid w-full aa my-2 gap-4 md:grid-cols-5 smal:grid-cols-2 sm:grid-cols-3 smal:justify-between justify-center justify-items-center items-center overflow-scroll">
        {products.map((product, index) => (
          <div className="w-full relative" >
            <button 
            onClick={(e)=>{
              if(popularprod.includes(product)){
                if(window.confirm("are u sure u want to delete this product from popular ones !")){
                  e.preventDefault()
                  //delete from database
                  setPopularProd(popularprod.filter((prod)=>prod.id !== product.id))
                }
              }else{
                if(window.confirm("are u sure u want to add this product to popular ones !")){
                e.preventDefault()
                // add product to popular product database
                setPopularProd([...popularprod , product])
                }
              }
             
            }}
            className="absolute top-0 right-0 w-6 h-6 bg-opacity-20 rounded-tr-sm rounded-bl-sm bg-black shadow-md">
            <FavIcon color={popularprod.includes(product) ? "#ffae00" : "#dee5e5a0"} />
            </button>
            <div
              key={index}
              className="flex w-full pb-2 flex-col bg-white shadow-md border-y-[1px] rounded-sm gap-2"
            >
              <img
                className="bg-cover w-full h-40 rounded-sm"
                src={product.pic}
                alt=""
              />
              <div className="flex flex-row mx-3 my-3 justify-between items-center">
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
    </div>
  );
};

export default AdminProducts;
