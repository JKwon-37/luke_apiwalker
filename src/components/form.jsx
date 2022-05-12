import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const selectVal = [
    "people",
    "planets"
]

const Form = (props) => {
    const [category, setCategory] = useState(selectVal[0]);
    const [id, setId] = useState(1);
    const navigate = useNavigate();

    const selectHandler = (e) => {
        // console.log("click");
        e.preventDefault();
        navigate(`/${category}/${id}`)
    }
    return (
        // <p>Something</p>
        <form onSubmit={selectHandler}>
            <select value={category} onChange={ e => setCategory(e.target.value)}>
                {console.log(JSON.stringify(category))}
                {selectVal.map( (c, i) => <option key={i} value={c}>{c}</option>)}
            </select>
            <input type="number" value={id} min='1' onChange={ e => setId(e.target.value)}/>
            <button>Search</button>
        </form>
    )
}

export default Form;