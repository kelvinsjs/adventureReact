import React, {Component} from 'react';
import './header.css';
import logoImg from "../assets/img/logo.jpg";
import bgh from "../assets/img/bgh.jpg"
import properties from "../assets/properties";
import MenuItem from "./additional/MenuItem";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isClose: false,
            height: 0,
            windowWidth: 0,
            windowHeight: 0
        }

        this.openMenu = openMenu.bind(this)
    }

    componentDidMount() {
        const height = document.querySelector('.container').clientHeight;
        this.setState({ height });
        this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
    }

    render() {
        const menuLinks = properties.map((filler) =>
        <MenuItem filler={filler}/>
        )
        const thisMenu = this.state.isClose && <div className="dv-header__list">{menuLinks}</div>
        const menuOpener = this.state.isClose ? `✕` : "☰"
        let imageHeight = this.state.windowHeight - this.state.height + "px"
        const headerStyle = {
            height: imageHeight,
            backgroundImage: `url(${bgh})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom"
        }
        return (
            <header className="end-section">
                <div className="container">
                    <div className="dv-header">
                        <a href="index.html" className="dv-header__logo">
                            <img src={logoImg} alt="logo" className="dv-header__logo-img"/>
                        </a>
                        <div className="dv-header__menu">
                            <p onClick={this.openMenu} className="dv-header__menu-bars">
                                {menuOpener}
                            </p>
                            {thisMenu}
                        </div>
                    </div>
                </div>
                <div className="dv-header__bg" style={headerStyle}>
                </div>
            </header>
        )
    }
}

function openMenu() {
    this.setState({
        isClose: !this.state.isClose
    })
}

