import React, { useEffect, useState } from 'react';
import ListFav from '../../components/ListFav';
import './Home.css';

const Home = (props) => {
    const [data, setData] = useState(null);
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
    const fetchData = async () => {
        let data = await (await fetch('https://api.tvmaze.com/shows')).json();
        setData(data);
    }
    useEffect(() => {
        fetchData();
    }, [])
    if (data)
        return (
            <div>
                <ListFav data={data} removeFavorite={removeFavorite} addToFavorite={addToFavorite} favorites={favorites}/>
            </div>)
    else {
        return <div className="flex justify-center">
            <div className="lds-dual-ring"></div>
        </div>
    }
}
export default Home;