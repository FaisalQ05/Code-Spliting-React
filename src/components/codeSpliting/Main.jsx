// import { sum } from "../../sum"

import { Link, Outlet, Route, Routes } from "react-router-dom"
import Home from "./Home"
// import { About } from "./About"
// import Store from "./Store"
import { Suspense, lazy } from "react"

const Store = lazy(() =>
  wait(1000).then(() => {
    return import("./Store")
  })
)

const About = lazy(() =>
  wait(1000).then(() => {
    return import("./About").then((module) => {
      return { default: module.About }
    })
  })
)

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<NavWrapper />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Route>
    </Routes>
  )
}

const NavWrapper = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </nav>
      <Suspense fallback={<h1>....Loading</h1>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Main

const wait = (duration) => {
  return new Promise((res) => {
    setTimeout(res, duration)
  })
}
