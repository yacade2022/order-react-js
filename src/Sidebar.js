import React from 'react'
import { useAllContext } from './Context'
import {FaTimes} from 'react-icons/fa'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

function Sidebar() {
    const{isSidebarOpen,decreaseAmount,closeSidebar,total,cart,clearCart,allProducts,remove,increaseAmount} =useAllContext()  
    //clear cart
    const clr =()=>{
      clearCart()
      allProducts.forEach((item)=>{
        item.inCart = false
      })
    }
    //remove element
    const rem = (id)=>{
      remove(id)
      let element = allProducts.find((item)=>item.id === id)
      element.inCart = false 
    }
    //decrease
    const decr = (id)=>{
      decreaseAmount(id)
      let element = allProducts.find((item)=>item.id === id)   
      
      let elementCart = cart.find((item)=>item.id === id)
      if(element.amount === elementCart.amount){
        element.inCart = false
      }
    }
    
   
  return (
    <div className={isSidebarOpen?'sidebar show-sidebar':'sidebar'}>
        <h2>your cart</h2>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        {      
           
            cart.map((item,index)=>{
                const{id,amount,image,title} = item             

                return <article key={id} className='sideBar-container' >
                              <div>
                                <img src={image} alt={title} className='image-sideBar' />
                              </div>
                              <div>
                                  <button onClick={()=> rem(id)} className='remove-btn'>remove</button>
                              </div>                                                  
                              <div>                    
                                  <div  className='side-amount'>
                                      <button onClick={()=> increaseAmount(id)} className='increase-btn' ><FiChevronUp /></button>
                                      <span>{amount}</span>
                                      <button onClick={()=> decr(id)} className='decrease-btn' ><FiChevronDown /></button>
                                  </div>                       
                              </div>
                        </article>
            })
        }
        
        <div className='total-clear'>
          <h3>your total : $ {total}</h3>
          <button onClick={clr} >clearCart</button>
        </div>
    </div>
  )
}

export default Sidebar