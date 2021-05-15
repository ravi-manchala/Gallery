import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


const Progressbar = ({file, setFile}) => {
    const {progress, url} = useStorage(file);

    useEffect(() => {
        if(url) {
            setFile(null);
        }
    }, [url, setFile]);
    return(
        <div>
            <Loader
              type="Bars"
              color="#00BFFF"
              height={40}
              width={250}
            //   timeout={3000} //3 secs
            />
        </div>
    )
};

export default Progressbar;


// import React, { useEffect } from 'react';
// import useStorage from '../hooks/useStorage';
// import classes from './Progressbar.module.css';

// const Progressbar = ({file, setFile}) => {
//     const {progress, url} = useStorage(file);
//     console.log(progress, url)

//     useEffect(() => {
//         if(url) {
//             setFile(null);
//         }
//     }, [url, setFile]);
//     return(
//         <div className = {classes.progressbar} style = {{width: progress + '%'}}></div>
//     )
// };

// export default Progressbar;