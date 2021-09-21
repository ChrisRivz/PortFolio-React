import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FcHome } from "react-icons/fc";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../styles/SideNav.css'

function SideNavBar() {

    return (
        <div>

            <SideNav className="navbar_menu" onSelect={(selected) => { }}>
                <SideNav.Toggle/>
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <FcHome className="navbar-icons" />
                        </NavIcon>
                        <NavText>
                            Home
            </NavText>
                    </NavItem>
                    </SideNav.Nav>
            </SideNav>

        </div>
    );
}

export default SideNavBar;
