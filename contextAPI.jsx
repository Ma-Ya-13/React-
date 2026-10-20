import { useState , useContext} from 'react'
import { CountContext} from './teleport.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CountContext.Provider value={{count}}>
       <Count setCount={setCount} />
    </CountContext.Provider>
     
    </>
  )
}
   function Count( {count, setCount}){
    return(
      <>
      
      <CountRender  />  { /* wwe didnt pass Count state  here from parent but this child require */}

      <Buttons count={count} setCount={setCount} />

      </>
    )

  }
    function  CountRender( ){
      const {count}  = useContext(CountContext)
      return (
        <>
          {count}


        </>
      )

    }
     function  Buttons( { setCount}) {
      const {count}=useContext(CountContext)
      return (
        <>
        <div>
          <button onClick ={ () => setCount(count+1)}>Increment</button>
          <button onClick= {() => setCount(count-1)}>Decrement</button>

        </div>

        </>
      )
     }

export default App
