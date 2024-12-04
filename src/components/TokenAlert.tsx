import React from 'react';
import { ExternalLink, MessageCircle, Twitter } from 'lucide-react';
import { TokenData } from '../types/token';
import { cn } from '../utils/cn';
import { formatNumber } from '../utils/format';

interface TokenAlertProps {
  data: TokenData;
}

export function TokenAlert({ data }: TokenAlertProps) {
  return (
    <div className="bg-black/50 border border-green-900/30 rounded-lg p-4 hover:border-green-500/50 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <h3 className="text-green-500 font-mono font-bold">
            {data.name}
            {data.appearances > 1 && (
              <span className="ml-2 text-green-600">×{data.appearances}</span>
            )}
          </h3>
        </div>
        <div className="flex gap-2">
          {data.social.telegram && (
            <a href={data.social.telegram} target="_blank" rel="noopener noreferrer" 
               className="text-green-500 hover:text-green-400">
              <MessageCircle className="w-4 h-4" />
            </a>
          )}
          {data.social.twitter && (
            <a href={data.social.twitter} target="_blank" rel="noopener noreferrer"
               className="text-green-500 hover:text-green-400">
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {data.social.website && (
            <a href={data.social.website} target="_blank" rel="noopener noreferrer"
               className="text-green-500 hover:text-green-400">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
        <div className="flex justify-between">
          <span className="text-green-600">Market Cap:</span>
          <span>{formatNumber(data.marketCap)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-green-600">Holders:</span>
          <span>{data.holders}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-green-600">Volume:</span>
          <span>{formatNumber(data.volume)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-green-600">Dev %:</span>
          <span>{data.dev}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-green-600">CTO:</span>
          <span>{data.cto}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-green-600">Dex Ads:</span>
          <span>{data.dexAds}</span>
        </div>
      </div>

      {data.transactionSummary && (
        <p className="text-sm text-green-400 mb-2">{data.transactionSummary}</p>
      )}

      <div className="flex flex-wrap gap-1">
        {data.tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              "px-2 py-0.5 rounded text-xs font-mono",
              tag === 'PHO' && "bg-blue-500/20 text-blue-400",
              tag === 'BLX' && "bg-purple-500/20 text-purple-400",
              tag === 'TRO' && "bg-yellow-500/20 text-yellow-400",
              tag === 'DEX' && "bg-green-500/20 text-green-400",
              tag === 'RUG' && "bg-red-500/20 text-red-400",
              tag === 'BRD' && "bg-orange-500/20 text-orange-400"
            )}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}