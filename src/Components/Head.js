import React from "react"
import { Link } from "react-router-dom";

const Head = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };

    
    return(
        <div>
          <h2>  <Link to="/" style = {myStyle} > Home</Link> 
                <Link to="/contact" style = {myStyle} >Contact </Link> 
                <Link to="/student" style = {myStyle} >Student </Link> 
          </h2>   

         </div>
    )
}
export default Head;
