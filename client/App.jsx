import {useState, useCallback, useEffect} from 'react';
import React, { Component } from 'react';
import axios from 'axios';
// import { Switch, Route } from 'react-router-dom';


function App() {
    const [loading, setLoading] = useState();
    const [data, setData] = useState([]);

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

    const fetchCocktailHandler = useCallback(() => {
        setLoading(true);

        axios.get(url)
            .then(res => {
                // console.log(res.data)
                setData(res.data.drinks);
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false))
        }, []);
    
    useEffect(() => {
        fetchCocktailHandler();
    }, [fetchCocktailHandler])

    // loading set
    if (loading) {
        return (
            <h2>Loading...</h2>
        )
    }

    return <div className='App'>
            {
                data.map((cocktail) => (
                    <div key={cocktail.idDrink}>
                        <h2>{cocktail.strDrink}</h2>
                        <img src = {cocktail.strDrinkThumb} alt='#' />
                        <button onClick = {fetchCocktailHandler}>Get another cocktail</button>
                    </div>
                ))
            }
        </div>;

}

export default App;