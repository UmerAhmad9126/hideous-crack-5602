import React from 'react'
import "../Style/Navbar.css"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,

} from '@chakra-ui/react'
import { ChevronDownIcon} from "@chakra-ui/icons"

const Navbar = () => {
    return (
        <>

            <div id='nav-container'>
                <div id='nav-child' >
                    <img src="https://th.bing.com/th/id/OIP.dTswXeIHxSxxONOMr9stGQHaC0?w=322&h=133&c=7&r=0&o=5&pid=1.7" alt='logo' />
                    {/* <p>Tools</p> */}
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Tools
                        </MenuButton>
                        <MenuList>
                            <MenuItem><p>Publishing</p>
                            <p></p></MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>

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