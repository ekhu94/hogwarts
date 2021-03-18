import React from 'react';

class ButtonGroup extends React.Component {

    render() {
        return (
            <div className="ui buttons">
                <button 
                    className="ui button"
                    onClick={() => this.props.onFilterClick()}
                >
                    Greased Pigs Toggle
                </button>
                <button className="ui button">
                    Sort By Name
                </button>
                <button className="ui button">
                    Sort By Weight
                </button>
            </div>
        );
    }
}

export default ButtonGroup;