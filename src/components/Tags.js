/**
 * Afficher les tags
 * @param {props} tags tabbleau de tag
 * @returns {jsx} composant react
 */
function Tags({tags}) {

    return(
        <div className="tags">
        {
            tags.map(tag => {
            return (
            <p className="tag" key={tag}>{tag}</p>
             )
            })
        }
        {/* <span className="tag">{tags}</span> */}
    </div>
            
    );
}

export default Tags;