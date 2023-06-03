import "./App.css";

import SideNavBar from "./components/sideNavBar/SideNavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Comment from "./pages/Comment";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <>
      <Router>
        <SideNavBar>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/comment" element={<Comment />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/productList" element={<ProductList />}></Route>
            <Route path="/analytics" element={<Analytics />}></Route>
          </Routes>
        </SideNavBar>
      </Router>
    </>
  );
}

export default App;
