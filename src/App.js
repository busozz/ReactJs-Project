import { Route, Routes } from "react-router-dom";
import AddProduct from "./Pages/AddProduct/AddProduct";
import HomePAge from "./Pages/HomePage/HomePAge";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import HomeRoutes from "./Routes/HomeRoutes";
import ProductRoutes from "./Routes/ProductRoutes";


function App() {
  return (
    <div className="bg-primary-background min-h-screen mx-auto max-w-7xl pb-20 relative xl:p-0 px-5">
      <Routes>
        <Route path="/" element={<HomeRoutes />} >
          <Route index element={<HomePAge />} />
        </Route>
        <Route path="/product" element={<ProductRoutes />} >
          <Route path="new" element={<AddProduct />} />
          <Route path=":id" element={<ProductDetail />} />

        </Route>

      </Routes>

    </div>

  );
}

export default App;
