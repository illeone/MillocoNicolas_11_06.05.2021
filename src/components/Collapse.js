import React, { useState } from "react";

const Collapse = ({title, description, equipments}) => {
    /* Crée un Hook d'état */
    const [open, setOpen] = useState(false);

    return(
        <div className="dropdown">
            <div className="dropdown_header" onClick={() => setOpen(!open)}>
                <div className="dropdown_title">{title}</div>
            </div>
             {open && 
            <div className="">
                {description ? <p className="dropdown_description">{description}</p> : <ul className="dropdown_list">{equipments}</ul>} 
            </div>
            }
        </div>
    );
}

export default Collapse;


    // if (open) {
    //     return stars.push(<img src={starFull} key={i} alt=""/>)
    //   } else {
    //     stars.push(<img src={starEmpty} key={i} alt="" />)
    //   }