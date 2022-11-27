import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProgressBar from "./components/ProgressBar";

function App() {


  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route element={<ProgressBar />}>
        {/* <Route path="/character" element={<Character />} /> */}
        {/* <Route path="/ProductAgentList" element={<Aww name="789"/>} />
        <Route path="/SprintAgentList" element={<Aww name="88"/>} />
        <Route path="/SprintIntroduce" element={<Aww name="88"/>} />
        <Route path="/Retro" element={<Aww name="88"/>} />
        <Route path="/Congratulations" element={<Aww name="88"/>} /> */}

      </Route>

    </Routes>
  )
}

export default App
