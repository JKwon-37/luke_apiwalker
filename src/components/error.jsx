import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    const backButton = (e) => {
        e.preventDefault();
        navigate(-1);
    }

  return (
    <div>
        <h1>ERROR 404</h1>
        <img src={'https://www.belloflostsouls.net/wp-content/uploads/2022/02/NotTheDroids.png'} alt={'404'}></img>
        <form onSubmit={backButton}>
            <button>Back</button>
        </form>
    </div>
  )
}

export default Error