import { motion } from 'framer-motion'
import { DataGrid } from '@mui/x-data-grid'
import productsData from '../data/products.json'

export default function TechnicalSpecs() {
    // Combine all products for the table
    const allProducts = [
        ...productsData.ess,
        ...productsData.mobility,
        ...productsData.specialized,
    ]

    // Focus on mobility products as specified
    const mobilityProducts = productsData.mobility

    const columns = [
        {
            field: 'name',
            headerName: 'Product Name',
            width: 250,
            renderCell: (params) => (
                <div>
                    <div className="font-semibold">{params.value}</div>
                    <div className="text-xs text-gray-500">{params.row.subcategory}</div>
                </div>
            ),
        },
        {
            field: 'voltage',
            headerName: 'Voltage',
            width: 120,
            renderCell: (params) => (
                <span className="font-mono">{params.row.specifications.voltage}</span>
            ),
        },
        {
            field: 'capacity',
            headerName: 'Capacity',
            width: 120,
            renderCell: (params) => (
                <span className="font-mono">{params.row.specifications.capacity}</span>
            ),
        },
        {
            field: 'chemistry',
            headerName: 'Chemistry',
            width: 120,
            renderCell: (params) => (
                <span className="px-2 py-1 bg-brand-green-100 text-brand-green-700 rounded text-xs font-semibold">
                    {params.row.specifications.chemistry}
                </span>
            ),
        },
        {
            field: 'cycles',
            headerName: 'Cycle Life',
            width: 120,
            renderCell: (params) => params.row.specifications.cycles,
        },
        {
            field: 'warranty',
            headerName: 'Warranty',
            width: 120,
            renderCell: (params) => params.row.specifications.warranty,
        },
        {
            field: 'application',
            headerName: 'Application',
            width: 200,
            renderCell: (params) => params.row.applications.join(', '),
        },
        {
            field: 'price',
            headerName: 'Price (₹)',
            width: 150,
            renderCell: (params) => (
                params.value > 0
                    ? `₹${params.value.toLocaleString('en-IN')}`
                    : 'Contact for Quote'
            ),
        },
    ]

    const rows = mobilityProducts.map((product, index) => ({
        id: product.id,
        ...product,
    }))

    return (
        <section id="specs" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark-900 mb-4">
                        Technical Specifications
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Detailed specifications for our <span className="text-brand-green-600 font-semibold">Mobility range</span> (2W/3W batteries).
                        Sort and filter to find the perfect solution for your application.
                    </p>
                </motion.div>

                {/* Data Table */}
                <motion.div
                    className="w-full bg-white rounded-2xl shadow-xl p-6 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 },
                            },
                        }}
                        pageSizeOptions={[5, 10, 20]}
                        disableRowSelectionOnClick
                        sx={{
                            border: 'none',
                            '& .MuiDataGrid-cell': {
                                borderBottom: '1px solid #f0f0f0',
                            },
                            '& .MuiDataGrid-columnHeaders': {
                                backgroundColor: '#f9fafb',
                                borderBottom: '2px solid #22c55e',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                            },
                            '& .MuiDataGrid-row:hover': {
                                backgroundColor: '#f0fdf4',
                            },
                        }}
                    />
                </motion.div>

                {/* Note */}
                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>
                        For complete specifications of all product categories, visit our{' '}
                        <a href="/store" className="text-brand-green-600 hover:underline font-semibold">
                            Store
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}
