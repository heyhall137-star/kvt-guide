/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import Platforms from './pages/Platforms';
import MusicShows from './pages/MusicShows';
import Awards from './pages/Awards';
import Voting from './pages/Voting';
import Radio from './pages/Radio';
import Tracking from './pages/Tracking';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="platforms" element={<Platforms />} />
          <Route path="music-shows" element={<MusicShows />} />
          <Route path="awards" element={<Awards />} />
          <Route path="voting" element={<Voting />} />
          <Route path="radio" element={<Radio />} />
          <Route path="tracking" element={<Tracking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
