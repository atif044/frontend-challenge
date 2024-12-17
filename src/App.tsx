import { RecoilRoot } from "recoil";
import TodoList from "./@ui/Pages/TodoList";
// import backgroundImage from "./assets/bgImage3.jpg";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <RecoilRoot>
        <Toaster position="bottom-right" />
        <TodoList />
      </RecoilRoot>
    </>
  );
}

export default App;
