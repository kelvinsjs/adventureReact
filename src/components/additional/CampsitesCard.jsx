import React from "react";

const CampsitesCard = (props) => {
    const {filler} = props;
    return(
        <li className="dv-campsites__item">
            <a href="index.html" className="dv-campsites__link">
                <div className="dv-campsites__img">
                    <img src={filler.img} alt="description"/>
                </div>
                <div className="dv-campsites__block">
                    <p className="dv-campsites__price">
                        $ {filler.cost} / Night
                    </p>
                    <h4 className="dv-campsites__name">
                        {filler.title}
                    </h4>
                    <p className="dv-campsites__desc">
                        {filler.desc}
                    </p>
                    <button className="dv-campsites__button">Order</button>
                </div>
            </a>
        </li>
    )
}

export default CampsitesCard;