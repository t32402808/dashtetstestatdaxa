import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MonitorSection } from './components/MonitorSection';
import { VolumeStats } from './components/VolumeStats';
import type { VolumeStatsData } from './components/VolumeStats';
import type { TokenData } from './types/token';

// Mock volume statistics
const volumeStats: VolumeStatsData = {
  raydium: {
    volume24h: 15234567,
    change24h: 12.5,
  },
  pumpfun: {
    volume24h: 8765432,
    change24h: -5.3,
  },
};

// Mock data for demonstration - 6 items per section
const generateMockTokens = (count: number, monitorType: TokenData['monitorType']): TokenData[] => 
  Array.from({ length: count }, (_, i) => ({
    name: `TOKEN${i + 1}`,
    marketCap: 14001.61 + (i * 1000),
    insiders: Math.random() * 5,
    holders: 20 + (i * 5),
    topTen: 45 + (i * 2),
    volume: 14869.32 + (i * 2000),
    dev: Math.random() * 2,
    cto: Math.floor(Math.random() * 3),
    dexAds: Math.floor(Math.random() * 5),
    social: {
      telegram: i % 2 === 0 ? 'https://t.me/token' + (i + 1) : '',
      twitter: i % 3 === 0 ? '@token' + (i + 1) : '',
      website: i % 4 === 0 ? 'https://token' + (i + 1) + '.com' : '',
    },
    tags: ['PHO', 'BLX', 'TRO', 'DEX'].slice(0, Math.floor(Math.random() * 4) + 1),
    transactionSummary: `${(Math.random() * 50).toFixed(2)} SOL in ${Math.floor(Math.random() * 30)}txs purchased in under 2 minutes!`,
    timestamp: Date.now() - (i * 60000),
    appearances: Math.floor(Math.random() * 3) + 1,
    monitorType,
  }));

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-black text-green-500">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      <main className={`flex-1 p-6 transition-all duration-300 ${isCollapsed ? 'ml-16' : 'ml-64'} overflow-auto`}>
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-2xl font-mono mb-6">Dashboard Overview</h1>
          
          <VolumeStats stats={volumeStats} />
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <MonitorSection
              title="Market Cap Flow (15-20k)"
              data={generateMockTokens(6, 'mcap')}
              className="xl:col-span-2"
            />
            
            <MonitorSection
              title="Market Cap Flow (30-35k)"
              data={generateMockTokens(6, 'mcap')}
              className="xl:col-span-2"
            />
            
            <MonitorSection
              title="Market Cap Flow (45-50k)"
              data={generateMockTokens(6, 'mcap')}
              className="xl:col-span-2"
            />
            
            <MonitorSection
              title="Volume Monitor"
              data={generateMockTokens(6, 'volume')}
            />
            
            <MonitorSection
              title="Bonding Curve Watch (50%)"
              data={generateMockTokens(6, 'bonding')}
            />
            
            <MonitorSection
              title="Bonding Curve Watch (75%)"
              data={generateMockTokens(6, 'bonding')}
            />
            
            <MonitorSection
              title="DexPrepaid Tracker"
              data={generateMockTokens(6, 'dexprepaid')}
            />
            
            <MonitorSection
              title="Insider Buys"
              data={generateMockTokens(6, 'insider')}
            />
            
            <MonitorSection
              title="KOTH Rise"
              data={generateMockTokens(6, 'koth')}
            />
            
            <MonitorSection
              title="Migrated Tokens"
              data={generateMockTokens(6, 'migrated')}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;