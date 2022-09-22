import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super();
        //State is different to PROPS in the sense that they are passed
        //down to children but can be changed. Functions that simply accept
        //a PROP and return are called pure or dumb functions. On the other hand,
        //functions that change the state of their parent functions are not.
        this.state = {
            robots: robots,
            searchfield: ''
        };
    }

    // Making it an arrow function ensures that 'this' is referring to app and not
    // the input html eleent in SearchBox.js!!! (Because that's where its called)
    onSearchChange = (event) => {
        //console.log(event.target.value);
        // DO this.setState and NEVER this.state =
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className='tc' >
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                < CardList robots={filteredRobots} />
            </div>

        )
    }
};

export default App;