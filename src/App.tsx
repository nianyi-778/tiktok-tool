import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Spin, ConfigProvider } from 'antd'
import Layout from 'components/Layout'
import Header from 'components/Header'
import './index.less'

const Home = lazy(
  () => import(/* webpackChunkName: "Home" */ './scripts/Home/index')
)
const Douyin = lazy(
  () => import(/* webpackChunkName: "Douyin" */ './scripts/Douyin/index')
)

function App() {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Header />
        <Layout>
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
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
