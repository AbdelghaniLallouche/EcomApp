import Firstpage from "../Components/FirstPage";
import PopularCat from "../Components/PopularCat";
import PopularProducts from "../Components/PopularProducts";
import About from "../Components/About";
import Footer from "../Components/Footer";
const Homepage = () => {
    return ( 
        <div>
        <Firstpage />
        <PopularCat />
        <PopularProducts />
        <About />
        <Footer />
        </div>
     );
}
 
export default Homepage;