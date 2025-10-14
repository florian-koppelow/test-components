# Test Components

A collection of reusable React components created from Figma designs.

## Components

### Card Component
A flexible card component with background image, gradient overlay, and optional badge.

**Features:**
- Background image with gradient overlay
- Optional badge in top-left corner
- Clickable with hover effects
- Responsive design
- TypeScript support
- Customizable styling

**Usage:**
```tsx
<Card title="Reale Strecken" badge="420" />
<Card title="Interactive Card" onClick={() => console.log('Clicked!')} />
```

## Development

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup
```bash
npm install
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Live Demo
Visit http://localhost:3000 to see the components in action.

## Technologies Used
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Inter Font
- ImageMagick (for placeholder images)
