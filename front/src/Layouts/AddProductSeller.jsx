import { useRef, useState } from "react";
import { DownArrow } from "../public/Svgs";
import { addProduct } from "../public/Helpers";

const AddProductSeller = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [gender, setGender] = useState();
  const [taille, setTaille] = useState([]);
  const [showtaille, setShowtaille] = useState(false);
  const [showpointure, setShowpointure] = useState(false);
  const [pointures, setPointures] = useState([]);
  const [colors, setColors] = useState();
  const [promo, setPromo] = useState("non");
  const [promoprice, setPromoPrice] = useState();
  const [stock, setStock] = useState();
  const [pics, setPics] = useState([null, null, null, null]);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const refs = [ref1, ref2, ref3, ref4];

  return (
    <div className="w-full flex justify-center my-2 items-center">
      <div className="bg-white rounded-2xl p-5">
        <h1 className="title mb-2">Ajouter Produit :</h1>
        <form
          className="flex flex-col gap-2 justify-start items-start"
          method="post"
        >
          <div className="flex lil:flex-row flex-col gap-2 items-center justify-start">
            <input
              required
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="inputt"
              placeholder="Nom du produit"
            />
            <input
              type="number"
              name="price"
              required
              id="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              className="inputt"
              placeholder="Prix"
            />
          </div>
          <input
            type="text"
            name="description"
            required
            id="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="inputt"
            placeholder="Description"
          />
          <select
            className="inputt"
            required
            value={category}
            onChange={(e) => {
              setShowtaille(false);
              setShowpointure(false);
              setCategory(e.target.value);
            }}
          >
            <option value="" disabled selected hidden>
              category
            </option>
            <option value="vetements">vetements</option>
            <option value="chaussures">chaussures</option>
            <option value="electromenager">electromenager</option>
            <option value="electroniques">electroniques</option>
            <option value="autre">autre</option>
          </select>
          {category === "vetements" ? (
            <div className="w-full">
              <select
                required
                className="inputt pl-2"
                name="gender"
                id="gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option value="" hidden selected disabled>
                  gender
                </option>
                <option value="femme">femme</option>
                <option value="homme">homme</option>
              </select>

              <div
                onClick={(e) => {
                  setShowtaille(!showtaille);
                }}
                className="flex hover:cursor-pointer inputt mt-2 items-center justify-between"
              >
                <h1>Taille</h1>
                <DownArrow />
              </div>
              {showtaille && (
                <div className="m-1 shadow-lg bg-white">
                  {["S", "M", "L", "XL", "2XL", "3XL"].map((t, index) => (
                    <label className="labell" htmlFor={t}>
                      <input
                        type="checkbox"
                        checked={taille?.includes(t)}
                        onChange={(e) => {
                          if (taille?.includes(t)) {
                            setTaille(taille?.filter((taille) => taille !== t));
                          } else {
                            taille.push(t);
                            setTaille(taille);
                          }
                        }}
                      />
                      <h1 className="title">{t}</h1>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ) : category === "chaussures" ? (
            <div className="w-full">
              <select
                required
                name="gender"
                id="gender"
                className="inputt"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option value="" hidden selected disabled>
                  gender
                </option>
                <option value="femme">femme</option>
                <option value="homme">homme</option>
              </select>
              <div
                onClick={(e) => {
                  setShowpointure(!showpointure);
                }}
                className="flex hover:cursor-pointer inputt mt-2 items-center justify-between"
              >
                <h1>Pointures</h1>
                <DownArrow />
              </div>
              {showpointure && (
                <div className="m-1 shadow-lg bg-white">
                  {[36, 37, 38, 39, 40, 41, 42, 43, 44].map((p, index) => (
                    <label className="labell" key={index} htmlFor={`'${p}'`}>
                      <input
                        type="checkbox"
                        checked={pointures.includes(p)}
                        onChange={(e) => {
                          if (pointures.includes(p)) {
                            setPointures(pointures.filter((t) => t !== p));
                          } else {
                            pointures.push(p);
                            setPointures(pointures);
                          }
                        }}
                      />
                      <h1 className="title">{p}</h1>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ) : null}
          <input
            type="text"
            required
            name="colors"
            id="colors"
            onChange={(e) => {
              setColors(e.target.value);
            }}
            className="inputt"
            placeholder="Couleurs"
          />

          <div className="flex justify-start lil:flex-row flex-col w-full items-center gap-2">
            <select
              className="inputt"
              required
              onChange={(e) => {
                setPromo(e.target.value);
              }}
              name="promo"
              id="promo"
            >
              <option disabled value="" selected hidden>
                Promo
              </option>
              <option value="non">Non</option>
              <option value="oui">Oui</option>
            </select>
            {promo === "oui" && (
              <input
                required
                type="number"
                name="promoprice"
                id="promoprice"
                onChange={(e) => {
                  setPromoPrice(e.target.value);
                }}
                className="inputt"
                placeholder="promo percentage"
              />
            )}
          </div>
          <input
            type="number"
            required
            name="stock"
            id="stock"
            onChange={(e) => {
              setStock(e.target.value);
            }}
            className="inputt"
            placeholder="Stock"
          />

          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-full">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  refs[i - 1].current.click();
                }}
                className="inputt"
              >
                ajouter image {i}
              </button>
              <input
                type="file"
                required
                hidden
                name={`pic${i - 1}`}
                id={`pic${i - 1}`}
                ref={refs[i - 1]}
                onChange={(e) => {
                  const file = e.target.files[0];
                  let temp = pics;
                  temp[i - 1] = file;
                  setPics(temp);
                  console.log(pics);
                }}
                className="inputt"
                placeholder={`pic ${i}`}
              />
            </div>
          ))}
          <button
            onClick={(e) => {
              addProduct(
                e,
                name,
                description,
                price,
                promo,
                promoprice,
                stock,
                [colors],
                category === "vetements"
                  ? taille
                  : category === "chaussures"
                  ? pointures
                  : null,
                category,
                category === "vetements" || category === "chaussures"
                  ? gender
                  : null,
                pics
              );
            }}
            className="bg-black text-white pt-1 pb-[6px] w-full rounded-xl"
          >
            ajouter le produit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductSeller;
