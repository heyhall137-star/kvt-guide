import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, PlayCircle, BarChart2, Vote, Pin, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { useSheetData } from '@/lib/useSheetData';
import { cn } from '@/lib/utils';

// Mock data URLs (would be replaced with actual published CSV URLs)
const COMEBACK_DATA_URL = ''; 
const CHART_DATA_URL = '';
const ANNOUNCEMENTS_URL = '';

export default function Home() {
  // In a real app, these would fetch from the CSV URLs
  // const { data: comebackData } = useSheetData(COMEBACK_DATA_URL);
  
  // Mocking the data for preview
  const comebackDate = new Date('2026-04-15T18:00:00+09:00'); // KST
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = comebackDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Hero / Active Comeback Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-950 via-red-900 to-neutral-900 border border-red-800/50 p-8 sm:p-12">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-red-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-red-900/40 blur-3xl rounded-full" />
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400">
            <span className="flex h-2 w-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
            Active Comeback
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
            The 5th Mini Album
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              "ECLIPSE"
            </span>
          </h1>
          
          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 sm:gap-6 pt-4">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-neutral-950/50 backdrop-blur-sm border border-red-900/50 rounded-xl text-2xl sm:text-3xl font-bold text-white font-mono">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <span className="text-xs sm:text-sm text-red-200/70 mt-2 uppercase tracking-wider font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link to="/platforms" className="group flex flex-col items-center justify-center p-6 bg-neutral-900 border border-red-900/30 rounded-xl hover:bg-red-950/30 hover:border-red-500/50 transition-all">
          <PlayCircle className="w-10 h-10 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="font-bold text-lg">Stream Guide</h3>
          <p className="text-sm text-neutral-400 text-center mt-1">Platforms & Goals</p>
        </Link>
        <Link to="/voting" className="group flex flex-col items-center justify-center p-6 bg-neutral-900 border border-red-900/30 rounded-xl hover:bg-red-950/30 hover:border-red-500/50 transition-all">
          <Vote className="w-10 h-10 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="font-bold text-lg">Voting Guide</h3>
          <p className="text-sm text-neutral-400 text-center mt-1">Music Shows & Awards</p>
        </Link>
        <Link to="/tracking" className="group flex flex-col items-center justify-center p-6 bg-neutral-900 border border-red-900/30 rounded-xl hover:bg-red-950/30 hover:border-red-500/50 transition-all">
          <BarChart2 className="w-10 h-10 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="font-bold text-lg">Chart Tracking</h3>
          <p className="text-sm text-neutral-400 text-center mt-1">Latest Positions</p>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Latest Chart Positions */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-red-500" />
              Latest Chart Positions
            </CardTitle>
            <Link to="/tracking" className="text-sm text-red-400 hover:text-red-300 flex items-center">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-red-900/20">
              {[
                { platform: 'Melon Top 100', position: '12', trend: 'up', change: '+3' },
                { platform: 'Spotify Global', position: '45', trend: 'down', change: '-2' },
                { platform: 'Bugs Realtime', position: '1', trend: 'same', change: '-' },
                { platform: 'Apple Music KR', position: '5', trend: 'up', change: '+1' },
              ].map((chart, i) => (
                <div key={i} className="flex items-center justify-between p-4 hover:bg-neutral-800/50 transition-colors">
                  <span className="font-medium">{chart.platform}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold font-mono">#{chart.position}</span>
                    <span className={cn(
                      "text-xs font-bold px-2 py-1 rounded-sm",
                      chart.trend === 'up' ? "bg-green-500/20 text-green-400" :
                      chart.trend === 'down' ? "bg-red-500/20 text-red-400" :
                      "bg-neutral-700 text-neutral-300"
                    )}>
                      {chart.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pinned Announcements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pin className="w-5 h-5 text-red-500" />
              Pinned Announcements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { date: 'Today, 18:00 KST', title: 'M Countdown Pre-voting Opens', type: 'Voting' },
              { date: 'Tomorrow, 00:00 KST', title: 'Spotify Streaming Party', type: 'Streaming' },
              { date: 'Apr 15, 18:00 KST', title: 'MV Premiere & Album Release', type: 'Release' },
            ].map((announcement, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg bg-neutral-950 border border-red-900/20">
                <div className="w-1 h-auto bg-red-500 rounded-full" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                      {announcement.type}
                    </span>
                    <span className="text-xs text-neutral-400">{announcement.date}</span>
                  </div>
                  <p className="font-medium text-neutral-200">{announcement.title}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
