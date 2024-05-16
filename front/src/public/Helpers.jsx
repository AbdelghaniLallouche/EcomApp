import { jwtDecode } from "jwt-decode";

export const token = localStorage.getItem("token")
? localStorage.getItem("token")
: null; // get token from local storage
//decode token
export const decoded = token ? jwtDecode(token) : null;

export const User = 
decoded
  ? {
      id: decoded._id,
      name: decoded.nom,
      email: decoded.email,
      role:
        decoded.role === "client" ? 1 : decoded.role === "seller" ? 2 : 3, // 1 for costumer , 2 for vendeur , 3 for admin
    }
  : null;