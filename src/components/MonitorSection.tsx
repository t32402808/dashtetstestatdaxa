import React from 'react';
import { TokenAlert } from './TokenAlert';
import { TokenData } from '../types/token';
import { DashboardCard } from './DashboardCard';

interface MonitorSectionProps {
  title: string;
  data: TokenData[];
  className?: string;
}

export function MonitorSection({ title, data, className }: MonitorSectionProps) {
  const [page, setPage] = React.useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const displayedData = data.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <DashboardCard title={title} className={className}>
      <div className="space-y-4">
        <div className="grid gap-4">
          {displayedData.map((token, index) => (
            <TokenAlert key={`${token.name}-${index}`} data={token} />
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setPage(index)}
                className={cn(
                  "px-3 py-1 rounded font-mono text-sm",
                  page === index
                    ? "bg-green-500/20 text-green-400"
                    : "hover:bg-green-500/10 text-green-600"
                )}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </DashboardCard>
  );
}