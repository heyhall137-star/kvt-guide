import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { BarChart3, PlayCircle, Info, Globe, MapPin, Music } from 'lucide-react';
import { cn } from '@/lib/utils';

const platforms = {
  korea: [
    { id: 'melon', name: 'Melon', type: 'Streaming', desc: 'Real-time / 24H / Weekly chart. Unique listeners matter.' },
    { id: 'genie', name: 'Genie', type: 'Streaming', desc: 'Real-time chart rules. Inkigayo tie-in.' },
    { id: 'bugs', name: 'Bugs', type: 'Streaming + Download', desc: 'Streaming + download chart. Birthday voting.' },
    { id: 'flo', name: 'Flo', type: 'Streaming', desc: 'Real-time ranking. Inkigayo data source.' },
    { id: 'vibe', name: 'Vibe', type: 'Streaming', desc: 'Chart structure and streaming rules.' },
  ],
  global: [
    { id: 'spotify', name: 'Spotify', type: 'Streaming', desc: 'Daily/Weekly chart. Global 200.' },
    { id: 'youtube', name: 'YouTube', type: 'Video/Audio', desc: 'MV views vs audio streams. Shorts impact.' },
    { id: 'apple', name: 'Apple Music', type: 'Streaming', desc: 'Daily Top 100. Shazam connection.' },
    { id: 'itunes', name: 'iTunes', type: 'Purchase', desc: 'Purchase chart. Speed-buying strategies.' },
    { id: 'amazon', name: 'Amazon Music', type: 'Streaming', desc: 'Unlimited chart. US-focused.' },
    { id: 'shazam', name: 'Shazam', type: 'Discovery', desc: 'How to Shazam correctly.' },
    { id: 'pandora', name: 'Pandora', type: 'Radio/Streaming', desc: 'US only. Thumbs-up strategy.' },
  ],
  multi: [
    { id: 'circle', name: 'Circle Chart', type: 'Korea', desc: 'Streaming & album chart rules.' },
    { id: 'hanteo', name: 'Hanteo', type: 'Korea', desc: 'Physical album chart rules.' },
    { id: 'billboard', name: 'Billboard', type: 'Global', desc: 'Hot 100, 200, K-pop Hot 100.' },
    { id: 'tme', name: 'TME Chart', type: 'China', desc: 'Tencent Music.' },
    { id: 'oricon', name: 'Oricon', type: 'Japan', desc: 'Physical + digital charts.' },
  ]
};

