import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import HomePage from './pages/HomePage'
import Store from './pages/Store'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/store" element={<Store />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success" element={<OrderSuccess />} />
            </Routes>
        </MainLayout>
    )
}

export default App
