import { RecoilRoot , useRecoilState , useRecoilValue } from "recoil";
import {countAtoms} from "./store/atoms/count.jsx"
import "./App.css";


function App() {
  return (
    <>
    <RecoilRoot>
       <Count />
    </RecoilRoot>
   
    </>
  )
}
  function Count(){
    return (
      <div>
        <CountRender />
        <Button />
      </div>

    )

  }
    function CountRender(){
       const count = useRecoilValue(countAtoms);
       return (
        <>
       <h2>{count}</h2>;
        </>
       )

    }
    function Button(){
      const [count , setCount] = useRecoilState(countAtoms);
      return (
        <>
        <button onClick ={ () => setCount(count+1)}>Increment</button>
        <button onClick ={ () => setCount(count-1)}> Decrement</button>
        </>
      )


    }

export default App
