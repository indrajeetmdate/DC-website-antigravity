import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import useCartStore from '../../store/cartStore'

export default function ProductCard({ product }) {
    const { addItem } = useCartStore()

    return (
        <div className="bg-white rounded-xl border border-brand-dark-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group h-full">
            <div className="aspect-video bg-gray-100 relative overflow-hidden">
                {/* Fallback Image */}
                <div className="absolute inset-0 flex items-center justify-center bg-brand-dark-50 text-brand-dark-200">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                </div>

                {product.inStock && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold text-brand-dark-900 px-2 py-1 rounded">
                        In Stock
                    </div>
                )}
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="mb-2">
                    <span className="text-[10px] uppercase font-bold text-brand-green-600 bg-brand-green-50 px-2 py-0.5 rounded-full">
                        {product.subcategory || product.category}
                    </span>
                </div>
                <h3 className="font-bold text-brand-dark-900 text-lg mb-2 line-clamp-1" title={product.name}>
                    {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div>
                        {product.price > 0 ? (
                            <span className="font-bold text-brand-dark-900 text-lg">
                                ₹{product.price.toLocaleString('en-IN')}
                            </span>
                        ) : (
                            <span className="text-sm font-semibold text-brand-green-600">
                                Quote
                            </span>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => addItem(product)}
                            className="bg-brand-dark-50 hover:bg-brand-green-100 text-brand-dark-900 px-3 py-2 rounded-lg text-sm font-semibold transition-colors"
                        >
                            Add
                        </button>
                        <Link
                            to={`/product/${product.id}`}
                            className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-green-600 text-white hover:bg-brand-green-700 transition-colors"
                        >
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
