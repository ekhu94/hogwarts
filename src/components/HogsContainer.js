import React from 'react';
import HogsCard from './HogsCard';

const HogsContainer = ({ hogs }) => {

    const renderImg = name => {
        let pigName = name.split(' ').join('_').toLowerCase();
        return require(`../hog-imgs/${pigName}.jpg`);
    }

    const renderedHogs = hogs.map(h => {
        return <HogsCard
                    key={h.name}
                    hog={h}
                    img={renderImg(h.name)}
                />
    });
    return (
        <div className="ui grid container">
            {renderedHogs}
        </div>
    );
}

export default HogsContainer;