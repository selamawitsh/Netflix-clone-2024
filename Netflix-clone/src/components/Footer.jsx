import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css"
function Footer() {
  return (
    <div className='footerContainer'>
      <div className='innerContainer'>
      <div className='icons'>
    <FacebookRoundedIcon/>
    <InstagramIcon/>
    <YouTubeIcon/>
    </div>

    <div className='footerLinkItems'>
      <div className='section1'>
        <ul>
          <li>Audio Description</li>
          <li>Investor Relation</li>
          <li>Legal Notice</li>
        </ul>
      </div>
      <div className='section2'>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
      </div>
      <div className='section3'>
        <ul>
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
        </ul>
      </div>
      <div className='section4'>
        <ul>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact US</li>
        </ul>
      </div>
      </div>
      <div className='serviceCode'><p>Service Code</p></div>
      <div className='copyright'>&copy;
      1997-2024 Netflix, Inc.
      </div>
      </div>
    
    
    </div>
  )
}
export default  Footer