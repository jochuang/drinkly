import {useState, useCallback, useEffect} from 'react';
import React, { Component } from 'react';
import axios from 'axios';
import MainContainer from './containers/mainContainer';
// import { Switch, Route } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        };
    }

    // componentDidMount() {
    //     fetch('/api')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }
    
    // componentDidMount() {
    //     const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    //     axios.get(url)
    //         .then(res => {
    //             const cocktail = res.data.drinks[0]
    //             console.log(cocktail)
    //             this.setState({data: cocktail})
    //         })
    //         .catch((e) => console.log(e))
        
    // };
    
    render() {
        // const {idDrink, strDrink, strDrinkThumb} = this.state.data;
        // console.log(idDrink, strDrink, strDrinkThumb)
        return (
            <MainContainer />

            // <div className='App'>
            //         <div key={idDrink}>
            //             <h2>{strDrink}</h2>
            //             <img src = {strDrinkThumb} alt='#' />
            //             {/* <button onClick = {fetchCocktailHandler}>Get another cocktail</button> */}
            //         </div>
            // </div>
        )
    }
}
// function App() {
//     const [loading, setLoading] = useState();
//     const [data, setData] = useState([]);

//     const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

//     const fetchCocktailHandler = useCallback(() => {
//         setLoading(true);

//         axios.get(url)
//             .then(res => {
//                 // console.log(res.data)
//                 setData(res.data.drinks);
//             })
//             .catch((e) => console.log(e))
//             .finally(() => setLoading(false))
//         }, []);
    
//     useEffect(() => {
//         fetchCocktailHandler();
//     }, [fetchCocktailHandler])

//     // loading set
//     if (loading) {
//         return (
//             <h2>Loading...</h2>
//         )
//     }

//     return <div className='App'>
//             {
//                 data.map((cocktail) => (
//                     <div key={cocktail.idDrink}>
//                         <h2>{cocktail.strDrink}</h2>
//                         <img src = {cocktail.strDrinkThumb} alt='#' />
//                         <button onClick = {fetchCocktailHandler}>Get another cocktail</button>
//                     </div>
//                 ))
//             }
//         </div>;
// }

export default App;