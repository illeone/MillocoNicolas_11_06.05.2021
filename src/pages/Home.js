import Thumbnail from "../components/Thumbnail";
import ListAccommodation from "../Data/data";
import { NavLink } from "react-router-dom";



const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <div className="banner_img_bloc">
                    <img className="banner_img" src="img_home.jpg" alt="front de mer" /> 
                </div>
                <h1 className="banner_title">
                    <span className="txt">Chez</span>
                    <span className="txt"> vous</span>
                    <span className="txt">, </span>
                    <span className="txt"> partout </span>
                    <span className="txt"> et </span>
                    <span className="txt"> ailleurs</span>
                </h1>  
            </div> 
            <div className="thumbnail_section">
                {ListAccommodation.map((accommodation) => 
                <NavLink key={accommodation.id} to={"/Housing/"+accommodation.id}>
                    <Thumbnail title={accommodation.title}image={accommodation.cover}/>
                </NavLink>
                )}
            </div>
        </div>       
    );
};


export default Home;