export interface TokenData {
  name: string;
  marketCap: number;
  insiders: number;
  holders: number;
  topTen: number;
  volume: number;
  dev: number;
  cto: number;
  dexAds: number;
  social: {
    telegram: string;
    twitter: string;
    website: string;
  };
  tags: string[];
  transactionSummary?: string;
  timestamp: number;
  appearances: number;
  monitorType: 'mcap' | 'volume' | 'bonding' | 'dexprepaid' | 'insider' | 'koth' | 'migrated';
}