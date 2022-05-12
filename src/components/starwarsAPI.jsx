import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const StarwarsAPI = (props) => {
    const [obj, setObj] = useState(null);
    const {what, id} = useParams();
    console.log(JSON.stringify(obj));

    useEffect( () => {
        axios.get(`https://swapi.dev/api/${what}/${id}`)
            .then(res => {
                // console.log(res.data);
                setObj(res.data);
            }).catch(err => console.log(err))

    }, [what, id])

    return (
        <div>
            {/* <h1>{JSON.stringify(obj)}</h1> */}
                { obj ?
                    <>
                    <h1>{what} is {obj.name}</h1>
                    <p style={{fontWeight: 'bold'}}>Height: {obj.height}</p>
                    <p style={{fontWeight: 'bold'}}>Mass: {obj.mass}</p>
                    <p style={{fontWeight: 'bold'}}>Hair Color: {obj.hair_color}</p>
                    <p style={{fontWeight: 'bold'}}>Skin Color: {obj.skin_color}</p>
                    </> : 'Loading...' 
                }
                {/* { obj ?
                    <>
                    <h1>{what} is {obj.name}</h1>
                    <p style={{fontWeight: 'bold'}}>Height: {obj.climate}</p>
                    <p style={{fontWeight: 'bold'}}>Mass: {obj.terrain}</p>
                    <p style={{fontWeight: 'bold'}}>Hair Color: {obj.surface_water}</p>
                    <p style={{fontWeight: 'bold'}}>Skin Color: {obj.population}</p>
                    </> : 'Loading...'
                } */}
                    
        </div>
    )
}

export default StarwarsAPI;