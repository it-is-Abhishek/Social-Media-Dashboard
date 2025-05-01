import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Twitch, Instagram, BarChart2, TrendingUp, Users, Eye, DollarSign } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import TopCreators from '../components/TopCreators';
import GrowthChart from '../components/charts/GrowthChart';

const HomePage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<'youtube' | 'twitch' | 'instagram'>('youtube');

  // Mock data for platform stats
  const platformStats = {
    youtube: {
      followers: '200B+',
      views: '1B+',
      earnings: '75B+',
      growth: Array.from({ length: 30 }, (_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        value: 180000000 + Math.random() * 20000000
      }))
    },
    twitch: {
      followers: '50M+',
      views: '500M+',
      earnings: '$30M+',
      growth: Array.from({ length: 30 }, (_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        value: 45000000 + Math.random() * 5000000
      }))
    },
    instagram: {
      followers: '150M+',
      views: '800M+',
      earnings: '$50B+',
      growth: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        value: 140000000 + Math.random() * 10000000
      }))
    }
  };

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 transform -skew-y-3 origin-top-left -z-10 h-96"></div>
        <div className="container mx-auto px-4 pt-16 pb-32">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white mb-4">
              Track Social Media Growth
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Get detailed statistics and analytics for creators across YouTube, Twitch, and Instagram.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats Sections */}
      <section className="container mx-auto px-4">
        {/* YouTube Stats */}
        <div className="mb-24">
          <div className="flex items-center mb-8">
            <Youtube className="w-10 h-10 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">YouTube Statistics</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Platform Growth Trend</h3>
              <div className="h-80">
                <GrowthChart data={platformStats.youtube.growth} color="#EF4444" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg text-gray-500">Total Followers</span>
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{platformStats.youtube.followers}</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg text-gray-500">Total Views</span>
                  <Eye className="w-6 h-6 text-red-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{platformStats.youtube.views}</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg text-gray-500">Est. Earnings</span>
                  <DollarSign className="w-6 h-6 text-red-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{platformStats.youtube.earnings}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Top YouTube Creators</h3>
            <TopCreators platform="youtube" />
          </div>
        </div>

        {/* Twitch Stats */}
        <div className="mb-24">
          <div className="flex items-center mb-8">
            <Twitch className="w-10 h-10 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Twitch Statistics</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Platform Growth Trend</h3>
              <div className="h-80">
                <GrowthChart data={platformStats.twitch.growth} color="#9333EA" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg text-gray-500">Total Followers</span>
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{platformStats.twitch.followers}</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg text-gray-500">Total Views</span>
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{platformStats.twitch.views}</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg text-gray-500">Est. Earnings</span>
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{platformStats.twitch.earnings}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Top Twitch Creators</h3>
            <TopCreators platform="twitch" />
          </div>
        </div>

        {/* Instagram Stats */}
        <div className="mb-24">
          <div className="flex items-center mb-8">
            <Instagram className="w-10 h-10 text-pink-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Instagram Statistics</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Platform Growth Trend</h3>
              <div className="h-80">
                <GrowthChart data={platformStats.instagram.growth} color="#EC4899" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg text-gray-500">Total Followers</span>
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{platformStats.instagram.followers}</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg text-gray-500">Total Views</span>
                  <Eye className="w-6 h-6 text-pink-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{platformStats.instagram.views}</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg text-gray-500">Est. Earnings</span>
                  <DollarSign className="w-6 h-6 text-pink-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{platformStats.instagram.earnings}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Top Instagram Creators</h3>
            <TopCreators platform="instagram" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;