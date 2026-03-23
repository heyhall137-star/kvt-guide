import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Trophy, Calendar, Star, History } from 'lucide-react';
import { cn } from '@/lib/utils';

const awards = [
  {
    id: 'mama',
    name: 'MAMA Awards',
    network: 'Mnet',
    schedule: 'Year-end (Nov/Dec)',
    about: 'The Mnet Asian Music Awards is one of the major South Korean music awards ceremonies presented annually by entertainment company CJ E&M.',
    categories: [
      { name: 'Artist of the Year', criteria: '20% Vote, 40% Digital, 40% Physical' },
      { name: 'Song of the Year', criteria: '20% Vote, 60% Digital, 20% Physical' },
      { name: 'Album of the Year', criteria: '60% Physical, 40% Judge' },
      { name: 'Worldwide Fans\' Choice', criteria: '100% Global Vote (Mnet Plus + Twitter)' },
    ],
    voting: 'Mnet Plus app. Daily caps apply. Twitter voting requires specific hashtags.',
    pastWinners: [
      { year: '2025', artist: 'TBA', song: 'TBA' },
      { year: '2024', artist: 'SEVENTEEN', song: 'Super' },
      { year: '2023', artist: 'NewJeans', song: 'Ditto' },
    ]
  },
  {
    id: 'mma',
    name: 'Melon Music Awards',
    network: 'Kakao M',
    schedule: 'Year-end (Nov/Dec)',
    about: 'The Melon Music Awards is a major music awards show that is held annually in South Korea and organized by Kakao M through its online music store, Melon.',
    categories: [
      { name: 'Artist of the Year', criteria: '60% Melon Downloads/Streaming, 20% Judge, 20% Vote' },
      { name: 'Album of the Year', criteria: '60% Melon Downloads/Streaming, 20% Judge, 20% Vote' },
      { name: 'Song of the Year', criteria: '60% Melon Downloads/Streaming, 20% Judge, 20% Vote' },
      { name: 'Top 10 Artists (Bonsang)', criteria: '80% Melon Downloads/Streaming, 20% Vote' },
    ],
    voting: 'Melon app (requires verified Korean account).',
    pastWinners: [
      { year: '2025', artist: 'TBA', song: 'TBA' },
      { year: '2024', artist: 'IVE', song: 'I AM' },
      { year: '2023', artist: 'NewJeans', song: 'Ditto' },
    ]
  }
];

export default function Awards() {
  const [activeAward, setActiveAward] = useState(awards[0].id);
  const award = awards.find(a => a.id === activeAward)!;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="border-b border-red-900/30 pb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Year-End Awards</h1>
        <p className="text-neutral-400">Criteria, voting guides, and historical data for major K-pop award shows.</p>
      </div>

      {/* Award Selector */}
      <div className="flex flex-wrap gap-4">
        {awards.map(a => (
          <button
            key={a.id}
            onClick={() => setActiveAward(a.id)}
            className={cn(
              "px-6 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-3 border",
              activeAward === a.id 
                ? "bg-red-950 border-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.2)]" 
                : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200"
            )}
          >
            <Trophy className={cn("w-5 h-5", activeAward === a.id ? "text-red-500" : "")} />
            {a.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* About & Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-red-500" />
                About {award.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-neutral-950 border border-neutral-800">
                <Calendar className="w-8 h-8 text-red-500" />
                <div>
                  <h4 className="font-bold text-white">{award.network}</h4>
                  <p className="text-neutral-400">{award.schedule}</p>
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                {award.about}
              </p>
            </CardContent>
          </Card>

          {/* Categories & Criteria */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-red-500" />
                Major Categories & Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {award.categories.map((cat, i) => (
                  <div key={i} className="p-4 rounded-lg bg-neutral-950 border border-neutral-800">
                    <h4 className="font-bold text-red-400 mb-2">{cat.name}</h4>
                    <p className="text-sm text-neutral-300">{cat.criteria}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          {/* Voting Info */}
          <Card>
            <CardHeader className="bg-red-950/30 border-b border-red-900/50">
              <CardTitle className="flex items-center gap-2 text-red-400">
                <Star className="w-5 h-5" />
                Voting Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-neutral-300 leading-relaxed">
                {award.voting}
              </p>
            </CardContent>
          </Card>

          {/* Past Winners */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="w-5 h-5 text-red-500" />
                Past Winners (Daesang)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-neutral-800">
                {award.pastWinners.map((winner, i) => (
                  <div key={i} className="flex items-center justify-between p-4 hover:bg-neutral-900 transition-colors">
                    <span className="font-bold text-red-400">{winner.year}</span>
                    <div className="text-right">
                      <div className="font-medium text-white">{winner.artist}</div>
                      <div className="text-xs text-neutral-500">{winner.song}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
