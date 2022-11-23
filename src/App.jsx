import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {


  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/character" element={<Aww name="456"/>} />
      <Route path="/ProductAgentList" element={<Aww name="789"/>} />
      <Route path="/SprintAgentList" element={<Aww name="88"/>} />
      <Route path="/SprintIntroduce" element={<Aww name="88"/>} />
      <Route path="/Retro" element={<Aww name="88"/>} />
      <Route path="/Congratulations" element={<Aww name="88"/>} /> */}
    </Routes>
  )
}

export default App
