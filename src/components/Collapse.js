import React, { useState } from "react";
import ArrowDown from '../assets/arrow_down.svg';

const Collapse = ({title, description, equipments}) => {
    /* Créer un Hook d'état */
    const [open, setOpen] = useState(false);

    return(
        <div className="dropdown">
            <div className="dropdown_header" onClick={() => setOpen(!open)} >
                {title}
               <img className={`fleche-dropdown ${open}`} alt="" src={ArrowDown} />               
            </div> 

            <div className={open ? "dropdown_description-parent show" : "dropdown_description-parent"}>
            {description ? <div className="dropdown_description">{description}</div> 
                            : <div className=" dropdown_description bloc_list_equipments"> 
                                {equipments.map((equipments, index) => 
                                    <ul key={index} className="dropdown_list"><li>{equipments}</li></ul>)}
                              </div>}
            </div>
        </div>
    );
}

export default Collapse;