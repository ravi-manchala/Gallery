import React, { useState } from 'react';

import classes from './Model.module.css';

const Model =({selectedImg, setSelectedImg}) =>{
    const [like, setLike] = useState(false)


    const closeHandler =() =>{
        setSelectedImg(null);
    }

    const likeHandler = () => {
        setLike(true)
    }


    return(
        <div className = {classes.model}>
            <div className = {classes.post}>
                <img src={selectedImg} alt =''/>
                <i  className="far fa-times-circle fa-2x"
                       onClick ={closeHandler}>
                </i>

                <div className = {classes.comment}>
                  <div className="fas fa-heart fa-2x"
                       style = {{color: like ? 'red' : 'black'}}
                       onClick={likeHandler}>
                  </div> 
                  
                  <p>comment</p>
                  <textarea />
                </div> 
            </div>
        </div>        
    )
};

export default Model;





// ----------------------Original------------------------------//


// const Model =({selectedImg, setSelectedImg}) =>{
//     const [like, setLike] = useState(false)


//     const closeHandler =() =>{
//         setSelectedImg(null);
//     }

//     const likeHandler = () => {
//         setLike(true)
//     }


//     return(
//         <div className = {classes.model}>
//             <div className = {classes.post}>
//                <img src={selectedImg} alt =''/>
//             </div>
//             <div className = {classes.comment}>
//                 <i class="fas fa-heart fa-2x"
//                    style = {{color: like ? 'red' : 'black'}}
//                    onClick={likeHandler}>
//                 </i>    
//                 <i class="far fa-times-circle fa-2x"
//                    onClick ={closeHandler}>
//                 </i>    
//                 <p>comment</p>
//                 <textarea />
//             </div>        
//         </div>        
//     )
// };

// export default Model;

//------------------------Original end-----------------------------//