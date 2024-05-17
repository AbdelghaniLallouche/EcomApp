import { useEffect, useState } from "react";
import { getAdminNotifications , acceptVendeur , refuserVendeur } from "../public/Helpers";

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getAdminNotifications(setNotifications)
  }, [notifications]);

  return (
    <div className="mx-5 my-3 w-calc(100% - 40px)">
      {notifications ? notifications?.length === 0 ? (
        <h1 className="txt">No notifications</h1>
      ) : (
        <div>
            <h1 className="txt mx-2 uppercase">ALL Notifications :</h1>
          {notifications.map((notification) => (
            <div
              key={notification?._id}
              className="flex lil:flex-row flex-col my-3 p-2 shadow-md bg-white border-[1px] rounded-3xl gap-8 w-full items-center justify-start"
            >
              <img
                className="object-cover h-20 w-20 rounded-full"
                src="../src/Pics/a.jpg"
                alt=""
              />
              <div>
                <h1 className="text-2xl font-bold">{`${notification?.nomSociete}`}</h1>
                <h1 className="text-lg font-semibold">{notification?.email}</h1>
                <h1 className="text-lg font-normal">{notification?.dateCreationCompte}</h1>
              </div>
              <div className="w-full lil:flex-1 lil:flex lil:justify-end lil:items-center">
                <div className="flex flex-col w-full gap-1 items-center justify-start lil:items-end lil:justify-center">
                  <button 
                  onClick={(e) => acceptVendeur(e,notification?._id,notification?.email,setNotifications,notifications)}
                  className="bg-green-600 pt-1 pb-[6px] px-7 lil:w-fit w-full rounded-3xl text-white font-semibold">
                    accept
                  </button>
                  <button 
                  onClick={(e) => refuserVendeur(e,notification?._id,setNotifications,notifications)}
                  className="bg-red-600 pt-1 pb-[6px] px-8 lil:w-fit w-full rounded-3xl text-white font-semibold">
                    reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="txt">No notifications</h1>
      )}
    </div>
  );
};

export default AdminNotifications;
