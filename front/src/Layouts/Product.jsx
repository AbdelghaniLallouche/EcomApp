import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { useState } from "react";

const Product = () => {
    const [comment , setComment] = useState('')
    const { id } = useParams(); //id of product
    const [reviews , setReviews] = useState([
      {
        review_id : 1,
        costumer_id : 1,
        nom : "name",
        prenom : "prenom",
        pic : "../src/Pics/a.jpg",
        review : "good quality",
      },
      {
        review_id : 2,
        costumer_id : 2,
        nom : "name",
        prenom : "prenom",
        pic : "../src/Pics/a.jpg",
        review : "good quality", 
      },
    ]) 

    const [product, setProduct] = useState({
    name: "product name",
    price: 2000,
    description: "product description",
    rating: 4.5,
    reviews: 200,
    taille : ["S","M","L","XL"],
    images : ["../src/Pics/y.jpg","../src/Pics/d.jpg","../src/Pics/b.jpg" , "../src/Pics/c.jpg"]
    }); //product object

    const [quantity, setQuantity] = useState(1); //quantity of product

  return (
    /*w-full flex md:flex-row flex-col gap-8 justify-start items-center */
  <div className="mx-8 mt-8 w-[100% - 32px] flex md:flex-row flex-col gap-8 items-start justify-start bg-white p-4 shadow-lg border-y-[1px]">



    {/* div for images */}
    <div className="w-full flex flex-col gap-2 justify-start items-start">
    <div className="w-full gg:h-[470px] h-[300px] grid grid-cols-2 gg:grid-cols-3 gg:grid-rows-3 gap-4 justify-start items-center">
        {
          product.images.map((image,index)=>{
            if(index === 1){
              return <img src={image} className="gg:col-span-2 w-full h-full object-cover gg:row-span-3"/>
            }
            else{
            return <div className="hover:cursor-pointer w-full h-full" onClick={()=>{
              // change the index of this image to index 1
              let temp = product.images[1]
              product.images[1] = product.images[index]
              product.images[index] = temp
              setProduct({...product})
            }}><img src={image} className="h-full w-full object-cover" alt=""/></div>}}
          )}
    </div>
    <div className="w-full flex mt-3 flex-col gap-2">
      <h1 className="txt text-center">Avis des Clients</h1>
      <div className="h-[1px] bg-black w-full"></div>
      <div className="flex flex-col gap-2 items-start justify-start">{
        reviews.map((review)=>(
          <div className="flex gap-[5px] shadow-md w-full p-2 rounded-md items-start bg-gray-400 bg-opacity-10">
            <img src={review.pic} className="w-[50px] h-[50px] rounded-full object-cover" alt=""/>
            <div className="flex flex-col px-1">
              <h1 className="title uppercase">{`${review.nom} ${review.prenom}`}</h1>
              <p className="text-sm text-[#474747]">{review.review}</p>
            </div>
          </div>
        ))
      }
      </div>
      <input type="text" className="inputt" placeholder="ajouter un commentaire" value={comment} onChange={(e)=>{
        setComment(e.target.value)
      }}
      />
      <button 
      onClick={(e)=>{
        // post request to backend
        //e.preventDefault()

        setReviews([...reviews , {
          review_id : reviews.length + 1,
          costumer_id : 1,
          nom : "name",
          prenom : "prenom",
          pic : "../src/Pics/a.jpg",
          review : comment,
        }])
        setComment('')
      }}
      className="bg-black text-white pt-1 pb-2 rounded-lg text-lg w-full uppercase">Poster</button>

    </div>
    </div>



    {/* div for product details */}
    <div className="w-full justify-between h-[550px] items-start flex flex-col gap-16 mt-8">
      <div className="w-full flex flex-col gap-8">
        <h1 className="text-xl font-semibold uppercase text-wrap">{product.name}</h1>
        
        <div className="flex items-center justify-start gap-2">
        <ReactStars
              count={5}
              size={20}
              color2={"#ffd700"}
              edit={false}
              value={product.rating}
            />
          <p>{`(${product.reviews})`}</p>
        </div>
        <h1 className="text-xl font-semibold">{product.price} DA</h1>        
        <p className="text-sm">{product.description}</p>
      </div>

      <div className="w-full flex flex-col gap-4">
        <h1 className="text-lg uppercase font-semibold">Options disponibles</h1>
        <div className="flex gap-4">
          {product.taille.map((taille) => (
            <div className="bg-gray-200 pt-1 pb-2 px-[10px] border-[1px] border-black border-opacity-50">{taille}</div>
          ))}
        </div>
      </div>
      <div className="w-full flex gap-8 items-center ">
      <div className="flex flex-row bg-gray-500 bg-opacity-60 gap-4 rounded-3xl items-center px-4 h-8 ">
                <button onClick={()=>{
                    setQuantity(quantity + 1)
                 }} className="title">+</button>
                <h1>{quantity}</h1>
                <button 
                onClick={()=>{
                    setQuantity(Math.max(1, quantity - 1))
                  }}
                className="title">-</button>
              </div>
        <button className="uppercase text-white w-[300px] bg-black rounded-3xl py-4 ">Ajouter au panier</button>
      </div>
    </div>

  </div> );
};

export default Product;
