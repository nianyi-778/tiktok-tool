// import Avatar from 'components/Avatar'
import Layout from 'components/Layout'
import Menus from 'scripts/Menus'
import Header from 'components/Header'
import './index.css'

function App() {
  return (<>
    <Header />
    <Layout>
      <div className="bg-white">
        <Menus />
      </div>
    </Layout>
  </>
  )
}

export default App
