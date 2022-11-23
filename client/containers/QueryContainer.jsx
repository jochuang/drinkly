import React, { Component } from 'react';

class QueryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinkName: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
      // console.log(e);
      this.setState({[e.target.name]: e.target.value})
      // console.log(this.state)
    }

    handleSubmit() {
        // const defaults = {
        //   drinkName: this.state,
        // }
        // const charInfo = {};
        // Object.keys(this.state).forEach(prop => {
        //   if (this.state[prop] === '') charInfo[prop] = defaults[prop];
        //   else charInfo[prop] = this.state[prop];
        // });
        console.log('handleSubmit')
        fetch('/api', {
          headers: { ...this.state },
        })
          .then(res => {
            console.log('in fetch', res)
            return res.json()})
          .then(data => {
            console.log(data)
            // if (Object.keys(data).length <= 1) throw 'Incorrect shape of response';
            // return this.props.addCharacter([data])
          })
          // .catch(err => console.log('ERROR: ', err));
    }

    render() {
        return(
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
        )
    }
}
export default QueryContainer;