const Thumbnail = ({id, image, title}) => {
    return(
        <div className="" id={id}>
            <img className="" src={image} alt=""/>
            <div className=""></div>
            <span className="">{title}</span>
        </div>
    );
}

export default Thumbnail;