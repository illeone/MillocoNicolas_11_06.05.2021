/**
 * Afficher les vignettes des logements
 * @param {props} Thumbnail charge les vignettes
 * @param {string} id recupère l'id du logement
 * @param {string} image photo de couverture du logement
 * @param {string} title titre du logement
 * @returns {JSX} composant react
 */
const Thumbnail = ({id, image, title}) => {
    return(
        <div className="thumbnail_bloc" id={id}>
            <img className="thumbnail" src={image} alt=""/>
            <span className="thumbnail_title">{title}</span>
        </div>
    );
}

export default Thumbnail;