import { useState } from "react";
const Acceptations = () => {
    const [products , setProducts] = useState([
        {   id: 1,
            pic :"../src/Pics/macbook.jpg",
            title : "macbook",
            status : "refusé"
        },
        {   id: 2,
            pic :"../src/Pics/macbook.jpg",
            title : "macbook",
            status : "accepté"
        },
        {   id: 3,
            pic :"../src/Pics/macbook.jpg",
            title : "macbook",
            status : "en attente"
        },
        {   id: 4,
            pic :"../src/Pics/macbook.jpg",
            title : "macbook",
            status : "refusé"
        },
    ])
    return ( 
        <div className="mx-5 w-calc(100% - 40px)">
            <h1 className="p-1 txt">Acceptation & Refusion de votre produits :</h1>
            {products.length === 0 ? (
        <h1 className="txt">Pas de Produit :</h1>
      ) : (
        <div>
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-row my-1 py-1 px-2 shadow-md bg-white border-[1px] rounded-xl gap-4 w-full items-center justify-start"
            >
              <img
                className="object-cover h-10 w-10 lil:h-20 lil:w-20 rounded-full"
                src={product.pic}
                alt=""
              />
              <div className="flex flex-1 justify-between items-center">
                <h1 className="lg:text-xl font-bold">{`${product.title}`}</h1>
                <h1 className="text-sm font-semibold">{product.status}</h1>
              </div>
            </div>
          ))}
        </div>
      )}
        </div>
     );
}
 
export default Acceptations;