import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { ProgressContext } from "./components/function/Context";
import ScrollToTop from './components/ScrollToTop';


import Homepage from "./pages/Homepage";
import ProgressBar from "./components/ProgressBar";
import Character from "./pages/Character";
import ProductAgentList from './pages/ProductAgentList';

function App() {

  const [progress, setProgress] = useState(0);


  return (
    <ProgressContext.Provider value={{progress,setProgress}}>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route  element={<ProgressBar />}>
            <Route path="/Character" element={<Character />} />
            <Route path="/ProductAgentList" element={<ProductAgentList />} />
            {/* <Route path="/SprintAgentList" element={<Aww name="88"/>} />
            <Route path="/SprintIntroduce" element={<Aww name="88"/>} />
            <Route path="/Retro" element={<Aww name="88"/>} />
            <Route path="/Congratulations" element={<Aww name="88"/>} /> */}

          </Route>
        </Routes>
      
    </ProgressContext.Provider>
  )
}

export default App
