import React from "react";

const IconLink = (props) => {
    const {pool} = props;
    return(
        <a href={pool.link} className="dv-footer__link" target="_blank" rel="noreferrer">
            <img src={pool.img} alt="its link"/>
        </a>
    )
}

export default IconLink;