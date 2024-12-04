import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { VolumeStatsData } from './types';
import { formatNumber } from '../../utils/format';
import { DashboardCard } from '../DashboardCard';
import { VolumeCard } from './VolumeCard';

interface VolumeStatsProps {
  stats: VolumeStatsData;
}

export function VolumeStats({ stats }: VolumeStatsProps) {
  return (
    <DashboardCard title="24h Volume Statistics" className="xl:col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VolumeCard
          title="Raydium"
          volume={stats.raydium.volume24h}
          change={stats.raydium.change24h}
        />
        <VolumeCard
          title="PumpFun"
          volume={stats.pumpfun.volume24h}
          change={stats.pumpfun.change24h}
        />
      </div>
    </DashboardCard>
  );
}