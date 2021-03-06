import React, { useState, useContext} from 'react';
import  {NavLink} from 'react-router-dom';

import { useHistory } from "react-router-dom";
import Container from './reusableComponents/Container';
import Logo from './Logo';
import { IoPerson, IoPersonOutline } from "react-icons/io5";
import { FaBars, FaTimes, FaRegUser, FaUser, FaHeart, FaHome } from 'react-icons/fa';
import Searchbar from "./Searchbar";
import {AuthContext} from "../context/AuthContext";


const Nav = () => {
    const [isMobile, setIsMobile] =useState(false);
    const history = useHistory();
    const {
        logout,
         user ,
    } = useContext(AuthContext);

    return (
        <nav>
            {/*<div className='navbar'>*/}
            <Logo />
           {/*<Searchbar />*/}

                <ul className={isMobile ? 'nav-menu-mobile':'nav-menu'}
                onClick={(()=>setIsMobile(false))}
                >
                    <li className= 'nav-links'>
                        <NavLink exact to='/'>
                        <FaHome/>
                        </NavLink>
                    </li>
                    <li className='nav-links'>
                        <NavLink exact to='/zaden-en-bollen'>
                        zaden en bollen
                        </NavLink>
                    </li>
                    <li className='nav-links'>
                        <NavLink exact to='/stekken'>
                        stekken
                        </NavLink>
                    </li>
                    <li className='nav-links'>
                        <NavLink exact to='/planten'>
                        planten
                        </NavLink>
                    </li>
                    <li className='nav-links'>
                        <NavLink exact to='/over-leafy'>
                            over Leafy
                        </NavLink>
                    </li>
                    <li className='nav-links'>{!user ? (<NavLink exact to='/user-portal'>
                        <IoPersonOutline/>
                    </NavLink>):(
                        <button type="button" onClick={logout}>Log uit</button>
                    )}
                    </li>
                </ul>
                <div className='mobile-menu-icon'
                onClick={()=> setIsMobile(!isMobile)}>
                    {isMobile ? <FaTimes/>:
                        <FaBars />}

                </div>
            {/*</div>*/}

        </nav>
    )
}
export default Nav

