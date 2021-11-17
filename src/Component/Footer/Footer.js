import React from 'react'
import './Footer.css'
import { Typography } from '@mui/material'
const Footer = () => {
    return (
        <div className='footer'>
        <div className="footer_left">
            <Typography className='footer_name'>
                Mohammade Reza  eskandarnezhad
            </Typography>
        </div>

        <div className="footer_right">
           <Typography classNamek='footer_cpyright'>
             Developed by  <a href='https://www.instagram.com/heis_eska/'>eska</a>

             <br/>
             Clone from YouTube
           </Typography>
        </div>

        </div>
    )
}

export default Footer
