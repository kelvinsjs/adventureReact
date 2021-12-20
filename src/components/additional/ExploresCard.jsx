import React from "react";



const ExploresCard = (props) => {
    const {filler} = props;
    const Wwidth = window.innerWidth - 10;
    let imageWidth = 0;
    if(Wwidth > 1000) {
        imageWidth = Wwidth / 4;
    } else if (Wwidth > 500) {
        imageWidth = Wwidth / 2;
    } else {
        imageWidth = Wwidth;
    }
    const imageStyle = {
        width: `${imageWidth}px`
    }
    return(
        <div className="dv-explores__img" style={imageStyle}>
            <img src={filler.img} alt="beautiful pic there"/>
        </div>
    )
}

export default ExploresCard;