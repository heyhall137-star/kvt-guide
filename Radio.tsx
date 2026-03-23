import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { CheckCircle2, AlertTriangle, Link as LinkIcon, Download, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GettingStarted() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="border-b border-red-900/30 pb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Getting Started</h1>
        <p className="text-neutral-400">Your ultimate to-do list and preparation guide for the upcoming comeback.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Comeback Checklist */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-500" />
                Step-by-Step Comeback Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: 'Pre-save the Album', desc: 'Ensure the album is saved on Spotify and Apple Music to boost day-1 algorithms.', done: false },
                { title: 'Create Streaming Accounts', desc: 'Set up accounts for Melon, Genie, Bugs, Spotify, and Apple Music.', done: false },
                { title: 'Download Voting Apps', desc: 'Install Mnet Plus, Mubeat, Idolchamp, and FreeVote.', done: false },
                { title: 'Collect Voting Tickets/Beats', desc: 'Start watching ads and completing missions to save up for voting periods.', done: false },
                { title: 'Join a Streaming Party', desc: 'Find a Stationhead or Discord group to stream together.', done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-red-900/50 transition-colors">
                  <div className="mt-0.5">
                    <div className="w-5 h-5 rounded border border-neutral-600 flex items-center justify-center bg-neutral-900">
                      {item.done && <CheckCircle2 className="w-4 h-4 text-red-500" />}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-200">{item.title}</h4>
                    <p className="text-sm text-neutral-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Do's and Don'ts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Do's and Don'ts
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-green-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" /> DO
                </h4>
                <ul className="space-y-3 text-sm text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    Stream manually when possible (avoid bots).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    Use official playlists and intersperse with other songs.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    Keep volume above 50% on the app (device volume can be muted).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    Interact with the MV (like, comment, share).
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-red-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" /> DON'T
                </h4>
                <ul className="space-y-3 text-sm text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    Loop the same song or MV continuously (it gets filtered).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    Use VPNs for Korean charts (they often block them).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    Mute the streaming app itself.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    Skip ads on YouTube (watch at least 30s of the ad).
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-red-950/30 border border-red-900/50 text-red-400 hover:bg-red-900/40 transition-colors">
                <LinkIcon className="w-5 h-5" />
                <span className="font-medium">Pre-save on Spotify</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-red-950/30 border border-red-900/50 text-red-400 hover:bg-red-900/40 transition-colors">
                <LinkIcon className="w-5 h-5" />
                <span className="font-medium">Pre-save on Apple Music</span>
              </a>
            </CardContent>
          </Card>

          {/* Account Setup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-red-500" />
                Account Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/platforms" className="block p-3 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-red-900/50 transition-colors">
                <div className="font-medium text-neutral-200">Korean Platforms</div>
                <div className="text-xs text-neutral-500 mt-1">Melon, Genie, Bugs, Flo</div>
              </Link>
              <Link to="/platforms" className="block p-3 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-red-900/50 transition-colors">
                <div className="font-medium text-neutral-200">Global Platforms</div>
                <div className="text-xs text-neutral-500 mt-1">Spotify, Apple Music, YouTube</div>
              </Link>
            </CardContent>
          </Card>

          {/* Downloads */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5 text-red-500" />
                App Downloads
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/voting" className="block p-3 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-red-900/50 transition-colors">
                <div className="font-medium text-neutral-200">Music Show Voting</div>
                <div className="text-xs text-neutral-500 mt-1">Mnet Plus, Mubeat, Idolchamp</div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
