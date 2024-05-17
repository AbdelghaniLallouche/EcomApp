import { jwtDecode } from "jwt-decode";
import { baseUrl } from "./Svgs";

export const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null; // get token from local storage
//decode token
export const decoded = token ? jwtDecode(token) : null;

export const User = decoded
  ? {
      id: decoded.id,
      name: decoded.nom,
      email: decoded.email,
      role: decoded.role === "client" ? 1 : decoded.role === "seller" ? 2 : 3, // 1 for costumer , 2 for vendeur , 3 for admin
    }
  : null;

export const getAdminNotifications = async (setNotifications) => {
  try {
    const response = await fetch(`${baseUrl}/getvendeurs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setNotifications(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const acceptVendeur = async (e, id, email, setNotifications, notifs) => {
  e.preventDefault();
  try {
    const response = await fetch(
      `${baseUrl}/vendeurs/approuver/${id}/${email}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (!data.ok) {
      alert(data.message);
    } else {
      const newNotifs = notifs.filter((notif) => notif._id !== id);
      setNotifications(newNotifs);
      alert(data.message);
    }
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export const refuserVendeur = async (e, id, setNotifications, notifs) => {
  e.preventDefault();
  try {
    const response = await fetch(`${baseUrl}/vendeurs/refuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!data.ok) {
      alert(data.message);
    } else {
      const newNotifs = notifs.filter((notif) => notif._id !== id);
      setNotifications(newNotifs);
      alert(data.message);
    }
  } catch (error) {
    alert(error);
  }
};

export const addProduct = async (
  e,
  nom,
  description,
  prix,
  promo,
  prixPromo,
  stock,
  couleurs,
  tailles,
  categorie,
  sousCategorie,
  images
) => {
  e.preventDefault();
  try {
    const formData = new FormData();
    formData.append("nom", nom);
    formData.append("description", description);
    formData.append("prix", prix);
    formData.append("promo", promo);
    formData.append("prixPromo", prixPromo);
    formData.append("stock", stock);
    formData.append("quantiteRestante", stock);
    formData.append("pourcentageAchat", 0);
    formData.append("couleurs", couleurs);
    formData.append(
      "tailles",
      categorie === "vetements"
        ? JSON.stringify(tailles)
        : categorie === "chaussures"
        ? JSON.stringify(tailles)
        : null
    );
    formData.append("categorie", categorie);
    formData.append(
      "sousCategorie",
      categorie === "vetements" || categorie === "chaussures"
        ? sousCategorie
        : null
    );
    formData.append("categorieCustom", null);
    formData.append("vendeurId", User.id);
    images.forEach((image, i) => {
      formData.append(`images`, image);
    });

    const response = await fetch(`${baseUrl}/produits/add`, {
      method: "POST",
      body: formData, // No need for headers, FormData sets them automatically
    });

    const data = await response.json();
    if (!data.ok) {
      alert(data.message);
    } else {
      console.log(data);
      alert("Produit ajouté avec succès");
    }
  } catch (error) {
    alert(error);
  }
};

export const updateProduct = async (
  e,
  id,
  nom,
  prix,
  promo,
  promoperc,
  colors,
  tailles,
  setProducts,
  products
) => {
  e.preventDefault();
  try {
    const res = await fetch(`${baseUrl}/produits/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nom,
        prix,
        promo,
        prixPromo: promoperc,
        tailles: tailles,
        couleurs: colors,
      }),
    });
    const data = await res.json();
    if (!data.ok) {
      alert(data.message);
    } else {
      alert(data.message);
      // update products
      const newProducts = products.map((product) => {
        if (product._id === id) {
          return {
            ...product,
            nom,
            prix,
            promo,
            prixPromo: promoperc,
            tailles: tailles,
            couleurs: colors,
          };
        }
        return product;
      });
      setProducts(newProducts);
    }
  } catch (err) {
    alert(err.message);
  }
};

export const deleteProduct = async (e, id, setProducts, products) => {
  e.preventDefault();
  try {
    const res = await fetch(`${baseUrl}/produits/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!data.ok) {
      alert(data.message);
    } else {
      const newProducts = products.filter((product) => product._id !== id);
      setProducts(newProducts);
      alert(data.message);
    }
  } catch (err) {
    alert(err.message);
  }
};

export const getSellerProducts = async (id, setProducts) => {
  try {
    const res = await fetch(`${baseUrl}/produits/userproducts/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!data.ok) {
      alert(data.message);
    } else {
      setProducts(data.products);
    }
  } catch (err) {
    alert(err.message);
  }
};
