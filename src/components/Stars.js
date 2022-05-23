import starFull from '../assets/star.png';
import starEmpty from '../assets/star-empty.png';


/**
 * Afficher les étoiles de notation
 * @param {props} rating condition pour afficher les étoiles pleines et/ou vides
 * @returns {JSX} composant react
 */
const Stars = ({rating}) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img className="stars_full" src={starFull} key={i} alt=""/>)
      } else {
        stars.push(<img className="stars_empty" src={starEmpty} key={i} alt="" />)
      }
    }
  
  
    return (
      <div className='rating'>
        {stars}
      </div>
    );
  };

export default Stars;