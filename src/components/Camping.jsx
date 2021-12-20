import React from 'react';
import "./camping.scss";
import SectionTitle from "./additional/SectionTitle";
import CampingCard from "./additional/CampingCard";
import properties from "../assets/properties";
import getLastWord from "./additional/getLastWord";


const Camping = (props) => {
    const {camping} = props;
    const CampingCards = properties[0].content.map((filler) =>
        <CampingCard filler={filler} key={filler.id}/>
    );
    return (
        <section className="dv-camping end-section dv-main-section" id={getLastWord(camping[0].title)}>
            <div className="container">
                <SectionTitle text={camping[0].title} key={camping[0].id}/>
                <p className="dv-camping__subtitle">
                    {camping[0].subtitle}
                </p>
                <div className="dv-camping__list">
                    {CampingCards}
                </div>
            </div>
        </section>
    )
}

export default Camping;