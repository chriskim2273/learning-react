import React from 'react';
import './Hello.css';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <p1>Welcome to React.</p1>
                <p1>{this.props.greeting}</p1>
            </div>
        )
    }
}

export default Hello;