import React from 'react';


const CampingCard = (props) => {
    const {filler} = props;
    return (
    <div className="dv-camping__card" key={filler.id}>
        <img src={filler.img} alt="img" className="dv-camping__img"/>
        <p className="dv-camping__text">
            {filler.text}
        </p>
    </div>
    )
}

export default CampingCard;