import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ShoppingCart from './store/ShoppingCart'

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-brand-dark-900 text-white font-sans selection:bg-brand-green-500 selection:text-white">
            <Header />
            <ShoppingCart />
            <main className="flex-grow w-full">
                {children}
            </main>
            <Footer />
        </div>
    )
}
