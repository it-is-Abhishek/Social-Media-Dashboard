import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import YouTubePage from './pages/platforms/YouTubePage';
import TwitchPage from './pages/platforms/TwitchPage';
import InstagramPage from './pages/platforms/InstagramPage';
import TwitterPage from './pages/platforms/TwitterPage';
import ComparisonPage from './pages/ComparisonPage';
import UserProfilePage from './pages/UserProfilePage';
import TopListsPage from './pages/TopListsPage';
import NotFoundPage from './pages/NotFoundPage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/youtube/*" element={<YouTubePage />} />
            <Route path="/twitch/*" element={<TwitchPage />} />
            <Route path="/instagram/*" element={<InstagramPage />} />
            <Route path="/twitter/*" element={<TwitterPage />} />
            <Route path="/compare" element={<ComparisonPage />} />
            <Route path="/:platform/user/:username" element={<UserProfilePage />} />
            <Route path="/top/:platform" element={<TopListsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;