# DC Energy - Corporate Website

![DC Energy Logo](public/logo.png)

**Truly Made in India** | Lithium Battery Solutions

## 🚀 Live Demo

Deployed on Vercel: [Coming Soon]

## 📋 Overview

Modern corporate website for DC Energy (Datlion Cnergy Pvt. Ltd.) featuring:
- **IIT Kanpur Scientific Heritage** - Research-backed battery technology
- **35+ Years Business Legacy** - Trusted family business
- **Complete E-commerce Platform** - Full shopping cart and checkout
- **Cell-to-Circuit Excellence** - Complete design and manufacturing control

## ✨ Features

### Corporate Sections
- 🎯 Hero section with animated particles and brand messaging
- 🔋 Product showcase with 11 battery solutions (ESS, Mobility, Specialized)
- 🔬 Cell-to-Circuit technical differentiation
- 👥 Team section featuring 5 key members
- 📊 Technical specifications with sortable data grid

### E-commerce Functionality
- 🛒 Shopping cart with localStorage persistence
- 🔍 Product search and filtering
- 📦 Detailed product pages with specifications
- 💳 Multi-step checkout flow
- 🎉 Order confirmation with confetti animation
- 💰 GST calculation (18%) and free shipping above ₹1 lakh

## 🛠 Technology Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **UI Components**: HeroUI (NextUI successor) + Material UI
- **State Management**: Zustand
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Product Catalog

- **ESS**: Home inverters, Lift backup, Custom solutions
- **Mobility**: 2W/3W EV batteries, Forklifts, Custom EV packs
- **Specialized**: UPS, Solar lights, Drones, Micro packs

## 🚀 Deployment Instructions

### Deploy to Vercel

1. **Connect GitHub Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import: `https://github.com/indrajeetmdate/DC-website-antigravity.git`

2. **Configure Build Settings**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables** (Optional for Razorpay)
   ```
   VITE_RAZORPAY_KEY_ID=your_key_id
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait ~2 minutes for build
   - Your site will be live at: `https://your-project.vercel.app`

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Navigation with cart
│   ├── Footer.jsx              # Company info
│   ├── Hero.jsx                # Hero section
│   ├── ProductShowcase.jsx     # Product tabs
│   ├── CellToCircuit.jsx       # Technical section
│   ├── Team.jsx                # Team members
│   ├── TechnicalSpecs.jsx      # Specs table
│   └── store/
│       ├── ShoppingCart.jsx    # Cart drawer
│       └── ProductCard.jsx     # Product card
├── pages/
│   ├── HomePage.jsx            # Landing page
│   ├── Store.jsx               # Product catalog
│   ├── ProductDetail.jsx       # Product details
│   ├── Checkout.jsx            # Checkout flow
│   └── OrderSuccess.jsx        # Confirmation
├── store/
│   └── cartStore.js            # Zustand cart
├── data/
│   └── products.json           # Product data
└── App.jsx                     # Main app
```

## 🎨 Brand Colors

- **Primary Green**: `#22c55e` - Energy and growth
- **Dark Background**: `#111827` - Professional and modern
- **India Colors**: Saffron, White, Green (accents)

## 👥 Team

- **Milind Date** - Strategy & Business
- **Indrajeet Date** - Technology & Development
- **Agneya Date** - Legal & Compliance
- **Shirish Date** - Finance & Admin
- **Swapnil Bangude** - Production

## 🔄 Razorpay Integration

The checkout is prepared for Razorpay integration. Required backend endpoints:

```javascript
// POST /api/orders/create
// Creates order and returns order_id

// POST /api/orders/verify  
// Verifies payment signature
```

## 📝 License

© 2026 Datlion Cnergy Pvt. Ltd. All rights reserved.

## 🤝 Support

For questions or support:
- Email: info@dcenergy.in
- Location: Pune, Maharashtra, India

---

**Truly Made in India** 🇮🇳 | Powered by IIT Kanpur Science + 35 Years Business Excellence
