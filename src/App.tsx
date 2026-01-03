import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import MainLayout from "./layout/MainLayout";

const HomePage = lazy(() => import("./features/home/HomePage"));
const ProductsPage = lazy(() => import("./features/products/ProductsPage"));

function App() {

  return (
    <>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
            </Route>
          </Routes>
        </Suspense>
    </>
  )
}

export default App
