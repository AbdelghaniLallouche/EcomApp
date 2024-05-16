import { useState } from "react";
const Commandes = () => {
    const [commandes, setCommandes] = useState([
        {
            id: 1,
            title: "New Order",
            description: "You have received a new order.",
            date: "2021-09-01",
            nom : "Sarah",
            prenom : "Smith",
            pic : "../src/Pics/a.jpg",
        },
        {
            id: 2,
            title: "New Order",
            description: "You have received a new order.",
            date: "2021-09-01",
            nom : "Sarah",
            prenom : "Smith",
            pic : "../src/Pics/a.jpg",
        },
        {
            id: 3,
            title: "New Order",
            description: "You have received a new order.",
            date: "2021-09-01",
            nom : "Sarah",
            prenom : "Smith",
            pic : "../src/Pics/a.jpg",
        },


    ]);
    
    return ( 
        <div className="mx-5 w-calc(100% - 40px)">
            <h1 className="txt p-1">Listes des Commandes :</h1>
        
        {(commandes.length === 0) ? <h1 className="txt">No commandes :</h1> : 
        <div>
            {commandes.map((command) => (
                <div key={command.id} className="flex lil:flex-row flex-col my-1 py-1 px-2 shadow-md bg-white border-[1px] rounded-xl gap-8 w-full items-center justify-start">
                    <img
                        className="object-cover h-20 w-20 rounded-full"
                        src={command.pic}
                        alt=""
                    />
                    <div>
                        <h1 className="text-2xl font-bold">{`${command.nom} ${command.prenom}`}</h1>
                        <h1 className="text-lg font-semibold">{command.title}</h1>
                        <h1 className="text-lg font-normal">{command.description}</h1>
                        <h1 className="text-lg font-normal">{command.date}</h1>
                    </div>
                    <div className="w-full lil:flex-1 lil:flex lil:justify-end lil:items-center">
                        <div className="flex flex-col w-full gap-1 items-center justify-start lil:items-end lil:justify-center">
                            <button className="bg-green-600 pt-1 pb-[6px] px-7 lil:w-fit w-full rounded-3xl text-white font-semibold">accept</button>
                            <button className="bg-red-600 pt-1 pb-[6px] px-8 lil:w-fit w-full rounded-3xl text-white font-semibold">reject</button>

                        </div>
                    </div>
                </div>
            ))}
        </div>
        }

        </div>
     );
}
 
export default Commandes;