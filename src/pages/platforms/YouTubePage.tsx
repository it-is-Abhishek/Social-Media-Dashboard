import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Eye, BarChart, Award, Youtube } from 'lucide-react';
import SearchBar from '../../components/common/SearchBar';
import StatsGrid from '../../components/stats/StatsGrid';
import TopChannelsTable, { Channel } from '../../components/tables/TopChannelsTable';

// Mock data for demo purposes
const mockTopChannels: Channel[] = [
  {
    id: 'tseries',
    rank: 1,
    name: 'T-Series',
    avatar: 'https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'youtube',
    subscribers: 220000000,
    views: 175000000000,
    estimatedEarnings: '$1.2M - $19.4M',
    grade: 'A+',
  },
  {
    id: 'mrbeast',
    rank: 2,
    name: 'MrBeast',
    avatar: 'https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'youtube',
    subscribers: 100000000,
    views: 17000000000,
    estimatedEarnings: '$1.1M - $17.2M',
    grade: 'A+',
  },
  {
    id: 'cocomelon',
    rank: 3,
    name: 'Cocomelon',
    avatar: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'youtube',
    subscribers: 132000000,
    views: 120000000000,
    estimatedEarnings: '$1.0M - $15.8M',
    grade: 'A+',
  },
  {
    id: 'setindia',
    rank: 4,
    name: 'SET India',
    avatar: 'https://images.pexels.com/photos/2746823/pexels-photo-2746823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'youtube',
    subscribers: 145000000,
    views: 103000000000,
    estimatedEarnings: '$950K - $15.1M',
    grade: 'A',
  },
  {
    id: 'pewdiepie',
    rank: 5,
    name: 'PewDiePie',
    avatar: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'youtube',
    subscribers: 111000000,
    views: 28000000000,
    estimatedEarnings: '$800K - $12.8M',
    grade: 'A',
  },
];

const YouTubePage = () => {
  const navigate = useNavigate();
  
  // Platform overview stats
  const platformStats = {
    totalCreators: '37M+',
    totalVideos: '800M+',
    monthlyViews: '1B+',
    topCategory: 'Entertainment',
  };
  
  const handleViewAllTopChannels = () => {
    navigate('/top/youtube');
  };
  
  const handleViewUserProfile = (username: string) => {
    navigate(`/youtube/user/${username}`);
  };
  
  return (
    <div className="space-y-8 py-8">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform -skew-y-3 origin-top-left -z-10 h-64 md:h-80"></div>
        <div className="container mx-auto px-4 pt-16 pb-24">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              YouTube Statistics & Analytics
            </h1>
            <p className="text-lg text-red-100 mb-8">
              Track subscriber growth, view counts, and estimated earnings for YouTube channels. Compare creators and discover rising stars.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Search for a YouTube channel
              </h2>
              <SearchBar platform="youtube" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Platform Overview */}
      <section className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <Youtube size={24} className="text-red-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Platform Overview
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Creators</p>
              <div className="p-2 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                <Users size={16} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{platformStats.totalCreators}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Videos</p>
              <div className="p-2 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                <BarChart size={16} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{platformStats.totalVideos}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Monthly Views</p>
              <div className="p-2 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                <Eye size={16} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{platformStats.monthlyViews}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Top Category</p>
              <div className="p-2 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                <Award size={16} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{platformStats.topCategory}</p>
          </div>
        </div>
      </section>
      
      {/* Top Channels */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Top YouTube Channels
          </h2>
          <button
            onClick={handleViewAllTopChannels}
            className="flex items-center text-red-600 dark:text-red-400 hover:underline font-medium transition-colors duration-200"
          >
            View all
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-200">
          <TopChannelsTable 
            channels={mockTopChannels} 
            platform="youtube"
          />
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="container mx-auto px-4 pb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Browse by Category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Gaming', image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'Music', image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'Education', image: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'Entertainment', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
          ].map((category, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => navigate('/top/youtube')}>
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold">{category.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default YouTubePage;