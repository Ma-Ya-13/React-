
import { RecoilRoot, useRecoilValue } from "recoil";
import { todosAtomFamily } from "./atoms";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  if (!currentTodo) {
    return <div>Todo not found</div>;
  }

  return (
    <>
      <h2>{currentTodo.title}</h2>
      <p>{currentTodo.description}</p>
    </>
  );
}

export default App;
