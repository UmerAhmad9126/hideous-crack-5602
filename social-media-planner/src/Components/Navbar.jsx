import React from 'react'
import "../Style/Navbar.css"

const Navbar = () => {
    return (
        <>

            <div id='nav-container'>
                <div id='nav-child' >
                    <img src="https://th.bing.com/th/id/OIP.dTswXeIHxSxxONOMr9stGQHaC0?w=322&h=133&c=7&r=0&o=5&pid=1.7" alt='logo' />
                    <p>Tools</p>
                    <p>Channel</p>
                    <p>Pricing</p>
                    <p>Blog</p>
                    <p>About</p>
                    <p>Customer</p>
                    <p style={{ color: "blue" }}>Log in</p>
                    <button>Get Started Now</button>
                </div>
            </div>
        </>

    )
}

export default Navbar