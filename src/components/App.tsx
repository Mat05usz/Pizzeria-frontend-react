import "../index.css";
import Nav from "./nav/Nav";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import NotFound from "./not_found/NotFound";
import AddProduct from "./management/AddProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailed from "./menu/menu_item/ItemDetailed";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/item/:name" element={<ItemDetailed />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
