import React, { useState } from 'react'
import useFirestore from '../hooks/useFirestore';
import classes from './ImageGrid.module.css';

const ImageGrid = ({setSelectedImg}) => {
    const {docs} = useFirestore('images')
    
    return (
        <div className = {classes.gallery}>
            { docs && docs.map(doc =>(
                <div key={doc.id} className = {classes.img}
                onClick = {() => setSelectedImg(doc.url)}>
                    <img src={doc.url} alt={doc.name}/>
                </div>
            ))}
            
        </div>
    )
}

export default ImageGrid;




// -----------------------ORIGINAL-START----------------------//
// const ImageGrid = ({setSelectedImg}) => {
//     const {docs} = useFirestore('images')
    
//     return (
//         <div className = {classes.grid}>
//             { docs && docs.map(doc =>(
//                 <div key={doc.id} className = {classes.post}
//                 onClick = {() => setSelectedImg(doc.url)}>
//                     <img src={doc.url} alt={doc.name}/>
//                     {/* <div><span className="material-icons">favorite_border</span></div>  */}
//                     {/* <div onClick = {likeHandler}><span class="material-icons">favorite_border</span></div> */}
//                     <div class="material-icons" >favorite_border</div>
//                 </div>
//             ))}
            
//         </div>
//     )
// }

// export default ImageGrid;
//----------------------original-end-----------------------//