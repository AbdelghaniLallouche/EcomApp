import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Card = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "T-shirt",
      pic: "../src/Pics/a.jpg",
      price: 20,
      quantity: 1,
    },
    {
      id: 2,
      name: "Pantalon",
      pic: "../src/Pics/a.jpg",
      price: 30,
      quantity: 1,
    },
    {
      id: 3,
      name: "Chaussures",
      pic: "../src/Pics/a.jpg",
      price: 50,
      quantity: 1,
    },
  ]);
  return (
    <div className="mx-8 mt-8 ">
      <h1 className="txt mb-10 text-xl font-bold">Mon Panier</h1>
      <div className="w-full flex md:flex-row flex-col gap-8 justify-start items-center">
        <div className="md:w-[75%] w-full">
        <div className="sm:grid hidden w-full sm:justify-center sm:content-center sm:justify-items-center sm:items-center sm:grid-cols-5">
          <h1 className="title">Produit</h1>
          <h1 className="title">Prix</h1>
          <h1 className="title">Quantité</h1>
          <h1 className="title">Total</h1>
          <h1 className="title">Supprimer</h1>
          </div>
          <div className="bg-black h-[1px] my-2 w-full"></div>
          {cart.map((item) => (
            <div>
            <div
              key={item.id}
              className="sm:grid w-full sm:justify-center my-1 sm:content-center sm:justify-items-center sm:items-center sm:grid-cols-5
              flex flex-row justify-between items-center gap-2  bg-opacity-60 pr-2 rounded-xl
              "
            >
              <img src={item.pic} alt="pic" className="sm:w-20 sm:h-20 h-16 w-16 sm:rounded-none rounded-s-xl object-cover" />

              <h1>{item.price} DA</h1>
              <div className="flex flex-row bg-gray-500 bg-opacity-60 gap-3 rounded-3xl items-center px-2 pt-1 pb-2">
                <button onClick={()=>{
                    setCart(cart.map((cartItem)=>cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem))
                }} className="title">+</button>
                <h1>{item.quantity}</h1>
                <button 
                onClick={()=>{
                    // check if the quantity is not 0
                    if(item.quantity > 1){
                    setCart(cart.map((cartItem)=>cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem))
                    }else{
                        setCart(cart.filter((cartItem)=>cartItem.id !== item.id))
                    }
                  }}
                className="title">-</button>
              </div>
              
              <h1>{item.price * item.quantity}</h1>
              <button 
              onClick={()=>{
                  setCart(cart.filter((cartItem)=>cartItem.id !== item.id))
              }}
              className="sm:inline-block hidden rounded-full bg-gray-500 bg-opacity-60 text-white px-[9px] py-[2px]">X</button>
            </div>
            <div className="bg-black h-[1px] my-2 w-full"></div>
            </div>
            
          ))}
      </div>


          <div className="md:w-[25%] w-full flex flex-col justify-start items-center ">
            <div className="bg-[#D9D9D9] flex flex-col justify-start items-center gap-5 my-6 p-4 w-full rounded-2xl">
            <h1 className="text-xl font-bold uppercase">Résumé du Panier</h1>
            <div className="bg-black h-[1px] my-2 w-full"></div>
            <div className="flex flex-row justify-between items-center w-full">
                <h1>Sous-total</h1>
                <h1>{cart.reduce((acc, item)=> acc + item.price * item.quantity, 0)} DA</h1>
            </div>
            </div>
            <button
            onClick={()=>{
              // check if the cart is not empty
              // if not empty, send the cart to the backend
              // then redirect to the payment page
              if(cart.length > 0){
                navigate("/payment")
              }
              
              

            }}
            className="uppercase text-white w-full bg-black rounded-3xl py-4 ">
                Commander
            </button>
          </div>



      </div>
    </div>
  );
};

export default Card;
