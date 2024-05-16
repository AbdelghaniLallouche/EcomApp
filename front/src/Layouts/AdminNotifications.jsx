import { useState } from "react";
const AdminNotifications = () => {
    
    const [notifications, setNotifications] = useState([
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
        <div className="mx-5 my-8 w-calc(100% - 40px)">
        
        {(notifications.length === 0) ? <h1 className="txt">No notifications</h1> : 
        <div>
            {notifications.map((notification) => (
                <div key={notification.id} className="flex lil:flex-row flex-col my-3  px-2 shadow-md bg-white border-[1px] rounded-3xl gap-8 w-full items-center justify-start">
                    <img
                        className="object-cover h-20 w-20 rounded-full"
                        src={notification.pic}
                        alt=""
                    />
                    <div>
                        <h1 className="text-2xl font-bold">{`${notification.nom} ${notification.prenom}`}</h1>
                        <h1 className="text-lg font-semibold">{notification.title}</h1>
                        <h1 className="text-lg font-normal">{notification.description}</h1>
                        <h1 className="text-lg font-normal">{notification.date}</h1>
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
 
export default AdminNotifications;