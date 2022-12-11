import React, { Component } from 'react';

class DrinkCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="drink-card">
                <div className="drink-name">{this.props.name}</div>
                <img src={this.props.strDrinkThumb}></img>
            </div>
        )
    }
};
export default DrinkCard;