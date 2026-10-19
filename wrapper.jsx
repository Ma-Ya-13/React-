import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
    
  return (
    <>
     <CardWrapper>
     
        
        <CardWrapper>
             Hi there
           <textcomponent/>
        </CardWrapper>
     </CardWrapper>
        <CardWrapper>
          // just write you r logic in this warpper 
          //  the website    wrapper you created 
        i am manu yadav  studying the card wrapper 
     </CardWrapper>
    </>
  )
}

  function textcomponent(){
    return (
      <div>
        hi form textcomponent
      </div>
    )
  }
  function CardWrapper({ children }){
      // console.log(children)
    return (<div style ={ {border :"2px solid black" , padding :20    }}>
{children}
    </div>)

  }
export default App
