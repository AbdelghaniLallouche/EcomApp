import { useState } from "react";

const AdminCategories = () => {
  const [model, setModel] = useState(false);
  const [popularCat, setPopularCat] = useState([
    //bring them from database
    { id: 1, name: "Femmes", pic: "../src/Pics/femme.png" },
    { id: 2, name: "Hommes", pic: "../src/Pics/homme.jpg" },
    { id: 3, name: "Beauté & Santé", pic: "../src/Pics/makeup.jpg" },
    { id: 4, name: "Électronique", pic: "../src/Pics/macbook.jpg" },
    { id: 5, name: "Electroménager", pic: "../src/Pics/electromenage.jpg" },
  ]);
  const [cats , setCats] = useState([])
  const [newCat, setNewCat] = useState();
  const [categories, setCategories] = useState([
    //bring them from database too
    {
      id: 9,
      name: "Category 1",
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 8,
      name: "Category 2",
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 7,
      name: "Category 3",
      pic: "../src/Pics/macbook.jpg",
    },
    {
      id: 6,
      name: "Category 4",
      pic: "../src/Pics/macbook.jpg",
    },
    { id: 1, name: "Femmes", pic: "../src/Pics/femme.png" },
    { id: 2, name: "Hommes", pic: "../src/Pics/homme.jpg" },
    { id: 3, name: "Beauté & Santé", pic: "../src/Pics/makeup.jpg" },
    { id: 4, name: "Électronique", pic: "../src/Pics/macbook.jpg" },
    { id: 5, name: "Electroménager", pic: "../src/Pics/electromenage.jpg" },
  ]);
  return (
    <div className="mx-4 relative w-calc(100% - 32px)">
      <h1 className="title">Categories Populaires :</h1>
      <div className="grid aa my-2 sm:grid-cols-5 grid-cols-2 smal:grid-cols-3 gap-y-4 justify-between items-center overflow-scroll">
        <div className="flex justify-center items-center w-full">
          <div
            onClick={(e) => {
              setModel(true);
            }}
            className="shadow-lg hover:cursor-pointer self-center flex justify-center
          items-center bg-white w-24 h-24 md:w-32 md:h-32 rounded-full"
          >
            <div className="rounded-full px-2 bg-slate-500 text-white font-bold bg-opacity-70 pt-1 pb-[6px]">
              +
            </div>
          </div>
        </div>

        {popularCat.map((category, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              className="bg-cover shadow-lg object-cover w-24 h-24 md:w-32 md:h-32 rounded-full"
              src={category.pic}
              alt=""
            />
            <h1 className="md:title text-sm font-semibold text-center text-wrap">
              {category.name}
            </h1>
          </div>
        ))}
      </div>
      <h1 className="title">All Categories :</h1>
      <div className="grid aa my-2 sm:grid-cols-5 grid-cols-2 smal:grid-cols-3 gap-y-4 justify-between items-center overflow-scroll">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              className="bg-cover shadow-lg object-cover w-24 h-24 md:w-32 md:h-32 rounded-full"
              src={category.pic}
              alt=""
            />
            <h1 className="md:title text-sm font-semibold text-center text-wrap">
              {category.name}
            </h1>
          </div>
        ))}
      </div>
      {model && (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-10 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 w-96  flex flex-col gap-2 justify-center relative items-center rounded-md">
            <h1 className="title">Add Category :</h1>

            <select
              onChange={(e) => {
                setNewCat(JSON.parse(e.target.value));
              }}
              className="inputt"
            >
              <option value="" disabled selected hidden>
                category
              </option>
              {
                //new array of categories which are in categories but not in popularCat
                categories.map((cat) => {
                  if (
                    popularCat.find((popular) => popular.id === cat.id) ===
                    undefined
                  ) {
                    return (
                      <option key={cat.id} value={JSON.stringify(cat)}>
                        {cat.name}
                      </option>
                    );
                  }
                })
                

              }
            </select>

            <div className="flex gap-2 justify-start w-full items-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  //add newCat to popularCat database
                  setPopularCat([...popularCat, newCat]);
                  setNewCat(null);
                    setModel(false);
                }}
                className="btn"
              >
                Add
              </button>
              <button
                onClick={(e) => {
                  setNewCat(null);
                  setModel(false);
                }}
                className="btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCategories;
