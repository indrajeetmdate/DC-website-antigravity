import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Toaster } from 'sonner'
import App from './App'
import './index.css'

// MUI theme with DC Energy brand colors
const theme = createTheme({
    palette: {
        primary: {
            main: '#22c55e', // Brand green
            light: '#4ade80',
            dark: '#16a34a',
        },
        secondary: {
            main: '#111827', // Brand dark
            light: '#374151',
            dark: '#000000',
        },
        background: {
            default: '#ffffff',
            paper: '#f9fafb',
        },
    },
    typography: {
        fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
        h1: {
            fontFamily: '"Outfit", system-ui, sans-serif',
            fontWeight: 800,
        },
        h2: {
            fontFamily: '"Outfit", system-ui, sans-serif',
            fontWeight: 700,
        },
        h3: {
            fontFamily: '"Outfit", system-ui, sans-serif',
            fontWeight: 700,
        },
    },
    shape: {
        borderRadius: 12,
    },
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <HeroUIProvider>
                    <CssBaseline />
                    <App />
                    <Toaster position="top-right" richColors />
                </HeroUIProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
