import React, { Component } from 'react';
import DrinkCard from './DrinkCard';

class DrinkDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drinkName: '',
            data:[]
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        fetch('/api', {
            headers: {drinkname: this.state.drinkName}
        })
            .then(res => res.json())
            .then(data => {
                console.log('this is from backend', data)
                this.setState({data: data})
        })   
    };

    handleInput(e) {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state)
      }
  
    handleSubmit() {
        console.log('handleSubmit')
        console.log(this.state)
        fetch('/api', {
        headers: { drinkName: this.state.drinkName },
        })
        .then(res => res.json())
        .then(data => {
            console.log('this is from backend', data)
            this.setState({data: data})
    })
    }

    render() {
        const drinkCards = [];
        for (let i = 0; i < this.state.data.length; i++) {
            drinkCards.push(<DrinkCard 
                key={this.state.data[i].idDrink}
                name={this.state.data[i].strDrink}
                strDrinkThumb={this.state.data[i].strDrinkThumb}
                />)
        }

        return (
            <div>
                <div className="query-container">
                <label htmlFor="drink-label">Search Drink By Name</label>
                <input name='drinkName' 
                    placeholder='Pick your poison...'
                    onChange={this.handleInput}>
                        {/* onChange={this.handleInput}     */}
                </input>
                <button 
                type = "button"
                name= "submit"
                onClick = {this.handleSubmit}>Submit</button>
                </div>

                <div className="drink-display">
                    This is a drink display.
                    {drinkCards}
                </div>
            </div>
        )
    }
};

export default DrinkDisplay;