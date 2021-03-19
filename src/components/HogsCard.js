import React, { useState } from 'react';

const HogsCard = ({ hog, img }) => {
    const [showDetails, setShowDetails] = useState(false);

    const onCardClick = () => {
        setShowDetails(!showDetails);
    }

    return (
        <div className="ui eight wide column">
            <div className="ui card">
                <div className="image">
                    <img src={img} alt={hog.name} />
                </div>
                <a 
                    className="content header"
                    onClick={() => onCardClick(hog)}
                >
                    {hog.name}
                </a>
                <div className={`content ${showDetails ? '' : 'hide-content'}`}>
                    <div className="meta">
                    <span className="date">Weight: {hog.weight}</span>
                    </div>
                    <div className="description">
                    Specialty: {hog.specialty}
                    </div>
                    <div>
                    <i className="star outline" />
                    Highest Medal Achieved: {hog["highest medal achieved"]}
                    </div>
                </div>
                <div className={`extra content ${showDetails ? '' : 'hide-content'}`}>
                    <a>
                    {hog.greased ? "Greased" : "Not Greased"}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HogsCard;