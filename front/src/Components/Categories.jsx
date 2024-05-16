import { Category, DownArrow } from "../public/Svgs";
import { useState } from "react";
import { Link } from "react-router-dom";
const Categories = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [category, setCategoty] = useState("");
  const categories = [
    { id :1, name: "Femme", icon: "FemmeIcon" },
    { id :2,name: "Homme", icon: "HommeIcon" },
    { id :3,name: "Electromenager", icon: "ElectromenagerIcon" },
    { id :4,name: "Eléctroniques", icon: "Eléctroniques" },
    { id :5,name: "Autres", icon: "autres" },
  ];
  return (
    <div className="mt-2 mb-1">
      <button
        onClick={() => {
          setIsHidden(!isHidden);
        }}
        className="flex gap-2 bg-[#D9D9D9] rounded-lg px-2 py-1 flex-row"
      >
        <Category />
        <p>Catégories</p>
        <DownArrow />
      </button>
      {!isHidden && (
        <div className="bg-white absolute z-20 py-2 shadow-lg w-fit flex flex-col gap-2 justify-start items-start">
            {categories.map((cat, index) => (
                //  if the category is clicked, set the category to the name of the category and dont navigate to any page (just filtrage)
                <button
                key={index}
                onClick={() => {
                    setCategoty(cat.name);
                    setIsHidden(true);
                }}
                className="flex hover:bg-gray-400 hover:bg-opacity-20 w-full gap-2 px-2 pr-10 py-1 flex-row"
                >
                <Category />
                <p>{cat.name}</p>
                </button>

                // if the category is clicked, navigate to the page of the category
                // <Link to={`/category/${cat.id}`} key={index} className="flex hover:bg-gray-400 hover:bg-opacity-20 w-full gap-2 px-2 pr-10 py-1 flex-row">
                //     <Category />
                //     <p>{cat.name}</p>
                // </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
