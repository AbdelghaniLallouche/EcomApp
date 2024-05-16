import { useState } from "react";
import { CloseIcon, EmailIcon, ProfileIcon } from "../public/Svgs";
const Reclamations = () => {
  const [model, setModel] = useState(false);
  const [reclamation, setReclamation] = useState();
  const [reclamations, setReclamations] = useState([
    {
      id: 1,
      nom: "Sarah",
      prenom: "Smith",
      email : "email@gmail.com",
      content: "bad quality",
      pic: "../src/Pics/a.jpg",
    },
    {
      id: 2,
      nom: "Sarah",
      prenom: "Smith",
      email : "email@gmail.com",
      content: "slow delivery",
      pic: "../src/Pics/a.jpg",
    },
    {
      id: 3,
      nom: "Sarah",
      prenom: "Smith",
      email : "email@gmail.com",
      content: "bad quality",
      pic: "../src/Pics/a.jpg",
    },
  ]);
  return (
    <div className="mx-5 relative w-calc(100% - 40px)">
      <h1 className="txt p-1">Reclamations :</h1>

      {reclamations.length === 0 ? (
        <h1 className="txt">Pas de reclamation :</h1>
      ) : (
        <div>
          {reclamations.map((reclamation) => (
            <div
              key={reclamation.id}
              onClick={(e) => {
                setReclamation(reclamation);
                setModel(true);
              }}
              className="flex flex-row hover:cursor-pointer my-1 py-1 px-2 shadow-md bg-white border-[1px] rounded-xl gap-4 w-full items-center justify-start"
            >
              <img
                className="object-cover h-10 w-10 lil:h-20 lil:w-20 rounded-full"
                src={reclamation.pic}
                alt=""
              />
              <div>
                <h1 className="lg:text-xl font-bold">{`${reclamation.nom} ${reclamation.prenom}`}</h1>
                <h1 className="text-sm lil:text-lg font-normal">
                  {reclamation.content}
                </h1>
              </div>
            </div>
          ))}
        </div>
      )}
      {model && (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-10 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 w-96 h-96 flex flex-col gap-2 justify-center relative items-center rounded-md">
            <button onClick={()=>{
              setModel(false)
            }} className="absolute top-1 right-1">
              <CloseIcon />
            </button>
            <h1 className="txt">Reclamation Details :</h1>
            <div className="relative w-full">
            <input type="text" className="inputtt" disabled value={`${reclamation.nom} ${reclamation.prenom}`} />
            <div className="absolute left-1 top-[6px]">
            <ProfileIcon />
            </div>
            </div>
            <div className="relative w-full">
            <input type="text" className="inputtt" disabled value={reclamation.email} />
            <div className="absolute left-1 top-[7px]">
            <EmailIcon color = "black"/>
            </div>
            </div>
            <textarea className="inputt" disabled value={reclamation.content} />
            </div>
        </div>
      )}
    </div>
  );
};

export default Reclamations;
