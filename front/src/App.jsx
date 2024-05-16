import Homepage from "./Layouts/HomePage";
import Navbar from "./Components/NavBar";
import Profile from "./Layouts/Profile";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Card from "./Layouts/Card";
import Payment from "./Layouts/Payment";
import Product from "./Layouts/Product";
import Category from "./Layouts/Category";
import Search from "./Layouts/Search";
import Notifications from "./Layouts/Notifications";
import Login from "./Layouts/Loginn";
import InscriptionC from "./Layouts/inscriptionclient";
import InscriptionV from "./Layouts/inscriptionVendeur";
import ContactForm from "./Layouts/reclamation";
import AdminSection from "./Components/AdminSection";
import AdminProducts from "./Layouts/AdminProducts";
import AdminNotifications from "./Layouts/AdminNotifications";
import Commandes from "./Layouts/Commandes";
import Comments from "./Layouts/Comments";
import Reclamations from "./Layouts/Reclamations";
import Acceptations from "./Layouts/Acceptations";
import Gestion from "./Layouts/Gestion";
import AddProductSeller from "./Layouts/AddProductSeller";
import AdminPanel from "./Layouts/AdminPanel";
import AdminCategories from "./Layouts/AdminCategories";
// import AdminCategories from "./Layouts/AdminCategories";
// import AdminSearch from "./Layouts/AdminSearch";
// import AdminUsers from "./Layouts/AdminUsers";


function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/">
        <Route path="login" element={<Login />} />
        <Route path="inscriptionclient" element={<InscriptionC />} />
        <Route path="inscriptionVendeur" element={<InscriptionV />} />
        <Route path="/reclamation" element={<ContactForm />} />
        <Route path="/" element={<Navbar />}>
          <Route path="/admin" element={<AdminSection />} >
            <Route path="/admin" element={<Homepage />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/categories" element = {<AdminCategories />} />
            <Route path="/admin/profile" element={<Profile />} />
            <Route path="/admin/notifications" element={<AdminNotifications />} />
            <Route path="/admin/homepics" element = {<AdminPanel />} />
            {/* <Route path="/admin/search/:product" element={<AdminSearch />} />
            <Route path="/admin/users" element={<AdminUsers />} /> */}
          </Route>
          <Route index element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/commandes" element= {<Commandes/>} />
          <Route path="/gestion" element= {<Gestion/>} />
          <Route path="/addProduct" element = {<AddProductSeller />} />
          <Route path="/acceptations" element= {<Acceptations/>} />
          <Route path="/commentaires" element= {<Comments/>} />
          <Route path="/reclamations" element= {<Reclamations/>} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/search/:product" element={<Search />} />
          <Route path="/card" element={<Card />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
