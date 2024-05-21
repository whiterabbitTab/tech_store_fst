import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Layout } from "./layouts/Layout"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

