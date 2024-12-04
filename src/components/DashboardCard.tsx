import React from 'react';
import { cn } from '../utils/cn';

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function DashboardCard({ title, children, className }: DashboardCardProps) {
  return (
    <div className={cn(
      "bg-black border border-green-900/50 rounded-lg overflow-hidden",
      className
    )}>
      <div className="border-b border-green-900/50 px-4 py-2">
        <h3 className="text-green-500 font-mono">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}