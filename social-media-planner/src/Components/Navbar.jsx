import React from 'react'
import "../Style/Navbar.css"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"

const Navbar = () => {
    return (
        <>

            <div id='nav-container'>
                <div id='nav-child' >
                    <img src="https://th.bing.com/th/id/OIP.dTswXeIHxSxxONOMr9stGQHaC0?w=322&h=133&c=7&r=0&o=5&pid=1.7" alt='logo' />
                    {/* <p>Tools</p> */}
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='blue'>Tools</MenuButton>
                        <MenuList>
                            <MenuItem>Publishing</MenuItem>
                            <MenuItem>Analytics</MenuItem>
                            <MenuItem>Engagement</MenuItem>
                            <MenuItem>Start Page</MenuItem>
                        </MenuList>
                    </Menu>

                    {/* <p>Channel</p> */}
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='blue'>Channels</MenuButton>
                        <MenuList>
                            <MenuItem >Facebook</MenuItem>
                            <MenuItem>Google Business Profile</MenuItem>
                            <MenuItem>Instagram</MenuItem>
                            <MenuItem>linkedIn</MenuItem>
                            <MenuItem>Pinterest</MenuItem>
                            <MenuItem>Shopify</MenuItem>
                            <MenuItem>Tik Tok</MenuItem>
                            <MenuItem>Twitter</MenuItem>
                        </MenuList>
                    </Menu>
                    <p>Pricing</p>
                    <p>Blog</p>
                    <p>About</p>
                    <p>Customer</p>
                    <p style={{ color: "blue" }}>Log in</p>
                    <button id='Sign-up'>Get Started Now</button>
                </div>
            </div>
        </>

    )
}

export default Navbar