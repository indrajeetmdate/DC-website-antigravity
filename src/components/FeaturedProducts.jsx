import { motion } from 'framer-motion'
import { Card, CardBody, CardHeader, Button } from '@heroui/react'
import { ArrowRight } from 'lucide-react'
import productsData from '../data/products.json'

export default function FeaturedProducts() {
    // Select top 3 products (one from each category or just first 3)
    const featuredProducts = [
        productsData.ess[0],
        productsData.mobility[0],
        productsData.specialized[0]
    ].filter(Boolean)

    return (
        <section id="products" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark-900 mb-4">
                        Featured Products
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our top-rated lithium battery solutions.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
                                <CardHeader className="flex-col items-start pb-0 pt-6 px-6">
                                    <div className="flex justify-between items-start w-full mb-2">
                                        <div>
                                            <p className="text-tiny uppercase font-bold text-brand-green-600">
                                                {product.subcategory}
                                            </p>
                                            <h4 className="font-bold text-xl mt-1">{product.name}</h4>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardBody className="py-4 px-6">
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                        {product.description}
                                    </p>

                                    {/* Specs */}
                                    <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                                        <div className="bg-gray-100 p-2 rounded">
                                            <p className="text-gray-500">Voltage</p>
                                            <p className="font-semibold">{product.specifications.voltage}</p>
                                        </div>
                                        <div className="bg-gray-100 p-2 rounded">
                                            <p className="text-gray-500">Capacity</p>
                                            <p className="font-semibold">{product.specifications.capacity}</p>
                                        </div>
                                        <div className="bg-gray-100 p-2 rounded">
                                            <p className="text-gray-500">Chemistry</p>
                                            <p className="font-semibold">{product.specifications.chemistry}</p>
                                        </div>
                                    </div>

                                    {/* Price & CTA */}
                                    <div className="flex justify-between items-center">
                                        {product.price > 0 ? (
                                            <div>
                                                <p className="text-2xl font-bold text-brand-green-600">
                                                    ₹{product.price.toLocaleString('en-IN')}
                                                </p>
                                            </div>
                                        ) : (
                                            <p className="text-lg font-semibold text-brand-green-600">
                                                Contact for Quote
                                            </p>
                                        )}
                                        <a href={`/product/${product.id}`}>
                                            <Button
                                                color="success"
                                                variant="flat"
                                                size="sm"
                                                endContent={<ArrowRight className="w-4 h-4" />}
                                            >
                                                View Details
                                            </Button>
                                        </a>
                                    </div>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center">
                    <a href="/store">
                        <Button
                            size="lg"
                            color="success"
                            variant="shadow"
                            className="font-semibold px-8 py-6 text-lg"
                            endContent={<ArrowRight className="w-5 h-5" />}
                        >
                            View Entire Collection
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}
