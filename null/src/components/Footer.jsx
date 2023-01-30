import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaSpotify, FaTiktok, FaYoutube, FaCartPlus} from 'react-icons/fa'
import { SiApplemusic } from "react-icons/si";
import '../css/Footer.css'

export const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='apps'>
                <a href='https://open.spotify.com/artist/4sPUuytxwpAcIprvNPmcLz' target="_blank" rel="noreferrer"  className='smIcon'><FaSpotify/></a>
                <a href='https://www.youtube.com/@WEARE_NULL' target="_blank" rel="noreferrer"  className='smIcon'><FaYoutube/></a>
                <a href='https://music.apple.com/us/artist/null/1646846261' target="_blank" rel="noreferrer"  className='smIcon'><SiApplemusic/></a>
                <a href='https://null-merch-store.myshopify.com/collections/winter-2023' target="_blank" rel="noreferrer"  className='smIcon'><FaCartPlus/></a>
                <a href='https://www.instagram.com/Wearenull_' target="_blank" rel="noreferrer"  className='smIcon'><FaInstagram/></a>
                <a href='https://www.tiktok.com/@weare_null' target="_blank" rel="noreferrer"  className='smIcon'><FaTiktok/></a>
                <a href='https://twitter.com/WEARE_NULL' target="_blank" rel="noreferrer"  className='smIcon'><FaTwitterSquare/></a>
                <a href='https://www.facebook.com/WExARExNULL' target="_blank" rel="noreferrer"  className='smIcon'><FaFacebookSquare/></a>
            </div>
            <div className='row'>
                <p className='footerText'>
                    &copy;{new Date().getFullYear()} [NULL] | All rights Reserved | TRASHPLXNET LLC
                </p>
            </div>
        </div>
    </>
  )
}

