import React, { useState } from 'react';

import classes from './Home.module.css';
import Progressbar from '../components/Progressbar';
import ImageGrid from '../components/ImageGrid';
import Model from '../components/Model';

const Home = (props) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [selectedImg, setSelectedImg] = useState(null);
    const types = ['image/jpeg', 'image/png'];

    const changeHandler = (e)=>{
        const selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
        }else{
            setFile('')
            setError('Please select a jpeg/png files')
        }
    }


    return(
        <div>
            <nav className = {classes.nav}>
                <h1>Home</h1>
                <ul>
                    <li className = {classes.input}>
                        <label for="file">
                            <span className="material-icons">add_photo_alternate</span>
                        </label>
                        <input onChange={changeHandler} type="file" name="file" id="file" />
                    </li>
                
                    <li>
                        <button><i title = "Bookmark" className="fas fa-bookmark fa-2x"></i></button>
                    </li>
                    
                    <li>
                        <button onClick={props.handleLogout}>
                            <i title="Logout" className="fas fa-sign-out-alt fa-2x"></i>
                        </button>
                    </li>
                </ul>
            </nav>

            <div className = {classes.output}>
                {error && <div>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <Progressbar file={file} setFile={setFile}/>}
            </div>

            <ImageGrid setSelectedImg = {setSelectedImg}/>
            {selectedImg && <Model selectedImg = {selectedImg} setSelectedImg = {setSelectedImg}/>}
       </div>
    )
} 

export default Home;
