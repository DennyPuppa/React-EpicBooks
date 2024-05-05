
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import BookDetails from "./pages/BookDetails"
import ErrorPage from "./pages/ErrorPage"
//Add Welcome

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/book/:asin" element={<BookDetails/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
