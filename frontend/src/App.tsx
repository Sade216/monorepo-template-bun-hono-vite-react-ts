import { Routes, Route } from "react-router"
import Home from "./pages/Home"

function App() {

  return (
    <>
        <Routes>
            <Route index element={<Home/>} />
            <Route path={"*"} element={
                <div>Error</div>
            } />
        </Routes>
        
    </>
  )
}

export default App
