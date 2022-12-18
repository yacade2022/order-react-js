import React from 'react'
import { useAllContext } from './Context'
import { Link } from 'react-router-dom';



function Home() {
    const{add,allProducts} = useAllContext() 
    
    const handle = (id)=>{
    add(id)
    let  prod = allProducts.find((item)=>item.id === id)    
    prod.inCart =true
    prod.amount = 1
   } 
   
  return (
    <section>
       <div className='home-container'>
            <h2>order your meal </h2>
       </div>
       <div className='meal-container'>
        {          
            allProducts.map((meal,index)=>{               
                
                const{id,price,inCart,image,title} = meal
              
              return <article  className='meal-article' key={id}>               
                    <img src={image} alt={title}  />            
                    <h2>{title}</h2>          
                    <div className='price'>
                        <span>${price}</span>
                        <button onClick={()=> handle(id) } disabled={inCart?true:false}  >
                          {inCart?'in cart':'order'}
                        </button>
                    </div>
                    <div className='container-detail'>
                      <Link to={`/home/${id}`} className='details'>more details</Link>
                    </div>
                

              </article>
            })
        }

       </div>
         
    </section>
  )
}

export default Home

 