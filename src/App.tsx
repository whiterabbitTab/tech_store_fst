import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Layout } from "./layouts/Layout"
import { ProductPage } from "./components/ProductPage/ProductPage"
import { ProductLayout } from "./layouts/ProductLayout"
import { NotFound } from "./components/NotFound/NotFound"
import { Basket } from "./components/Basket/Basket"
import { Contact } from "./pages/Contact/Contact"
import { Auth } from "./pages/Auth/Auth"
import { useTypedDispatch, useTypedSelector } from "./hooks/redux"
import { useEffect } from "react"
import { actions } from "./store/userSlice/user.slice"
import useLocalStorage from "use-local-storage"
import { UserAccount } from "./pages/UserAccount/UserAccount"
import { DashboardMain } from "./components/Dashboard/DashboardMain"
import { DashboardInfo } from "./components/Dashboard/DashboardInfo"

export const App = () => {

  const [isAuth, setIsAuth] = useLocalStorage<string>('isAuth', 'not')
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(actions.authUser(window.localStorage.getItem('isAuth')))
  })

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/product/*" element={<ProductLayout />}>
          <Route path=":id/*" element={<ProductPage />} />
        </Route>
        <Route path="/user/:id/*" element={<UserAccount />}>
          <Route path="main" element={<DashboardMain />} />
          <Route path="information" element={<DashboardInfo/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}