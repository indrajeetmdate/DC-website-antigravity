import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Store from './pages/Store'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'
import ShoppingCart from './components/store/ShoppingCart'

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <ShoppingCart />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-success" element={<OrderSuccess />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
