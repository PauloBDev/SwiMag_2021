import React, { useState, useEffect } from 'react';

import './Footer.css';

import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import insta from '../images/instagram.png'
import snap from '../images/snapchat.png'
import youtube from '../images/youtube.png'
import rss from '../images/rss.png'

export default function Footer() {
    return(

    <footer>
        <div className="footer container">
            <nav class="liens_bas">
                <a href=''>Sitemap</a>
                <a href=''>Legal Notice</a>
                <a href=''>Contact Us</a>
            </nav>

            <nav className="reseaux_bas">
                <a href=''><img src={twitter} alt='twitter' /></a>
                <a href=''><img src={facebook} alt='facebook' /></a>
                <a href=''><img src={insta} alt='instagram' /></a>
                <a href=''><img src={snap} alt='snapchat' /></a>
                <a href=''><img src={youtube} alt='youtube' /></a>
                <a href=''><img src={rss} alt='rss' /></a>
            </nav>
        </div>
    </footer>

    );
}