import "../index.css";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import NotFound from "./NotFound";
import AddProduct from "./AddProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailed from "./ItemDetailed";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/item/:id" element={<ItemDetailed />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
