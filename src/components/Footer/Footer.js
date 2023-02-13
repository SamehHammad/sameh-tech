import React from 'react'
import { useSelector } from 'react-redux';
import './Footer.css'

const Footer = () => {
  const { mode } = useSelector((state) => state.darkMode);

  return (
    <div className='Footer'>
       <div className='Allscoil' style={{backgroundColor:mode?"#3A3B3C":"#fce8e8"}}>
          <a href='https://www.facebook.com/same7.hammad/' target='_blank'><i className="fa-brands fa-facebook" style={{color:mode?"red":"black"}}></i></a>
          <a href='https://twitter.com/SamehHammad17' target='_blank'><i className="fa-brands fa-twitter" style={{color:mode?"red":"black"}}></i></a>
          <a href='https://github.com/SamehHammad' target='_blank'><i className="fa-brands fa-github" style={{color:mode?"red":"black"}}></i></a>
          <a href='https://www.linkedin.com/in/sameh-hammad-b20019246/' target='_blank'><i className="fa-brands fa-linkedin" style={{color:mode?"red":"black"}}></i></a>
       </div>
    </div>
  )
}

export default Footer
