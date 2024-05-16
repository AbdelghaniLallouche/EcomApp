import { useState } from "react";

const Payment = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [number, setNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [commune, setCommune] = useState("");
  const [livraison, setLivraison] = useState("");
  const [cart , setCart] = useState([
    {
        id: 1,
        name: "T-shirt",
        price: 2000,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1564053487103-1d8a7f8e6d0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        name: "Pantalon",
        price: 5000,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1564053487103-1d8a7f8e6d0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "Chaussure",
        price: 10000,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1564053487103-1d8a7f8e6d0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]);

  return (
    <div className="flex md:flex-row flex-col gap-4 mt-8 mx-8 justify-start items-center">
      <div className="w-full bg-white p-4">
        <h1 className=" text-xl font-bold pb-5">ADRESS CLIENT</h1>
        <div className="grid grid-cols-2 w-full gap-6 mt-1 justify-center items-center justify-items-center">
          <input
            type="text"
            placeholder="NOM*"
            className="inputt"
            value={nom}
            onChange={(e) => {
              setNom(e.target.value);
            }}
          />
          <input
            type="text"
            className="inputt"
            placeholder="PRENOM*"
            value={prenom}
            onChange={(e) => {
              setPrenom(e.target.value);
            }}
          />
          <input
            type="text"
            className="col-span-2 inputt"
            placeholder="NUMERO DE TELEPHONE*"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <input
            type="text"
            className="col-span-2 inputt"
            placeholder="CODE POSTAL*"
            value={zipcode}
            onChange={(e) => {
              setZipcode(e.target.value);
            }}
          />
          <input
            type="text"
            className="col-span-2 inputt"
            placeholder="ADRESSE*"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <input
            type="text"
            className="inputt"
            placeholder="WILAYA*"
            value={wilaya}
            onChange={(e) => {
              setWilaya(e.target.value);
            }}
          />
          <input
            type="text"
            className="inputt"
            placeholder="COMMUNE*"
            value={commune}
            onChange={(e) => {
              setCommune(e.target.value);
            }}
          />
        </div>
        <div>
          <h1 className="txt py-5">DÉTAILS DE LIVRAISON</h1>
          <div className="flex flex-row gap-2 items-center mb-2 justify-start">
            <input 
            type="radio"
            name="livraison"
            value="point"
            onChange={(e) => {
                setLivraison(e.target.value);
            }}
            />
            <div>
                <h1 className="font-semibold">Point retrait</h1>
                <p className="font-thin">{`(A partir de 250 DA)`}</p>
            </div>
            </div>

            <div className="flex flex-row gap-2 items-center justify-start">
            <input type="radio"
            name="livraison"
            value="domicile"
            onChange={(e) => {
                setLivraison(e.target.value);
            }} />
            <div>
                <h1 className="font-semibold">Livraison à domicile</h1>
                <p className="font-thin">{`(A partir de 500 DA)`}</p>
            </div>
            </div>
          
        </div>
      </div>


            <div className="w-full md:w-[300px]">
            <div className="p-4 bg-[#D9D9D9] w-full  flex flex-col gap-5 rounded-2xl my-6">
                <h1 className="txt uppercase">résumé du commande</h1>
                <div className="h-[1px] bg-black bg-opacity-50 w-full"></div>
                <div className="flex flex-row justify-between items-center">
                    <h1>Total Articles</h1>
                    <h1> 
                        {/* all the price */}
                        {`${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)} DA`}
                    </h1>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <h1>Frais de Livraison</h1>
                    <h1> 
                    1400 DA
                    </h1>
                </div>
                <div className="h-[1px] bg-black bg-opacity-50 w-full"></div>
                <div className="flex flex-row justify-between items-center">
                    <h1>Total</h1>
                    <h1> 
                        {`${cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + 1400} DA`}
                    </h1>
                </div>
            </div>
            <button className="text-white font-semibold bg-black px-8 text-sm rounded-3xl py-4 w-full md:w-[300px] uppercase mt-3 ">Confirmer la commande</button>
            </div>
    </div>
  );
};

export default Payment;