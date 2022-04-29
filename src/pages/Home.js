import Thumbnail from "../components/Thumbnail";
import ListAccommodation from "../Data/data";
import { NavLink } from "react-router-dom";



const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <img className="banner_img" src="img_home.jpg" alt="front de mer" /> 
                <h1 className="banner_title">Chez vous, partout et ailleurs</h1>  
            </div> 
            <div className="">
                {ListAccommodation.map((accommodation) => 
                <NavLink key={accommodation.id} to={"/Housing/"+accommodation.id}>
                    <Thumbnail title={accommodation.title}image={accommodation.cover} />
                </NavLink>
                )}
            </div>
        </div>       
    );
};


export default Home;