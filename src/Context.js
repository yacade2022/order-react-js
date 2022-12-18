import React,{useContext,useEffect,useReducer,useState} from "react";
import { products } from "./data";


import reducer from "./reducer";









export const ContainerContext = React.createContext()

const initial = {
    allProducts:products,
    cart:[],    
    total:0,
    
}


export const ProviderContext = ({children})=>{
    const [showLinks, setShowLinks] = useState(false)
    
    const[isSidebarOpen,setIsSidebarOpen] = useState(false)
    
    const [state,dispatch] = useReducer(reducer,initial)

    const add = (id)=>{

        dispatch({type:'ORDER',payload:id})
        
    }
    const clearCart = ()=>{
        dispatch({type:'CLEAR'})
    }

    const remove =(id)=>{
        dispatch({type:'REMOVE',payload:id})
    }
    

    const openSidebar = ()=>{
        setIsSidebarOpen(true)
    }
    const closeSidebar = ()=>{
        setIsSidebarOpen(false)
        
    }

    
   const increaseAmount = (id)=>{
    dispatch({type:'INCREASE',payload:id})
   }
   const decreaseAmount = (id)=>{
    dispatch({type:'DECREASE',payload:id})
   }
    
    

    
   useEffect(() => {
        
    dispatch({ type: 'TOTALS' })
  }, [state.cart])
    
 
    
    
    return(
    <ContainerContext.Provider value={{...state,showLinks,clearCart,
    setShowLinks,
    
    isSidebarOpen,
    setIsSidebarOpen,remove,increaseAmount,decreaseAmount,
   
    openSidebar,
    closeSidebar,add
    }}>
        {children}
    </ContainerContext.Provider>
    )
}
export const useAllContext = ()=>{
    return useContext(ContainerContext)
}
