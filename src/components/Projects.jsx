import React from 'react'
import { GithubLogo, ArrowLineUpRight } from "@phosphor-icons/react";
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate('/project-list');
    };
    return (
        <>
            <section class="projects" id="projects">
                <div className="projects-text">
                    <h3>My Projects</h3>
                    <div className="project-img">
                        <img src="https://res.cloudinary.com/dymajn3ys/image/upload/v1707930033/spotify_dbzexe.png" alt="Project 1" />
                    </div>
                </div>
                <div className="project">
                    <div className="project-info">
                        <h3>Spotify Clone</h3>
                        <p className="project-description">I practiced using HTML and CSS by cloning the Spotify interface.</p>
                        <div className="languages">
                            <p className="language">HTML5, CSS3</p>
                        </div>
                        <div className="project-btns">
                            <a href="https://github.com/ttuyen203/Spotify-Clone" className="btn mr10">Code <GithubLogo weight='bold' className="project-icon" /></a>
                            <a href="" className="btn mr10">View Demo <ArrowLineUpRight weight='bold' className="project-icon" /></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-list">
                <div className="projects-text">
                    <div className="project-img">
                        <img src="https://res.cloudinary.com/dymajn3ys/image/upload/v1708405044/Screenshot_2024-02-20_115559_ir56f7.png" alt="Project 1" />
                    </div>
                </div>
                <div className="project">
                    <div className="project-info">
                        <h3>Admin Layout</h3>
                        <p className="project-description">I have utilized HTML, CSS, and JS to create a flexible and user-friendly admin interface.</p>
                        <div className="languages">
                            <p className="language">HTML5, CSS3, JS</p>
                        </div>
                        <div className="project-btns">
                            <a href="https://github.com/ttuyen203/Admin-Layout" className="btn mr10">Code <GithubLogo weight='bold' className="project-icon" /></a>
                            <a href="#" className="btn mr10">View Demo <ArrowLineUpRight weight='bold' className="project-icon" /></a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="btn-viewmore">
                <a href="" onClick={handleViewMoreClick} className="btn ">View More...</a>
            </div>
        </>
    )
}

export default Projects