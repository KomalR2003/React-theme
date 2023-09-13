import React, { useContext } from 'react';
import {themeContext} from '../context/themeContext'

const Posts = () => {
    const {theme, handleOnClick} = useContext(themeContext);
  return (
    <div>
        <h4>My Post with {theme}</h4>
        <button className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"} border`} onClick={handleOnClick}>
        {theme === "dark" ? "light" : "dark"}
        </button>
       
    </div>
  )
}

export default Posts