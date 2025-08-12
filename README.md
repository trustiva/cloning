# Squarespace Clone

An exact clone of the Squarespace website built with modern web technologies, featuring the same design, layout, and functionality.

## 🚀 Features

- **Exact Design Replication**: Pixel-perfect recreation of Squarespace's homepage and key pages
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Component Architecture**: Modular, reusable components for maintainability
- **Performance Optimized**: Fast loading with modern build tools

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Main navigation header
│   ├── Footer.tsx      # Comprehensive footer
│   ├── TopBanner.tsx   # Promotional banner
│   ├── HeroSection.tsx # Main hero section
│   ├── FAQSection.tsx  # FAQ accordion
│   └── ...            # Other components
├── pages/              # Page components
│   ├── HomePage.tsx    # Main homepage
│   ├── TemplatesPage.tsx # Templates showcase
│   ├── SupportPage.tsx # Support page
│   └── FAQPage.tsx     # FAQ page
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Design System

The project uses a custom Tailwind CSS configuration that matches Squarespace's design system:

- **Colors**: Exact color palette matching Squarespace's brand
- **Typography**: Google Fonts (Inter + Playfair Display)
- **Spacing**: Consistent spacing scale
- **Shadows**: Custom shadow system for depth
- **Animations**: Smooth transitions and micro-interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd squarespace-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Pages & Components

### Homepage
- Hero section with "A website makes it real" message
- Domain search functionality
- Feature showcases (website creation, ecommerce, marketing)
- Template previews
- FAQ section
- Support options

### Templates Page
- Category-based template browsing
- Interactive template previews
- Responsive grid layout

### Support Page
- Multiple support channels
- Interactive support cards
- Contact information

### FAQ Page
- Searchable FAQ system
- Categorized questions
- Expandable answers

## 🎯 Key Features Implemented

- **Navigation**: Sticky header with dropdown menus
- **Promotional Banner**: Dismissible top banner with discount codes
- **Hero Section**: Animated hero with glass sculptures and laptop preview
- **Domain Search**: Functional search interface
- **Feature Sections**: Responsive two-column layouts
- **Template Showcase**: Interactive template previews
- **FAQ System**: Searchable accordion with categories
- **Support Cards**: Interactive support options
- **Footer**: Comprehensive multi-column footer
- **Responsive Design**: Mobile-first approach

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  'squarespace': {
    black: '#000000',
    white: '#ffffff',
    gray: { /* ... */ },
    red: { /* ... */ },
    orange: { /* ... */ },
    // ... more colors
  }
}
```

### Typography
Modify font families in the Tailwind config:

```javascript
fontFamily: {
  'serif': ['Georgia', 'serif'],
  'sans': ['Inter', 'system-ui', 'sans-serif'],
  'display': ['Playfair Display', 'serif'],
}
```

### Animations
Custom animations are defined in the Tailwind config and can be modified:

```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'slide-down': 'slideDown 0.3s ease-out',
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🚀 Performance Features

- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Images and components load on demand
- **Optimized Build**: Vite for fast development and optimized production builds
- **CSS Optimization**: Tailwind CSS purging for minimal CSS output

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is for educational purposes only. All design elements and branding belong to Squarespace.

## 🙏 Acknowledgments

- **Squarespace** for the original design inspiration
- **Unsplash** for high-quality images
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **React Team** for the amazing framework

## 📞 Support

If you have any questions or need help with the project, please open an issue on GitHub.

---

**Note**: This is a clone project created for educational purposes. It demonstrates modern web development techniques and should not be used for commercial purposes.
