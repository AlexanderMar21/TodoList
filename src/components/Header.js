import React from "react";

const Header = ( {user} ) => {
    return(
        <div>
            <header>
                <h1>{user} 's ToDo List</h1>
            </header>
        </div>
    )
}

export default Header;