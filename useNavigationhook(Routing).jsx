import { useState } from 'react'
import { BrowserRouter, Routes, Route  , useNavigate} from 'react-router-dom'
import { Dashboard } from './Components/dashboard'
import { Landing } from './Components/landing'



function App() {
   
  return (
    <>
      <div>
        
         {/* fixed top bar */}
        <div style={{background :"black" , color:"white"}}>
       <h1> HI This is The Topbar</h1>
        </div>
           <BrowserRouter>
           
           <Appbar />     {  /*   /  parren hi  button ko render karde  // child ki ajeurt nahi  */}
             <Routes>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/' element={<Landing/>} />

    </Routes>
   

           
   

    </BrowserRouter>

      </div>
 
  </>
  )
}

 function Appbar() {
   const navigate = useNavigate(); 
   return (
     <div>
          <button onClick={()=> {navigate('/dashboard')}}>go to Dashboard</button>
          <button onClick={()=> {navigate('/') }}>go to landing page</button> 

 
         </div>

       


   )
 }

export default App
