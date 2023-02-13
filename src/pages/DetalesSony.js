import React from 'react'
import { useLocation } from 'react-router-dom'
import {sony} from  '../data'
import '../App.css'



const DetalesSony = () => {
  const location  = useLocation();
  const path  = location.pathname.split('/')[2]
  const data  = sony.find(item=>item.id.toString() === path)
  return (
    <div className='DetalesDell'>
       <div className='desc' dir='rtl'>
          <h3>{data.title}</h3>
          <h4>$ {data.discount}</h4>
          <h3 
           style={{textDecoration:'line-through',
           fontSize:'15px',
           color:'#9999'
          }}
           >$ {data.oraginprice}</h3>
           <button className='btn'>Confirmation Order</button>
          <p>{data.desc}</p>
       </div>
       <div className='photo'>
          <img className='photoimg' src={data.img} alt='phone'/>
       </div>
    </div>
  )
}

export default DetalesSony