import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GithubLogo, ArrowLineUpRight } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Manager = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/projects')
            // Cập nhật trạng thái data với dữ liệu đã lấy được
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/projects/${id}`)
                    .then(res => {
                        location.reload();
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        });
    }

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

                <h3 className='manager-title'>Manager</h3>
                <Link to="/create" className='btn-add'>Add Project</Link>
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
                                <div className="project-btns mt10">
                                    <Link to={`/update/${d.id}`} className='btn-update mr10'>Update</Link>
                                    <button onClick={e => handleDelete(d.id)} className='btn-delete'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
};

export default Manager;
