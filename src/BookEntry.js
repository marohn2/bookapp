import React from "react";

function BookEntry(props){
    return(
        <div className= "book">
            <div className="col">
                <img className= "book-img" src= {props.pic}></img>
            </div>
            <div classname = "col">
            <h4>{props.name}</h4>
            <p>Written by: {props.author}</p>
            <p>Genre: {props.genre}, Rating: {props.rating}</p>
            </div>
           
        </div>
    )
}

export default BookEntry;