import React from 'react';

class Card extends React.Component {
    // all img components must have an alt prop that defines what they are.
    render() {
        return (
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='robots' src={`https://robohash.org/${this.props.id}?200x200`} />
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}
export default Card; 