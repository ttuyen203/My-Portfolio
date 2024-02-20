import React from 'react'
import { InstagramLogo, GithubLogo, Gear } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <>
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-logo">
                <a href="#" className="logo">To Xuan Tuyen</a>
            </div>
            <div className="footer-socials">
                <a href="#"><i><InstagramLogo/></i></a>
                <a href="#"><i><GithubLogo/></i></a>
                <a href="#"><i><Gear/></i></a>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer