import React from 'react';
import HogsCard from './HogsCard';

class HogsContainer extends React.Component {

    getImg = name => {
        let picName = name.split(' ').join('_').toLowerCase();
        let pic = require(`../hog-imgs/${picName}.jpg`);
        return pic;
    }

    render() {
        const renderedHogs = this.props.hogs.map(h => {
            return (
                <HogsCard 
                    key={h.name} 
                    hog={h}
                    img={this.getImg(h.name)}
                />
            );
        });
        return (
            <div className="ui grid container">
                {renderedHogs}
            </div>
        );
    }
}

// const HogsContainer = props => {
//     const [showDetails, setShowDetails] = useState(false);

//     const onCardClick = () => {
//         setShowDetails(!showDetails);
//     }

//     const renderedHogs = props.hogs.map(h => {
//         return (
//             <HogsCard 
//                 key={h.name} 
//                 hog={h}
//                 showDetails={showDetails}
//                 onCardClick={onCardClick}
//             />
//         );
//     });
    
//     return (
//         <div className="ui grid container">
//             {renderedHogs}
//         </div>
//     );
// };

export default HogsContainer;