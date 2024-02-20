import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InstagramLogo, GithubLogo, Gear } from "@phosphor-icons/react";

const Social_icon = () => {
  const navigate = useNavigate();

  const handleGearClick = () => {
    navigate('/manager');
  };

  return (
    <>
      <div className="socials-icons">
        <a href="#"><InstagramLogo weight='bold' className="icon" /></a>
        <a href="https://github.com/ttuyen203"><GithubLogo weight='bold' className="icon" /></a>
        <a href="" onClick={handleGearClick}><Gear weight='bold' className="icon" /></a>
      </div>
    </>
  );
};

export default Social_icon;