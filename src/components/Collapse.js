import React, { useState } from "react";
import ArrowDown from '../assets/arrow_down.svg';

const Collapse = ({title, description, equipments}) => {
    /* Crée un Hook d'état */
    const [open, setOpen] = useState(false);

    return(
        <div className="dropdown">
            <div className="dropdown_header" onClick={() => setOpen(!open)} >
                {title}
               <img className={`fleche-dropdown ${open}`} alt="" src={ArrowDown} />               
            </div> 

            <div className={open ? "dropdown_description-parent show" : "dropdown_description-parent"}>
            {description ? <div className="dropdown_description">{description}</div> : <ul className="dropdown_list">{equipments}</ul>}
            </div>
        </div>
    );
}

export default Collapse;


    // if (open) {
    //     return stars.push(<img src={starFull} key={i} alt=""/>)
    //   } else {
    //     stars.push(<img src={starEmpty} key={i} alt="" />)
    //   }