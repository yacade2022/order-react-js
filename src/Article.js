import React from 'react'
import {Link, useParams } from 'react-router-dom'
import { useAllContext } from './Context';


function Article() {
    const{allProducts} = useAllContext()
    const {id} = useParams()
    const product = allProducts.find((item)=>item.id === id) 
       
    
  return (
   
    <article key={product.id} className='article-detail'>
                <div>
                   <img src={product.image} alt={id} />
                </div>
                
                <div className='article-describe'>
                    <h2>{product.title}</h2>  
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                    
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        
                    </p>
                    <Link to='/' className='go-back'>back to products</Link> 
                </div>
    </article>
  )
}

export default Article