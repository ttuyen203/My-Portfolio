import React from 'react'
import { ReadCvLogo, HandWaving } from "@phosphor-icons/react";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-text">
          <h2>Hello. I'm Tuyen <HandWaving weight="bold" /></h2>
          <h3>Front End Developer</h3>
          <p>I'm front end developer based in VietNam, and i'm very passionate and dedicated to my work</p>
          <div className="home-btn">
            <a href="#" className="btn mr10">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                Contact info
              </Link></a>
            <a href="#" className="btn">Dowload CV <ReadCvLogo weight='bold' /></a>
          </div>
        </div>
        <div className="home-img">
          <img src="https://res.cloudinary.com/dymajn3ys/image/upload/v1707927931/z5155852930599_97c23c3e2ff2cd2a41cb9056d06fa8d8_og86ty.jpg" alt="" />
        </div>
      </section>
    </>
  )
}

export default Home