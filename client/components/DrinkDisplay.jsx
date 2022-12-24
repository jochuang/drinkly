import React, { Component } from 'react';
import DrinkCard from './DrinkCard';
import axios from 'axios';

class DrinkDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        // const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka'

        axios.get(url)
            .then(res => {
                const cocktail = res.data.drinks
                console.log(cocktail)
                this.setState({data: cocktail})
            })
            .catch((e) => console.log(e))

        fetch('/api')
            .then(res => res.json())
            .then(data => console.log(data))
        
    };

    render() {
        // const {idDrink, strDrink, strDrinkThumb} = this.state.data;
        // console.log(idDrink, strDrink, strDrinkThumb)

    // <div className='App'>
    //         <div key={idDrink}>
    //             <h2>{strDrink}</h2>
    //             <img src = {strDrinkThumb} alt='#' />
    //             {/* <button onClick = {fetchCocktailHandler}>Get another cocktail</button> */}
    //         </div>
    // </div>

        const drinkCards = [];
        for (let i = 0; i < this.state.data.length; i++) {
            drinkCards.push(<DrinkCard 
                key={this.state.data[i].idDrink}
                name={this.state.data[i].strDrink}
                strDrinkThumb={this.state.data[i].strDrinkThumb}
                />)

        }

        return (
            <div className="drink-display">
                This is a drink display.
                {drinkCards}
            </div>
        )
    }
};

export default DrinkDisplay;