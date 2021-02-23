import React from 'react';
import ListItem from './ListItem';
import './ListFav.css';
const ListFav = (props)=>{
    const ListItems = props.data.map((d,i)=>{
        return <ListItem key={d.id} data={d} addToFavorite = {()=>props.addToFavorite(d)} removeFavorite = {()=>props.removeFavorite(d)} favorite = {props.favorites.findIndex((elem)=>elem.id==d.id)!=-1}/>
    })
    return <ul className="list-fav">
        {ListItems}
    </ul>
    
}
export default ListFav;