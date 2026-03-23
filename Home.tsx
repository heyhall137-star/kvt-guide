import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  Home, 
  ListTodo, 
  BarChart3, 
  Mic2, 
  Trophy, 
  Vote, 
  Radio, 
  LineChart,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Getting Started', path: '/getting-started', icon: ListTodo },
  { name: 'Music Platforms', path: '/platforms', icon: BarChart3 },
  { name: 'Music Shows', path: '/music-shows', icon: Mic2 },
  { name: 'Awards', path: '/awards', icon: Trophy },
  { name: 'Voting & Support', path: '/voting', icon: Vote },
  { name: 'Radio Requests', path: '/radio', icon: Radio },
  { name: 'Tracking Tools', path: '/tracking', icon: LineChart },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-red-900 selection:text-white flex">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-neutral-900 border-b border-red-900/30 flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-2 text-red-500 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white">K</div>
          FAN GUIDE
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-neutral-400 hover:text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-neutral-900 border-r border-red-900/30 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex-shrink-0",
        isMobileMenuOpen ? "translate-x-0 pt-16" : "-translate-x-full"
      )}>
        <div className="h-full flex flex-col">
          <div className="hidden lg:flex h-16 items-center px-6 border-b border-red-900/30">
            <div className="flex items-center gap-2 text-red-500 font-bold text-xl tracking-tight">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white">K</div>
              FAN GUIDE
            </div>
          </div>
          
          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-red-950/50 text-red-400 border border-red-900/50" 
                    : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200"
                )}
              >
                <item.icon size={18} />
                {item.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="p-4 border-t border-red-900/30">
            <div className="text-xs text-neutral-500 text-center">
              Data synced via Google Sheets
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 overflow-y-auto lg:pt-0 pt-16 bg-neutral-950">
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
