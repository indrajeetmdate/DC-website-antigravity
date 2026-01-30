import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingCart } from 'lucide-react'
import useCartStore from '../store/cartStore'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()
    const { getCartTotals, openCart } = useCartStore()
    const { itemCount } = getCartTotals()

    // Handle scroll effect for transparency
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/#products' }, // Hash links for Home sections might need handling if on other pages
        { name: 'Store', path: '/store' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    const isActive = (path) => {
        if (location.pathname === path) return true
        if (path.includes('#') && location.pathname === '/') return false // Simplified for now
        return false
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                    ? 'bg-brand-dark-900/95 backdrop-blur-md border-brand-green-900/30 py-3 shadow-lg'
                    : 'bg-transparent border-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img
                            src="/logo.png"
                            alt="DC Energy"
                            className="h-10 w-auto brightness-0 invert"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${isActive(link.path)
                                        ? 'text-brand-green-500'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        {/* Cart Button */}
                        <button
                            onClick={openCart}
                            className="group flex items-center gap-2 text-gray-300 hover:text-brand-green-500 transition-colors"
                        >
                            <div className="relative">
                                <ShoppingCart className="w-5 h-5" />
                                {itemCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-brand-green-500 text-brand-dark-900 text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                                        {itemCount}
                                    </span>
                                )}
                            </div>
                            <span className="hidden lg:block text-sm font-medium group-hover:text-brand-green-500">Cart</span>
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-gray-300 hover:text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-brand-dark-800 animate-fade-in bg-brand-dark-900 rounded-b-2xl shadow-xl absolute left-0 right-0 px-6 pb-6 top-full border-b border-brand-green-900/30">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-base font-medium text-gray-300 hover:text-brand-green-500 py-2 border-b border-brand-dark-800 last:border-0"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
