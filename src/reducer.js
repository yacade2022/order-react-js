const reducer = (state,action)=>{
    //order
    if(action.type === 'ORDER'){
        const product = state.allProducts.filter((item)=>item.id === action.payload) 
        return {...state,cart:[...state.cart,...product]}
        }

    // clear the cart 
    if(action.type === 'CLEAR'){
        return {...state,cart:[]}
        }

    //remove the product from the cart
    if(action.type === 'REMOVE'){
        const removeProduct = state.cart.filter((prod)=>prod.id !== action.payload)
        return {...state,cart:removeProduct}
       }

    //increase the amount    
    if(action.type === 'INCREASE'){
        const increase = state.cart.map((item)=> {
            if(item.id === action.payload){
                return{...item, amount : item.amount + 1}
            }
            return item
        })        
        return {...state,cart:increase}
    }

    //decrease the amount 
    if(action.type === 'DECREASE'){
        const decrease = state.cart.map((item)=> {
            if(item.id === action.payload){                
                return{...item, amount : item.amount - 1}
            }
            return item
        })
        .filter((item) => item.amount !== 0) 
    return { ...state, cart: decrease }  
      }

    // get the total price  
    if (action.type === 'TOTALS') {
        let { total, amount } = state.cart.reduce((Tot, Item) => {
            const { price, amount } = Item
            const Totals = price * amount
            Tot.total += Totals
            Tot.amount += amount
            
            return Tot
        },
        {
            total: 0,
            amount: 0,        
        }      
        )
        total = parseFloat(total.toFixed(2))

        return { ...state, total, amount }
    }
}
export default reducer



    
    
   
    
  