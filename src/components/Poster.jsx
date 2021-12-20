import React from 'react';
import "./poster.scss"
import background from "../assets/img/bg1.jpg"

const Poster = () => {
    return (
        <section className="end-section dv-poster">
            <img src={background} alt="it`s poster here" className="dv-poster__img"/>
        </section>
    )
}

export default Poster;