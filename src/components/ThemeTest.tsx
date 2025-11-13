import React from 'react';

export function ThemeTest() {
  return (
    <div className="p-8 space-y-6 bg-background text-foreground">
      <h1 className="text-3xl font-bold">Theme Test Component</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Color Tests */}
        <div className="p-4 bg-primary text-primary-foreground rounded-lg">
          Primary Color
        </div>
        <div className="p-4 bg-secondary text-secondary-foreground rounded-lg">
          Secondary Color
        </div>
        <div className="p-4 bg-accent text-accent-foreground rounded-lg">
          Accent Color
        </div>
        <div className="p-4 bg-muted text-muted-foreground rounded-lg">
          Muted Color
        </div>
        <div className="p-4 bg-destructive text-destructive-foreground rounded-lg">
          Destructive Color
        </div>
        <div className="p-4 border border-border rounded-lg">
          Border Test
        </div>
      </div>

      {/* Shadow Tests */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Shadow Tests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-card rounded-lg shadow-xs">
            Shadow XS
          </div>
          <div className="p-4 bg-card rounded-lg shadow-sm">
            Shadow SM
          </div>
          <div className="p-4 bg-card rounded-lg shadow-md">
            Shadow MD
          </div>
          <div className="p-4 bg-card rounded-lg shadow-lg">
            Shadow LG
          </div>
          <div className="p-4 bg-card rounded-lg shadow-xl">
            Shadow XL
          </div>
          <div className="p-4 bg-card rounded-lg shadow-2xl">
            Shadow 2XL
          </div>
        </div>
      </div>

      {/* Chart Colors */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Chart Colors</h2>
        <div className="grid grid-cols-5 gap-4">
          <div className="p-4 bg-chart-1 text-white rounded-lg">Chart 1</div>
          <div className="p-4 bg-chart-2 text-white rounded-lg">Chart 2</div>
          <div className="p-4 bg-chart-3 text-white rounded-lg">Chart 3</div>
          <div className="p-4 bg-chart-4 text-white rounded-lg">Chart 4</div>
          <div className="p-4 bg-chart-5 text-white rounded-lg">Chart 5</div>
        </div>
      </div>

      {/* Font Tests */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Font Tests</h2>
        <p className="font-sans">Sans Font (Inter)</p>
        <p className="font-serif">Serif Font (Source Serif 4)</p>
        <p className="font-mono">Mono Font (JetBrains Mono)</p>
      </div>

      {/* Sidebar Colors */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Sidebar Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-sidebar text-sidebar-foreground rounded-lg">
            Sidebar Background
          </div>
          <div className="p-4 bg-sidebar-primary text-sidebar-primary-foreground rounded-lg">
            Sidebar Primary
          </div>
          <div className="p-4 bg-sidebar-accent text-sidebar-accent-foreground rounded-lg">
            Sidebar Accent
          </div>
        </div>
      </div>

      {/* Card Component */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Card Component</h2>
        <div className="card p-6 space-y-2">
          <h3 className="text-lg font-semibold">Card Title</h3>
          <p className="text-muted-foreground">
            This is a card component using the theme colors. It should have proper background,
            text colors, and borders.
          </p>
        </div>
      </div>

      {/* Button Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Button Examples</h2>
        <div className="flex gap-4 flex-wrap">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
            Primary Button
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity">
            Secondary Button
          </button>
          <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity">
            Accent Button
          </button>
          <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:opacity-90 transition-opacity">
            Destructive Button
          </button>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Dark Mode Test</h2>
        <p>
          Toggle dark mode in your browser or using the theme toggle to see how the colors adapt.
          The theme should seamlessly switch between light and dark variants.
        </p>
      </div>
    </div>
  );
}
