import { useParams } from "react-router-dom";

const Search = () => {
    const {product} = useParams() //name of product
    //post request to get the product from the backend
    return ( <div>
        <h1>Search for {product}</h1>
    </div> );
}
 
export default Search;