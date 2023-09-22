import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Allproducts from "./components/Allproducts/Allproducts";
import AddProduct from "./components/Addproduct/AddProduct";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Allproducts />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update/:product_id" element={<UpdateProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
