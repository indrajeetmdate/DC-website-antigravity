import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, Tab, Card, CardBody, CardHeader, Button } from '@heroui/react'
import { Battery, Zap, Sun, ArrowRight } from 'lucide-react'
import productsData from '../data/products.json'

export default function ProductShowcase() {
    const [selected, setSelected] = useState('ess')

    const categories = {
        ess: {
            title: 'Energy Storage Systems',
            icon: Battery,
            description: 'Home inverters, lift backup, and large-scale custom ESS solutions',
            products: productsData.ess,
        },
        mobility: {
            title: 'Mobility Solutions',
            icon: Zap,
            description: '2W/3W EV batteries, forklifts, and custom EV solutions',
            products: productsData.mobility,
        },
        specialized: {
            title: 'Specialized Solutions',
            icon: Sun,
            description: 'PC UPS, solar streetlights, drones, and micro-battery packs',
            products: productsData.specialized,
        },
    }

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
                        Our Product Range
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive battery solutions for every application. From homes to industries.
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex justify-center mb-12">
                    <Tabs
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                        size="lg"
                        color="success"
                        variant="underlined"
                        classNames={{
                            tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                            cursor: "w-full bg-brand-green-500",
                            tab: "max-w-fit px-0 h-12",
                            tabContent: "group-data-[selected=true]:text-brand-green-600"
                        }}
                    >
                        {Object.entries(categories).map(([key, category]) => {
                            const Icon = category.icon
                            return (
                                <Tab
                                    key={key}
                                    title={
                                        <div className="flex items-center space-x-2">
                                            <Icon className="w-5 h-5" />
                                            <span className="font-semibold">{category.title}</span>
                                        </div>
                                    }
                                />
                            )
                        })}
                    </Tabs>
                </div>

                {/* Products Grid */}
                <motion.div
                    key={selected}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8"
                >
                    <div className="text-center mb-8">
                        <p className="text-gray-600">{categories[selected].description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories[selected].products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
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
                                            {product.inStock && (
                                                <span className="text-xs bg-brand-green-100 text-brand-green-700 px-2 py-1 rounded-full">
                                                    In Stock
                                                </span>
                                            )}
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
                                                    <p className="text-sm text-gray-400 line-through">
                                                        ₹{product.listPrice.toLocaleString('en-IN')}
                                                    </p>
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
                </motion.div>

                {/* View All CTA */}
                <div className="text-center mt-12">
                    <a href="/store">
                        <Button
                            size="lg"
                            color="success"
                            variant="flat"
                            className="font-semibold"
                            endContent={<ArrowRight className="w-5 h-5" />}
                        >
                            View All Products in Store
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}
