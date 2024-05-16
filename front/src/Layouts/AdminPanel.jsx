import { useState } from "react";
import { FavIcon, ShopIcon } from "../public/Svgs";
import ReactStars from "react-stars";

const AdminPanel = () => {
  const [prodpromo, setProdpromo] = useState([
    //bring from database
    {
      id: 1,
      name: "macbook",
      pic: "../src/Pics/macbook.jpg",
      ispromo: true,
      promotion: 30,
      rating: 4.5,
      price: 100,
    },
    {
      id: 2,
      name: "makeup",
      pic: "../src/Pics/makeup.jpg",
      ispromo: true,
      promotion: 40,
      rating: 3.5,
      price: 200,
    },
    {
      id: 3,
      name: "macbook",
      pic: "../src/Pics/macbook.jpg",
      ispromo: true,
      promotion: 30,
      rating: 4.5,
      price: 100,
    },
    {
      id: 4,
      name: "macbook",
      pic: "../src/Pics/macbook.jpg",
      ispromo: true,
      promotion: 30,
      rating: 4.5,
      price: 100,
    },
    {
      id: 5,
      name: "macbook",
      pic: "../src/Pics/macbook.jpg",
      ispromo: true,
      promotion: 30,
      rating: 4.5,
      price: 100,
    },
    {
      id: 6,
      name: "makeup",
      pic: "../src/Pics/makeup.jpg",
      ispromo: true,
      promotion: 40,
      rating: 3.5,
      price: 200,
    },
    {
      id: 7,
      name: "macbook",
      pic: "../src/Pics/macbook.jpg",
      ispromo: true,
      promotion: 30,
      rating: 4.5,
      price: 100,
    },
    {
      id: 8,
      name: "macbook",
      pic: "../src/Pics/macbook.jpg",
      ispromo: true,
      promotion: 30,
      rating: 4.5,
      price: 100,
    },
    {
      id: 9,
      name: "macbook",
      pic: "../src/Pics/macbook.jpg",
      ispromo: true,
      promotion: 30,
      rating: 4.5,
      price: 100,
    },
    {
      id: 10,
      name: "makeup",
      pic: "../src/Pics/makeup.jpg",
      ispromo: true,
      promotion: 40,
      rating: 3.5,
      price: 200,
    },
    {
      id: 11,
      name: "macbook",
      pic: "../src/Pics/macbook.jpg",
      ispromo: true,
      promotion: 30,
      rating: 4.5,
      price: 100,
    },
    {
      id: 12,
      name: "macbook",
      pic: "../src/Pics/macbook.jpg",
      ispromo: true,
      promotion: 30,
      rating: 4.5,
      price: 100,
    },
  ]);
  const [bestprod, setBestprod] = useState([
    //bring from database
    {
      id: 1,
      name: "macbook",
      pic: "../src/Pics/macbook.jpg",
      ispromo: true,
      promotion: 30,
      rating: 4.5,
      price: 100,
    },
    {
      id: 2,
      name: "makeup",
      pic: "../src/Pics/makeup.jpg",
      ispromo: true,
      promotion: 40,
      rating: 3.5,
      price: 200,
    },
    {
      id: 3,
      name: "macbook",
      pic: "../src/Pics/macbook.jpg",
      ispromo: true,
      promotion: 30,
      rating: 4.5,
      price: 100,
    },
    {
      id: 4,
      name: "macbook",
      pic: "../src/Pics/macbook.jpg",
      ispromo: true,
      promotion: 30,
      rating: 4.5,
      price: 100,
    },
  ]);
  return (
    <div className="bg-white rounded-xl mx-5 p-3 w-calc(100% - 40px) mt-2">
      <h1 className="txt mb-2">Best Produits :</h1>

      <div className="grid w-full aa my-2 gap-2 md:grid-cols-5 smal:grid-cols-2 sm:grid-cols-3 smal:justify-between justify-center justify-items-center items-center overflow-scroll">
        {bestprod.map((product, index) => {
          if (product.ispromo === true) {
            return (
              <div className="w-full relative">
                <button
                  onClick={(e) => {
                    if (
                      window.confirm(
                        "are u sure u want to delete this product from popular ones !"
                      )
                    ) {
                      e.preventDefault();
                      //delete from database
                      setBestprod(
                        bestprod.filter((prod) => prod.id != product.id)
                      );
                    }
                  }}
                  className="absolute top-0 right-0 w-6 h-6 bg-opacity-20 rounded-tr-sm rounded-bl-sm bg-black shadow-md"
                >
                  <FavIcon color="#ffae00" />
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
                  <div className="flex flex-row mx-1 justify-between items-center">
                    <h1 className="text-base">{product.name}</h1>
                    <h1 className="title">
                      {product.price} DA
                      <span className="text-red-600 text-sm block text-end line-through">{`${parseInt(
                        product.price +
                          (product.promotion * product.price) /
                            (100 - product.promotion)
                      )} DA`}</span>
                    </h1>
                  </div>

                  <div className="flex flex-row mx-1 justify-between items-center">
                    <ReactStars
                      count={5}
                      size={20}
                      color2={"#ffd700"}
                      edit={false}
                      value={product.rating}
                    />
                    {`- ${product.promotion}%`}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      <h1 className="txt">Tout Les Produits en Promo :</h1>
      <div className="grid w-full aa my-2 gap-2 md:grid-cols-5 smal:grid-cols-2 sm:grid-cols-3 smal:justify-between justify-center justify-items-center items-center overflow-scroll">
        {prodpromo.map((product, index) => (
          <div className="w-full relative">
            <button
              onClick={(e) => {
                if (bestprod.includes(product)) {
                  if (
                    window.confirm(
                      "are u sure u want to delete this product from popular ones !"
                    )
                  ) {
                    e.preventDefault();
                    //delete from database
                    setBestprod(
                      bestprod.filter((prod) => prod.id !== product.id)
                    );
                  }
                } else {
                  if (
                    window.confirm(
                      "are u sure u want to add this product to popular ones !"
                    )
                  ) {
                    e.preventDefault();
                    // add product to best promo product database
                    setBestprod([...bestprod, product]);
                  }
                }
              }}
              className="absolute top-0 right-0 w-6 h-6 bg-opacity-20 rounded-tr-sm rounded-bl-sm bg-black shadow-md"
            >
              <FavIcon
                color={bestprod.includes(product) ? "#ffae00" : "#dee5e5a0"}
              />
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
              <div className="flex flex-row mx-1 justify-between items-center">
                <h1 className="text-base">{product.name}</h1>
                <h1 className="title">
                  {product.price} DA
                  <span className="text-red-600 text-sm block text-end line-through">{`${parseInt(
                    product.price +
                      (product.promotion * product.price) /
                        (100 - product.promotion)
                  )} DA`}</span>
                </h1>
              </div>

              <div className="flex flex-row mx-1 justify-between items-center">
                <ReactStars
                  count={5}
                  size={20}
                  color2={"#ffd700"}
                  edit={false}
                  value={product.rating}
                />
                {`- ${product.promotion}%`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