export default function Platforms() {
  const [activeCategory, setActiveCategory] = useState<'korea' | 'global' | 'multi'>('korea');
  const [activePlatform, setActivePlatform] = useState(platforms.korea[0].id);
  const [activeTab, setActiveTab] = useState<'chart' | 'stream'>('chart');

  const handleCategoryChange = (cat: 'korea' | 'global' | 'multi') => {
    setActiveCategory(cat);
    setActivePlatform(platforms[cat][0].id);
    setActiveTab('chart');
  };

  const currentPlatformList = platforms[activeCategory];
  const currentPlatform = currentPlatformList.find(p => p.id === activePlatform) || currentPlatformList[0];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="border-b border-red-900/30 pb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Music Platforms & Charts</h1>
        <p className="text-neutral-400">Understand how charts work and how to stream/purchase effectively.</p>
      </div>

      {/* Charts Overview */}
      <Card className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-red-900/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-400">
            <Info className="w-5 h-5" />
            Charts Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold text-white mb-2">What is a chart?</h4>
            <p className="text-sm text-neutral-400">A ranking of songs or albums based on sales, streams, and airplay over a specific period.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Timeframes</h4>
            <p className="text-sm text-neutral-400">Realtime (hourly updates), Weekly (usually Mon-Sun or Fri-Thu), and Monthly.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Eligibility</h4>
            <p className="text-sm text-neutral-400">Rules vary. Some require unique listeners, others count total streams. VPNs often invalidate streams.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Priorities</h4>
            <p className="text-sm text-neutral-400">Focus on platforms that overlap with major charts (e.g., Spotify/Apple for Billboard, Melon/Genie for Circle).</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1 space-y-6">
          {/* Categories */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
            <button
              onClick={() => handleCategoryChange('korea')}
              className={cn(
                "flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap",
                activeCategory === 'korea' ? "bg-red-900/40 text-red-400 border border-red-900/50" : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
              )}
            >
              <MapPin className="w-4 h-4" /> Korean Platforms
            </button>
            <button
              onClick={() => handleCategoryChange('global')}
              className={cn(
                "flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap",
                activeCategory === 'global' ? "bg-red-900/40 text-red-400 border border-red-900/50" : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
              )}
            >
              <Globe className="w-4 h-4" /> Global Platforms
            </button>
            <button
              onClick={() => handleCategoryChange('multi')}
              className={cn(
                "flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap",
                activeCategory === 'multi' ? "bg-red-900/40 text-red-400 border border-red-900/50" : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
              )}
            >
              <BarChart3 className="w-4 h-4" /> Multiplatform Charts
            </button>
          </div>

          {/* Platform List */}
          <div className="bg-neutral-900 border border-red-900/30 rounded-xl overflow-hidden">
            <div className="p-3 bg-neutral-950 border-b border-red-900/30 font-semibold text-sm text-neutral-300 uppercase tracking-wider">
              {activeCategory === 'korea' ? 'Korea' : activeCategory === 'global' ? 'Global' : 'Multiplatform'}
            </div>
            <div className="divide-y divide-neutral-800/50 max-h-[400px] overflow-y-auto">
              {currentPlatformList.map(p => (
                <button
                  key={p.id}
                  onClick={() => setActivePlatform(p.id)}
                  className={cn(
                    "w-full text-left px-4 py-3 transition-colors flex items-center justify-between group",
                    activePlatform === p.id ? "bg-red-950/20 text-red-400" : "text-neutral-300 hover:bg-neutral-800"
                  )}
                >
                  <span className="font-medium">{p.name}</span>
                  <span className="text-xs text-neutral-500 group-hover:text-neutral-400">{p.type}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between border-b border-red-900/30 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                {currentPlatform.name}
              </h2>
              <p className="text-neutral-400 mt-1">{currentPlatform.desc}</p>
            </div>
          </div>

          {/* Tabs */}
          {activeCategory !== 'multi' && (
            <div className="flex gap-2 border-b border-neutral-800">
              <button
                onClick={() => setActiveTab('chart')}
                className={cn(
                  "px-6 py-3 font-medium text-sm transition-colors border-b-2",
                  activeTab === 'chart' ? "border-red-500 text-red-400" : "border-transparent text-neutral-400 hover:text-neutral-200"
                )}
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" /> Chart Info
                </div>
              </button>
              <button
                onClick={() => setActiveTab('stream')}
                className={cn(
                  "px-6 py-3 font-medium text-sm transition-colors border-b-2",
                  activeTab === 'stream' ? "border-red-500 text-red-400" : "border-transparent text-neutral-400 hover:text-neutral-200"
                )}
              >
                <div className="flex items-center gap-2">
                  <PlayCircle className="w-4 h-4" /> Streaming Guide
                </div>
              </button>
            </div>
          )}

          {/* Content */}
          <Card className="min-h-[400px]">
            <CardContent className="p-6 sm:p-8">
              {activeCategory === 'multi' ? (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">About {currentPlatform.name}</h3>
                  <div className="prose prose-invert prose-red max-w-none">
                    <p>This section loads data specific to {currentPlatform.name} from the CSV.</p>
                    <ul>
                      <li>Overview and history</li>
                      <li>Ranking criteria</li>
                      <li>How it aggregates data from other platforms</li>
                    </ul>
                  </div>
                </div>
              ) : activeTab === 'chart' ? (
                <div className="space-y-6 animate-in fade-in">
                  <h3 className="text-xl font-bold text-white mb-4">{currentPlatform.name} Chart Rules</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800">
                        <h4 className="font-bold text-red-400 mb-2">Real-time Chart</h4>
                        <p className="text-sm text-neutral-300">Updates every hour based on unique listeners and total streams.</p>
                      </div>
                      <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800">
                        <h4 className="font-bold text-red-400 mb-2">Daily/Weekly Chart</h4>
                        <p className="text-sm text-neutral-300">Aggregates data over 24 hours or 7 days. Crucial for music show scores.</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800">
                      <h4 className="font-bold text-red-400 mb-2">What Counts?</h4>
                      <ul className="space-y-2 text-sm text-neutral-300 list-disc list-inside">
                        <li>1 stream per hour per user (usually)</li>
                        <li>Downloads carry heavy weight</li>
                        <li>Accounts must be verified</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in">
                  <h3 className="text-xl font-bold text-white mb-4">How to Stream on {currentPlatform.name}</h3>
                  <div className="space-y-6">
                    <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800">
                      <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-red-900/50 flex items-center justify-center text-xs">1</span>
                        Account Setup
                      </h4>
                      <p className="text-sm text-neutral-300">Create an account and purchase a streaming pass. Verification may be required.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800">
                      <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-red-900/50 flex items-center justify-center text-xs">2</span>
                        Playlist Strategy
                      </h4>
                      <p className="text-sm text-neutral-300">Create a playlist with the title track and B-sides. Do not loop a single song.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800">
                      <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-red-900/50 flex items-center justify-center text-xs">3</span>
                        Do's & Don'ts
                      </h4>
                      <ul className="space-y-2 text-sm text-neutral-300 list-disc list-inside">
                        <li>Do: Keep volume above 50%</li>
                        <li>Do: Like the song and album</li>
                        <li>Don't: Mute the app</li>
                        <li>Don't: Use VPNs while streaming (if Korean platform)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
