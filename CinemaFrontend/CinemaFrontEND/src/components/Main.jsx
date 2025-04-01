import TestFB from "./TestFB/TestFB"
import TestFB2 from "./TestFB/TestFB2"
import { Routes, Route, BrowserRouter } from "react-router-dom"
function Main() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
            <Route path="/" element={  <TestFB />} > </Route>
            <Route path="/test/:id" element={  <TestFB2 />} > </Route>

            </Routes>
            </BrowserRouter>
          

   
        </div>
    )
}

export default Main
