import React,{useEffect,useRef} from 'react'
import { NavLink } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import logoRestaurant from  './img/restaurant-logo-design.jpg'
import { useAllContext } from './Context'
import {BsCart} from 'react-icons/bs'


function Navbar() {
  const{openSidebar,amount,showLinks,setShowLinks} =useAllContext()
  const linksContainer = useRef(null);
  const linksReference = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksReference.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainer.current.style.height = `${linksHeight}px`;
    } else {
      linksContainer.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav className='nav-center' >
         <div className='nav-header'>
            <img className='logo' src={logoRestaurant} alt='image' /> 
            <button className='bars' onClick={toggleLinks}><FaBars /></button> 
         </div>
         

        <div className='list-container' ref={linksContainer} >  
          <ul className='links' ref={linksReference}>
            <li>
               <NavLink to='/' className={({isActive})=>{ return isActive?'active':'no-active'}}>Home</NavLink> 
            </li>
            <li>
               <NavLink to='about' className={({isActive})=>{ return isActive?'active':'no-active'}}>About</NavLink>
            </li>
            <li>
               <NavLink to='contact' className={({isActive})=>{ return isActive?'active':'no-active'}}>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/' className={({isActive})=>{ return isActive?'active':'no-active'}} 
              onClick={openSidebar}><BsCart />{amount}</NavLink>
            </li>
          </ul>  
        </div>
    </nav>
  )
}

export default Navbar