import React from "react";
import getLastWord from "./getLastWord";


const MenuItem = (props) => {
    const {filler} = props;
    const menuText = getLastWord(filler.title);
    const menuLink=`#${menuText}`
    return(
        <a href={menuLink} className="dv-header__menu-link">
            {menuText}
        </a>
    )
}

export default MenuItem;