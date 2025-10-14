import React from 'react';
import Card from './Card';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Card Component Demo</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Original card from Figma */}
          <div className="h-64">
            <Card title="Reale Strecken" badge="420" />
          </div>
          
          {/* Interactive card */}
          <div className="h-64">
            <Card 
              title="Interactive Card" 
              badge="25" 
              onClick={() => alert('Card clicked!')}
            />
          </div>
          
          {/* Card without badge */}
          <div className="h-64">
            <Card title="Simple Card" />
          </div>
          
          {/* Card with custom styling */}
          <div className="h-64">
            <Card 
              title="Custom Card" 
              badge="99" 
              className="hover:scale-105 transition-transform duration-200"
              onClick={() => console.log('Custom card clicked')}
            />
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Component Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Background image with gradient overlay</li>
            <li>Optional badge in top-left corner</li>
            <li>Clickable with hover effects</li>
            <li>Responsive design</li>
            <li>TypeScript support</li>
            <li>Customizable styling</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
