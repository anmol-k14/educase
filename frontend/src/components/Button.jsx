import React from 'react'
import { useNavigate } from 'react-router-dom'


const Button = ({name,color,fontcolor,navigateTo}) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(navigateTo);
    };

    return (
    <>
        <button 
        onClick={handleClick}
        style={{backgroundColor: color,color:fontcolor}}
        className= "w-full h-12 rounded-md cursor-pointer">
            {name}
        </button>
    </>
  )
}

export default Button