import React, { useState } from 'react';
import ListFav from '../../components/ListFav';
import './AddFavorite.css';
const AddFavorite = (props)=>{
    const [favorites,setFavorites] = useState(localStorage.getItem('favorites')?JSON.parse(localStorage.getItem('favorites')):[]);
    const addToFavorite = (data)=>{
        const newList = [...favorites,data];
        setFavorites(newList);
        localStorage.setItem('favorites',JSON.stringify(newList));
    }
    const removeFavorite=(data)=>{
        const newList = favorites.filter(d=>d.id!=data.id);
        setFavorites(newList);
        localStorage.setItem('favorites',JSON.stringify(newList));
    }
    return(<div>
        <ListFav data={favorites} removeFavorite={removeFavorite} addToFavorite={addToFavorite} favorites={favorites}/>
    </div>)
}
export default AddFavorite;