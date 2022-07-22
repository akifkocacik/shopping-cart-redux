import CartPage from "./pages/CartPage"
import HomePage from "./pages/HomePage"
import { Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}

export default App