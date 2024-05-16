import { Link } from "react-router-dom";
import { User } from "../public/Helpers";
const Popularcat = () => {
  const user = User;

  const categories = [
    { id: 1, name: "Femmes", img: "./src/Pics/femme.png" },
    { id: 2, name: "Hommes", img: "./src/Pics/homme.jpg" },
    { id: 3, name: "Électronique", img: "./src/Pics/macbook.jpg" },
    { id: 4, name: "Electroménager", img: "./src/Pics/electromenage.jpg" },
  ];
  return (
    <div className="mx-4 w-calc(100% - 32px)">
      <h1 className="title">Categories Populaires :</h1>
      <div className="grid aa my-2 sm:grid-cols-5 grid-cols-2 smal:grid-cols-3 gap-y-4 justify-between items-center overflow-scroll">
        {user?.role === 3 && (
          <div className="flex flex-col items-center gap-2"><Link
            to="/admin/categories"
            className="shadow-lg hover:cursor-pointer flex justify-center items-center bg-white w-24 h-24 md:w-32 md:h-32 rounded-full"
          >
            <div className="rounded-full px-2 bg-slate-500 text-white font-bold bg-opacity-70 pt-1 pb-[6px]">
              +
            </div>
          </Link>
          </div>
        )}
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <Link
              to={
                user?.role === 3
                  ? `/admin/category/${category.id}`
                  : `/category/${category.id}`
              }
            >
              <img
                className="bg-cover shadow-lg object-cover w-24 h-24 md:w-32 md:h-32 rounded-full"
                src={category.img}
                alt=""
              />
            </Link>
            <h1 className="md:title text-sm font-semibold text-center text-wrap">
              {category.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popularcat;
