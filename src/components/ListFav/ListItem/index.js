import React from 'react';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ListItem.css';
const ListItem = (props)=>{
    const color = "#"+Math.floor(Math.random() * 0x1000000).toString(16)
    return(
        <li style={{borderColor:`${color}`}} className="bg-gray-300 m-4 pointer hover:shadow-lg px-1 py-2 rounded list-fav">
            <img src={props.data.image.medium}/>
            {props.data.name}
            {props.favorite?<FontAwesomeIcon style={{fontSize:"1.7rem"}} icon={faHeart} color="#ff002a" onClick={props.removeFavorite}/>:<FontAwesomeIcon color="white" style={{fontSize:"1.7rem"}} icon={faHeart}  onClick={props.addToFavorite}/>}
            
        </li>
    )
}
export default ListItem;