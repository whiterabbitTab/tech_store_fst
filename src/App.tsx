import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Layout } from "./layouts/Layout"
import { ProductPage } from "./components/ProductPage/ProductPage"
import { ProductLayout } from "./layouts/ProductLayout"
import { NotFound } from "./components/NotFound/NotFound"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product/*" element={<ProductLayout />}>
          <Route path=":id/*" element={<ProductPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}