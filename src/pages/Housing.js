import React from 'react'
import { useParams, Navigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import Tags from "../components/Tags";
import Collapse from '../components/Collapse';
import Stars from '../components/Stars';
import Gallery from '../components/Gallery';
import axios from 'axios';



const Housing = () => {

    const { id } = useParams()
    const [selectedLogement, setSelectedLogement] = useState("")

    useEffect(() => {
        axios("../Data/data.json")
            .then((res) => {
                setSelectedLogement(res.data.find(value => value.id === {id}.id))
                // console.log(res.data)
                // console.log(id)
                // console.log(dataLogement)
                // console.log(selectedLogement)
            })
            
       
    }
    , [id]) 

    if (selectedLogement === undefined) {
        console.log(undefined)

        return <Navigate to="*"/>
       }

    return (
        <div>
            
            <main className="">

                <div className="ensemble">

                    <div className="">
                        {selectedLogement && <Gallery className="gallery_image" photos={selectedLogement.pictures} />}
                    </div>
                    <div className="details_logement">
                        <div className="">
                            {selectedLogement && <h1 className="title_logement">{selectedLogement.title}</h1>}
                            {selectedLogement && <h2 className="location_logement"> {selectedLogement.location} </h2>}
                            {selectedLogement && <Tags className="tags_logement" tags={selectedLogement.tags} />}
                        </div>

                        <div className="hostInfo">
                            <div className="host">
                                {selectedLogement && <span className="host_name">{selectedLogement.host.name}</span>}
                                {selectedLogement && <img className="host_picture" src={selectedLogement.host.picture} alt=""/>}
                            </div>
                            <div className="">
                                {selectedLogement && <Stars className="stars" rating={selectedLogement.rating} />}
                            </div>
                        </div>
                    </div>
                        


                    <div className="collapse_logement">
                        {selectedLogement && <Collapse className="col" title='Description' description={selectedLogement.description} />}
                        {selectedLogement && <Collapse className="col" title='Équipements' equipments={selectedLogement.equipments} />}
                    </div>

                </div>
            </main>     
        </div>
    )

}

export default Housing;

