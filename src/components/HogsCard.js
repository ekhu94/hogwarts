import React from 'react';

class HogsCard extends React.Component {
    state = { showDetails: false }

    render() {
        const { hog, img } = this.props;
        return (
            <div 
                style={{cursor: 'pointer'}} className="ui eight wide column"
                onClick={() => this.setState({ showDetails: !this.state.showDetails })}
            >
                <div className="ui card">
                    <div className="image">
                        <img src={img} />
                    </div>
                    <div className="header content">{hog.name}</div>
                    <div className={`content ${this.state.showDetails ? '' : 'hideContent'}`}>
                        <div className="meta">
                        <span className="date">
                            {hog.greased ? 'Greased' : 'Not Greased'}
                        </span>
                        </div>
                        <div className="description">
                            specialty: {hog.specialty}
                        </div>
                        <div className="description">
                            weight: {hog.weight}
                        </div>
                    </div>
                    <div className={`extra content ${this.state.showDetails ? '' : 'hideContent'}`}>
                        highest medal: {hog['highest medal achieved']}
                    </div>
                </div>
            </div>
        );
    }
}

export default HogsCard;