import React, { Component } from 'react';
import QueryContainer from './queryContainer';
import DrinkDisplay from '../components/DrinkDisplay'

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="main-container">
               <h1>Drinkly</h1>
               <QueryContainer />
               <DrinkDisplay />
            </div>
        )
    }
}

export default MainContainer;