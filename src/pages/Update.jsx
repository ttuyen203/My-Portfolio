import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

const Update = () => {
    const { id } = useParams();

    const [values, setValues] = useState({
        name: '',
        description: '',
        languages: '',
        image: null,
    })

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/projects/' + id)
            .then(res => {
                setValues(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleUpdate = (event) => {
        event.preventDefault();

        axios.put('http://localhost:3000/projects/' + id, values)
            .then(res => {
                console.log(res);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/manager')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="form-container">
            <h2>Update Project</h2>
            <form onSubmit={handleUpdate} >
                <div className="form-group">
                    <label htmlFor="name">Project Name: </label>
                    <input type="text" name='name' className='' placeholder='Enter Project Name' value={values.name}
                        onChange={e => setValues({ ...values, name: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Description: </label>
                    <input type="text" name='price' className='' placeholder='Enter description' value={values.description}
                        onChange={e => setValues({ ...values, description: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Project Image:</label>
                    <input type="text" name='image' className='' value={values.image}
                        onChange={e => setValues({ ...values, image: e.target.value })} />
                </div>
                <img src={values.image} alt="" style={{ maxWidth: '300px', maxHeight: '300px' }} className='mb20' />

                <div className="form-group">
                    <label htmlFor="name">Languages:</label>
                    <input type="text" name='image' className='' value={values.languages}
                        onChange={e => setValues({ ...values, languages: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Link github:</label>
                    <input type="text" name='image' className='' value={values.linkgit}
                        // onChange để cập nhật giá trị của các trường khi người dùng nhập liệu.
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

export default Update