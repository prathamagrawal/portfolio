import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/layout'
import Contact from './components/Contact'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
