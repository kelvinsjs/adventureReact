import React from "react";
import properties from "../assets/properties";
import SectionTitle from "./additional/SectionTitle";
import "./explores.scss";
import getLastWord from "./additional/getLastWord";
import ExploresCard from "./additional/ExploresCard";

export default function Explores(props) {
    const {explore} = props;

    const galleryFiller = properties[2].content.map((filler) =>
        <ExploresCard filler={filler} key={filler.id}/>
    )
    return (
        <section className="end-section dv-explores dv-main-section" id={getLastWord(explore[2].title)}>
            <SectionTitle text={explore[2].title}/>
            <div className="dv-explores__gallery">
                {galleryFiller}
            </div>
        </section>
    )
}