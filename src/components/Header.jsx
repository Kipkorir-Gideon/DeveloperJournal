import React from "react";
import CreateIcon from '@material-ui/icons/Create';

function Header() {
    return (
        <header className="header">
            <h1>
                <CreateIcon />
                Developer's Journal
            </h1>
        </header>
    );
}


export default Header;