import "./App.css";
import RefHookData from "./components/RefHook/RefHookData";

import UseEffectData from "./components/useReducer/useEffectData";
import Parent from "./Parent";

function App() {
  return (
    <>
      <Parent />
      <UseEffectData />
      <br />
      <RefHookData />
    </>
  );
}
export default App;
