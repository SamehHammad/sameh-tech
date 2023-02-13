import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Deleteprodect,Addconter } from "../redux/reducers";
import '../App.css'

const Datalesprodects = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const [prodect,setprodect] = useState(0)
  const conut  = 0
  const add = () => {
    if(prodect){
      return setprodect(prodect-1)
    }
  }
  useEffect(()=>{
    if(prodects.length<0){
      return conut===0
    }
  },[])
  const {prodects} = useSelector((state)=>state.getprodect)
  const dispatch = useDispatch()
  return (
  <div className={mode?'Datalesprodects m-dark':'Datalesprodects m-light'} dir='rtl' >
       {prodects.length>0?prodects.map(item=>(
        <div key={item.id}  className='Datalesprodect'>
          <div className='Datalesprodectone'>
             <div className='Datalesprodectright'>
                <img className='image' src={item.img} alt='phone'/>
                <h3 style={{padding:'50px 20px'}}>{item.title}</h3>
             </div>
             <div className='Datalesprodectleft'>
               <h3>{item.oraginprice}</h3>
               <h3
                style={{textDecoration:'line-through',
                fontSize:'15px',
                color:'#9999'
                }}
               >{item.discount}</h3>
             </div>
          </div>
          <div className='Datalesprodecttwo'>
              <div className='deleteprodectone'>
                  <button className='btn' onClick={()=>dispatch(Addconter(-1))&&dispatch(Deleteprodect(item.id))}>Delete</button>
              </div>
              <div className='deleteprodectone'>
                  <button className='btn' onClick={()=>setprodect(prodect+1)}>+</button>
                  <h2 style={{color:'#fff'}}>{prodect}</h2>
                  <button className='btn' onClick={add}>-</button>
              </div>
          </div>
        </div>
       )):<h4 className='Youhavenotaddedanyproducts' style={{color:mode?"white":"black"}}>You have not added any products</h4>}
    </div>
  )
}

export default Datalesprodects