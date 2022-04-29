import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
// import Tags from "../components/Tags";
import axios from 'axios';
// import dataList from "../Data/data";


const Housing = () => {
    const { id } = useParams();
    const [ data, setData] = useState ([])
    useEffect(() => {
        axios("../Data/data.json")
            .then((res) => setData(res.data))
        // const test = data.filter(value => value.id === {id}.id);
        // console.log(test)
             
    }
    , []);

    const test = data.filter(value => value.id === {id}.id);
        console.log(test)

    

    return(
        <div className="">
            <ul>
                {test.map((e, index) => (
                    <li key={index}>{e.id}<br/>{e.title}</li>
             ))}
            </ul>   
        </div>         
    )
};


export default Housing;