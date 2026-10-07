import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FindBin from './pages/FindBin'
import BinDetails from './pages/BinDetails'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bins" element={<FindBin />} />
      <Route path="/bins/:id" element={<BinDetails />} />
    </Routes>
  )
}

export default App