import {Route, Routes} from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import ViewProduct from "./components/ViewProduct";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/products" element={<Products/>} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/view/:id" element={<ViewProduct/>} />
        <Route path="/edit/:id" element={<EditProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
