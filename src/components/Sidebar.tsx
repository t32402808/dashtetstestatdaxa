import React from 'react';
import { LayoutDashboard, LineChart, Volume2, TrendingUp, Wallet, Crown, ArrowRightLeft, Bell, Menu } from 'lucide-react';
import { cn } from '../utils/cn';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
  { icon: LineChart, label: 'Market Cap Flow', href: '#' },
  { icon: Volume2, label: 'Volume Monitor', href: '#' },
  { icon: TrendingUp, label: 'Bonding Curve', href: '#' },
  { icon: Wallet, label: 'DexPrepaid', href: '#' },
  { icon: Bell, label: 'Insider Buys', href: '#' },
  { icon: Crown, label: 'KOTH Rise', href: '#' },
  { icon: ArrowRightLeft, label: 'Migrated Tokens', href: '#' },
];

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  return (
    <div className={cn(
      "flex flex-col h-screen bg-black border-r border-green-900/50 transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-green-900/50">
        <span className={cn(
          "text-green-500 font-mono transition-opacity",
          isCollapsed ? "opacity-0 hidden" : "opacity-100"
        )}>
          TG Dashboard
        </span>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-green-900/20 rounded-lg"
        >
          <Menu className="w-5 h-5 text-green-500" />
        </button>
      </div>
      
      <nav className="flex-1 p-2">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-2 px-3 py-2 text-green-500 hover:bg-green-900/20 rounded-lg group"
          >
            <item.icon className="w-5 h-5 shrink-0" />
            <span className={cn(
              "font-mono transition-opacity",
              isCollapsed ? "opacity-0 hidden" : "opacity-100"
            )}>
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}