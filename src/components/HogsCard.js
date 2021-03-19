import React from 'react';

const HogsCard = ({ hog, img }) => {
    return (
        <div className="ui eight wide column">
            <div className="ui card">
                <div className="image">
                    <img src={img} alt={hog.name} />
                </div>
                <div className="content">
                    <a className="header">{hog.name}</a>
                    <div className="meta">
                    <span className="date">Weight: {hog.weight}</span>
                    </div>
                    <div className="description">
                    Specialty: {hog.specialty}
                    </div>
                </div>
                <div className="extra content">
                    <a>
                    <i className="star outline" />
                    Highest Medal Achieved: {hog["highest medal achieved"]}
                    </a>
                </div>
                <div className="extra content">
                    <a>
                    {hog.greased ? "Greased" : "Not Greased"}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HogsCard;