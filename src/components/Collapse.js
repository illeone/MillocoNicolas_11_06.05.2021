import React, { useState } from "react";

const Collapse = ({title, description}) => {
    /* Crée un Hook d'état */
    const [open, setOpen] = useState(false);

    return(
        <div className="dropdown">
            <div className="dropdown_header" onClick={() => setOpen(!open)}>
                <div className="dropdown_title">{title}</div>
            </div>
            <div className="">
            {open && <div className="dropdown_description">{description}</div>}
            </div>
        </div>
    );
}

export default Collapse;