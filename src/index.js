import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header";
import Camping from "./components/Camping";
import properties from "./assets/properties";
import Poster from "./components/Poster";
import Campsites from "./components/Campsites";
import Explores from "./components/Explores";
import Footer from "./components/Footer";

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <Camping camping={properties}/>
        <Poster/>
        <Campsites camps={properties}/>
        <Explores explore={properties}/>
        <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);

