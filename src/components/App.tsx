import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import NotFound from "./NotFound";
import AddProduct from './AddProduct';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailed from "./ItemDetailed";
import TestRoutes from './Testroutes';

function App() {
  return (
    <div className="app">
      
        
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/item/:id' element={<ItemDetailed/>}/>
          <Route path='/addProduct' element={<AddProduct/>}/>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>

        
        </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
