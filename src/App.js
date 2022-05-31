
import './App.scss';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Layout from './components/layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}/>
    </Routes>
  )
}

export default App;
