import React from 'react'
import "./header.css"
import netflixLogo from "../assets/NetflixLogo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <>
    <div className='headerContainer'>
        <div className='leftContainer'>
            <ul>
                <li><img src={netflixLogo} alt="Netflix Logo" width="100" /></li>
                <li>Home</li>
                <li>TVShows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>MyList</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
        <div className='rightContainer'>
            <SearchIcon />
            <NotificationsNoneIcon/>
            <AccountBoxIcon/>
            <ArrowDropDownIcon/>
        </div>

    </div>
    </>
  )
}
export default  Header