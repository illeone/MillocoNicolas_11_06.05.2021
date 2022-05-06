import { useParams, Navigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import Tags from "../components/Tags";
import data from "../Data/data";
import Collapse from '../components/Collapse';
// import axios from 'axios';
// import Collapse from '../components/Collapse';
// import Thumbnail from '../components/Thumbnail';
// import dataList from "../Data/data";


const Housing = () => {

    const { id } = useParams()
    const [selectedLogement, setSelectedLogement] = useState([])
    // let navigate = useNavigate();

    useEffect(() => {

        const dataLogement = data.filter((logement) => logement.id === id)[0]
        console.log(dataLogement)

        setSelectedLogement(dataLogement) 

        if (!dataLogement) {
            <Navigate to="/404"/>
          }

    }, [id])

    return (
        <div>
            
            <main className="">

                

              <div className="ensemble">

                <div>
                <h1 className="">{selectedLogement.title}</h1>
                <h2 className=""> {selectedLogement.location} </h2>



                <Tags tags={selectedLogement.tags} />
                </div>


                <div className="">
                     <span className="">{selectedLogement.host && selectedLogement.host.name}</span>
                     <img className="" src={selectedLogement.host && selectedLogement.host.picture} alt=""/>
                </div>
                <div>
                    {selectedLogement.rating}<span>/5 </span>
                </div>

              </div>

                <section className="">
                    <Collapse  title='Description' description={selectedLogement.description} />
                    <Collapse  title='Équipements' description={selectedLogement.equipments} />
                </section>

            </main>
            
        </div>
    )

}

export default Housing;

