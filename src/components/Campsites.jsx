import React from "react";
import SectionTitle from "./additional/SectionTitle";
import './campsites.scss';
import properties from "../assets/properties";
import CampsitesCard from "./additional/CampsitesCard";
import getLastWord from "./additional/getLastWord";

function Campsites(props) {
    const {camps} = props;
    const campsitesCards = properties[1].content.map((filler) =>
    <CampsitesCard key={filler.id} filler={filler}/>
    )
    return(
        <section className="end-section dv-campsites dv-main-section" id={getLastWord(camps[1].title)}>
            <div className="container">
                <SectionTitle text={camps[1].title}/>
                <ul className="dv-campsites__list">
                    {campsitesCards}
                </ul>
            </div>
        </section>
    )
}

export default Campsites;