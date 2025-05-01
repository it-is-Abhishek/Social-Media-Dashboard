import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Eye, BarChart, Award, Twitch } from 'lucide-react';
import SearchBar from '../../components/common/SearchBar';
import TopChannelsTable, { Channel } from '../../components/tables/TopChannelsTable';

// Mock data for demo purposes
const mockTopChannels: Channel[] = [
  {
    id: 'xqc',
    rank: 1,
    name: 'xQc',
    avatar: 'https://images.pexels.com/photos/5970575/pexels-photo-5970575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'twitch',
    subscribers: 11200000,
    views: 750000000,
    estimatedEarnings: '$350K - $1.2M',
    grade: 'A+',
  },
  {
    id: 'ninja',
    rank: 2,
    name: 'Ninja',
    avatar: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'twitch',
    subscribers: 18500000,
    views: 600000000,
    estimatedEarnings: '$300K - $950K',
    grade: 'A+',
  },
  {
    id: 'auronplay',
    rank: 3,
    name: 'auronplay',
    avatar: 'https://images.pexels.com/photos/13818355/pexels-photo-13818355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'twitch',
    subscribers: 14000000,
    views: 550000000,
    estimatedEarnings: '$280K - $900K',
    grade: 'A',
  },
  {
    id: 'rubius',
    rank: 4,
    name: 'Rubius',
    avatar: 'https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'twitch',
    subscribers: 12700000,
    views: 490000000,
    estimatedEarnings: '$250K - $800K',
    grade: 'A',
  },
  {
    id: 'shroud',
    rank: 5,
    name: 'shroud',
    avatar: 'https://images.pexels.com/photos/4144099/pexels-photo-4144099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'twitch',
    subscribers: 10200000,
    views: 410000000,
    estimatedEarnings: '$200K - $650K',
    grade: 'A',
  },
];

const TwitchPage = () => {
  const navigate = useNavigate();
  
  // Platform overview stats
  const platformStats = {
    totalCreators: '9.2M+',
    totalStreamers: '140K+',
    monthlyViews: '800M+',
    topCategory: 'Just Chatting',
  };
  
  const handleViewAllTopChannels = () => {
    navigate('/top/twitch');
  };
  
  return (
    <div className="space-y-8 py-8">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 transform -skew-y-3 origin-top-left -z-10 h-64 md:h-80"></div>
        <div className="container mx-auto px-4 pt-16 pb-24">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Twitch Statistics & Analytics
            </h1>
            <p className="text-lg text-purple-100 mb-8">
              Track follower growth, view counts, and subscription data for Twitch streamers. Compare creators and discover rising streaming stars.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Search for a Twitch channel
              </h2>
              <SearchBar platform="twitch" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Platform Overview */}
      <section className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <Twitch size={24} className="text-purple-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Platform Overview
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Creators</p>
              <div className="p-2 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                <Users size={16} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{platformStats.totalCreators}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Streamers</p>
              <div className="p-2 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                <BarChart size={16} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{platformStats.totalStreamers}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Monthly Views</p>
              <div className="p-2 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                <Eye size={16} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{platformStats.monthlyViews}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Top Category</p>
              <div className="p-2 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
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
            Top Twitch Channels
          </h2>
          <button
            onClick={handleViewAllTopChannels}
            className="flex items-center text-purple-600 dark:text-purple-400 hover:underline font-medium transition-colors duration-200"
          >
            View all
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-200">
          <TopChannelsTable 
            channels={mockTopChannels} 
            platform="twitch"
          />
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="container mx-auto px-4 pb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Popular Categories
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Just Chatting', image: 'https://images.pexels.com/photos/7862488/pexels-photo-7862488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'League of Legends', image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'Fortnite', image: 'https://images.pexels.com/photos/8919558/pexels-photo-8919558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'Minecraft', image: 'https://images.pexels.com/photos/1692695/pexels-photo-1692695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
          ].map((category, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => navigate('/top/twitch')}>
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

export default TwitchPage;