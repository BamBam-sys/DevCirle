
//To be done



// import React from 'react'
// import { useState, useEffect} from 'react';

// export const Avatar = (props) => {
//     const [avatar, setAvatar] = useState([]);
//     const {id} = props 


//     useEffect(() => {
//         let response = 
        
//     }, [input])
//     return (
//         <div>
            
//         </div>
//     )
// }

import React from 'react'
import style from '../styles/Avatar.module.css'

function Avatar(props) {
  return (
  <div>
    <img className={style.circle-img} src={props.img} alt='chally' />
  </div>
  )
}

export default Avatar
