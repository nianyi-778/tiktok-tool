import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Spin } from 'antd'
import Layout from 'components/Layout'
import Header from 'components/Header'
import 'antd/dist/antd.css'
const Home = lazy(
  () => import(/* webpackChunkName: "Home" */ './scripts/Home/index')
)
const Douyin = lazy(
  () => import(/* webpackChunkName: "Douyin" */ './scripts/Douyin/index')
)

function App() {
  return (
    <>
      <Header />
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route
              path="/douyin"
              element={
                <Suspense fallback={<Spin />}>
                  <Douyin />
                </Suspense>
              }
            ></Route>
            <Route
              path="/"
              element={
                <Suspense fallback={<Spin />}>
                  <Home />
                </Suspense>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  )
}

export default App
