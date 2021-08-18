import React from 'react'

function Navbar() {
    return (
        <nav>
            <header>
                <ul className='nav-links'>
                    <li><a href='#'>Shop</a></li>
                    <li><a href='#'>Read</a></li>
                    <li><a href='#'>Stores</a></li>
                    <li><a href='#'>Search</a></li>
                </ul>
                <div>
                    <ul className='nav-links'>
                        <li><a href='#'>Login</a></li>
                        <li><a href='#'>Cart</a></li>
                    </ul>
                </div>
            </header>
        </nav>
    )
}

export default Navbar
