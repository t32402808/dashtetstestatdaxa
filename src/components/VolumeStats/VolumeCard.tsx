import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatNumber } from '../../utils/format';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface VolumeCardProps {
  title: string;
  volume: number;
  change: number;
}

// Mock data for the chart
const generateChartData = () => {
  return Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    value: Math.random() * 1000000 + 500000,
  }));
};

export function VolumeCard({ title, volume, change }: VolumeCardProps) {
  const data = generateChartData();

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-mono text-green-400">{title}</h4>
      <div className="bg-black/50 border border-green-900/30 rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-green-600">24h Volume:</span>
          <span className="text-xl font-bold">${formatNumber(volume)}</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-green-600">Change:</span>
          <div className={`flex items-center ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {change >= 0 ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span className="ml-1">{Math.abs(change)}%</span>
          </div>
        </div>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                tick={{ fill: '#22c55e', fontSize: 10 }}
                tickLine={{ stroke: '#22c55e' }}
                axisLine={{ stroke: '#22c55e' }}
                interval={6}
              />
              <YAxis
                tick={{ fill: '#22c55e', fontSize: 10 }}
                tickLine={{ stroke: '#22c55e' }}
                axisLine={{ stroke: '#22c55e' }}
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: '4px',
                  color: '#22c55e',
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#22c55e"
                fillOpacity={1}
                fill={`url(#gradient-${title})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}