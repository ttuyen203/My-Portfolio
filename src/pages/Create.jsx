import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Create = () => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        languages: '',
        image: null,
    })

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3000/projects', values)
            .then(res => {
                console.log(res);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Added successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/manager')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="form-container">
            <h2>Add Project</h2>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="name">Project Name: </label>
                    <input type="text" name='name' className='' placeholder='Enter Project Name'
                        onChange={e => setValues({ ...values, name: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Description: </label>
                    <input type="text" name='price' className='' placeholder='Enter description'
                        onChange={e => setValues({ ...values, description: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Project Image:</label>
                    <input type="text" name='image' className=''
                        onChange={e => setValues({ ...values, image: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Languages:</label>
                    <input type="text" name='languages' className=''
                        onChange={e => setValues({ ...values, languages: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Link github:</label>
                    <input type="text" name='linkgit' className=''
                        onChange={e => setValues({ ...values, linkgit: e.target.value })} />
                </div>
                <div className="form-group">
                <button className='btn mr10'>Submit</button>
                <Link to="/manager" className='btn'>Return</Link>
                </div>
            </form>
        </div>
    )
}

export default Create