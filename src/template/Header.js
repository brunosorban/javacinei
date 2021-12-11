import React from 'react';

function Header() {
    return (
        <header id='header'>
            <img src="https://i.imgur.com/6PHyWdC.png" alt="logo"/>
            <h1 id='title'>Vacinei Dashboard</h1>
            <a href='https://site-vacinei.herokuapp.com/'><button className="btn volta" type="submit">De volta ao Vacinei</button></a>
    </header>
    );

}
export default Header;