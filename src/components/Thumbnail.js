const Thumbnail = ({id, image, title}) => {
    return(
        <div className="thumbnail_bloc" id={id}>
            <img className="thumbnail" src={image} alt=""/>
            <span className="thumbnail_title">{title}</span>
        </div>
    );
}

export default Thumbnail;