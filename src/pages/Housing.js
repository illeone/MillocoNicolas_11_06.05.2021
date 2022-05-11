import { useParams, Navigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import Tags from "../components/Tags";
// import data from "../Data/data";
import Collapse from '../components/Collapse';
import Stars from '../components/Stars';
import Gallery from '../components/Gallery';
import axios from 'axios';



const Housing = () => {

    const { id } = useParams()
    const [selectedLogement, setSelectedLogement] = useState(undefined)

    useEffect(() => {
        axios("../Data/data.json")
            .then((res) => {
                const selectedLogement = res.data.find(value => value.id === {id}.id)
                // console.log(res.data)
                // console.log(id)
                // console.log(dataLogement)
                // console.log(selectedLogement)
                setSelectedLogement(selectedLogement)
            })
            if (!selectedLogement === undefined) {

                return <Navigate to="/about"/>
               }
       
    }
    , [id]) // eslint-disable-line react-hooks/exhaustive-deps



    // useEffect(() => {

    //     const dataLogement = data.filter((logement) => logement.id === id)[0]
    //     console.log(dataLogement)

    //     setSelectedLogement(dataLogement) 

    // }, [id])

    // if (!selectedLogement === undefined) {

    //    return <Navigate to="*"/>
    //   }

    return (
        <div>
            
            <main className="">

              <div className="ensemble">

                <div>
                    {selectedLogement && <h1 className="">{selectedLogement.title}</h1>}
                    {selectedLogement && <h2 className=""> {selectedLogement.location} </h2>}
                    {selectedLogement && <Tags tags={selectedLogement.tags} />}
                </div>

                <div>
                    {selectedLogement && <Gallery photos={selectedLogement.pictures} />}
                </div>

                <div className="">
                     {selectedLogement && <span className="">{selectedLogement.host.name}</span>}
                     {selectedLogement && <img className="" src={selectedLogement.host.picture} alt=""/>}
                </div>
                <div>
                    {selectedLogement && <Stars rating={selectedLogement.rating} />}
                </div>

              </div>

                <div className="">
                    {selectedLogement && <Collapse title='Description' description={selectedLogement.description} />}
                    {selectedLogement && <Collapse title='Équipements' equipments={selectedLogement.equipments} />}
                </div>

            </main>
            
        </div>
    )

}

export default Housing;

