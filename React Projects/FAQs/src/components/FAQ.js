import React, {useState} from 'react'

import style from './FAQ/faq.module.css'

const FAQ = ({id, title, desc}) => {
    const [toggle,setToggle] = useState(false)
  return (
    <article className= {style.faq} >
        <div>
            <h3> {title} </h3>
            <button onClick={()=>{setToggle(!toggle)}}>
             {toggle ? " - " : " + "}
               
            </button>
            
        </div>
        {toggle &&<p> {desc} </p> }
       
    </article>
  )
}

export default FAQ