import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GithubLogo, ArrowLineUpRight } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';

const Project_List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/projects')
            // Cập nhật trạng thái data với dữ liệu đã lấy được
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <div className="manager-container">
                <header>
                    <a href="/" className="logo">To Xuan Tuyen</a>
                    <ul className="navmenu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </header>

                <h3 className='manager-title'>Project List</h3>
                {data.map((d, i) => (
                    <section key={i} className="project-list">
                        <div className="projects-text">
                            <div className="project-img">
                                <img src={d.image} alt="Project 1" />
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-info">
                                <h3>{d.name}</h3>
                                <p className="project-description">{d.description}</p>
                                <div className="languages">
                                    <p className="language">{d.languages}</p>
                                </div>
                                <div className="project-btns">
                                    <a href={d.linkgit} className="btn mr10">Code <GithubLogo weight='bold' className="project-icon" /></a>
                                    <a href="#" className="btn mr10">View Demo <ArrowLineUpRight weight='bold' className="project-icon" /></a>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
};

export default Project_List;
