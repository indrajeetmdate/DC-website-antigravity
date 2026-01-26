import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(
    persist(
        (set, get) => ({
            items: [],
            isCartOpen: false,

            // Add item to cart
            addItem: (product, quantity = 1) => {
                const items = get().items
                const existingItem = items.find((item) => item.id === product.id)

                if (existingItem) {
                    set({
                        items: items.map((item) =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + quantity }
                                : item
                        ),
                    })
                } else {
                    set({
                        items: [...items, { ...product, quantity }],
                    })
                }
            },

            // Remove item from cart
            removeItem: (productId) => {
                set({
                    items: get().items.filter((item) => item.id !== productId),
                })
            },

            // Update item quantity
            updateQuantity: (productId, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(productId)
                    return
                }

                set({
                    items: get().items.map((item) =>
                        item.id === productId ? { ...item, quantity } : item
                    ),
                })
            },

            // Clear cart
            clearCart: () => {
                set({ items: [] })
            },

            // Toggle cart drawer
            toggleCart: () => {
                set({ isCartOpen: !get().isCartOpen })
            },

            // Open cart
            openCart: () => {
                set({ isCartOpen: true })
            },

            // Close cart
            closeCart: () => {
                set({ isCartOpen: false })
            },

            // Get cart totals
            getCartTotals: () => {
                const items = get().items
                const subtotal = items.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                )
                const tax = subtotal * 0.18 // GST 18%
                const shipping = subtotal > 100000 ? 0 : 500 // Free shipping above ₹1 lakh
                const total = subtotal + tax + shipping

                return {
                    subtotal,
                    tax,
                    shipping,
                    total,
                    itemCount: items.reduce((count, item) => count + item.quantity, 0),
                }
            },
        }),
        {
            name: 'dc-energy-cart-storage', // localStorage key
        }
    )
)

export default useCartStore
