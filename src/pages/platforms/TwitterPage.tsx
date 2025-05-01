import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Eye, BarChart, Award, Twitter } from 'lucide-react';
import SearchBar from '../../components/common/SearchBar';
import TopChannelsTable, { Channel } from '../../components/tables/TopChannelsTable';

// Mock data for demo purposes
const mockTopChannels: Channel[] = [
  {
    id: 'elonmusk',
    rank: 1,
    name: 'Elon Musk',
    avatar: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'twitter',
    subscribers: 100000000,
    views: 30000000000,
    estimatedEarnings: '$300K - $900K',
    grade: 'A+',
  },
  {
    id: 'barackobama',
    rank: 2,
    name: 'Barack Obama',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'twitter',
    subscribers: 133000000,
    views: 25000000000,
    estimatedEarnings: '$250K - $750K',
    grade: 'A+',
  },
  {
    id: 'ronaldo',
    rank: 3,
    name: 'Cristiano Ronaldo',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'twitter',
    subscribers: 108000000,
    views: 20000000000,
    estimatedEarnings: '$200K - $600K',
    grade: 'A+',
  },
  {
    id: 'rihanna',
    rank: 4,
    name: 'Rihanna',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'twitter',
    subscribers: 106000000,
    views: 18000000000,
    estimatedEarnings: '$180K - $540K',
    grade: 'A',
  },
  {
    id: 'katyperry',
    rank: 5,
    name: 'Katy Perry',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'twitter',
    subscribers: 108000000,
    views: 17000000000,
    estimatedEarnings: '$170K - $510K',
    grade: 'A',
  },
];

const TwitterPage = () => {
  const navigate = useNavigate();
  
  // Platform overview stats
  const platformStats = {
    totalCreators: '330M+',
    activeUsers: '220M+',
    monthlyViews: '6B+',
    topCategory: 'News & Politics',
  };
  
  const handleViewAllTopChannels = () => {
    navigate('/top/twitter');
  };
  
  return (
    <div className="space-y-8 py-8">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform -skew-y-3 origin-top-left -z-10 h-64 md:h-80"></div>
        <div className="container mx-auto px-4 pt-16 pb-24">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Twitter Statistics & Analytics
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              Track follower growth, engagement metrics, and reach data for Twitter accounts. Compare profiles and discover trending creators.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Search for a Twitter account
              </h2>
              <SearchBar platform="twitter" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Platform Overview */}
      <section className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <Twitter size={24} className="text-blue-500 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Platform Overview
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Accounts</p>
              <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400">
                <Users size={16} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{platformStats.totalCreators}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Users</p>
              <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400">
                <BarChart size={16} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{platformStats.activeUsers}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Monthly Views</p>
              <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400">
                <Eye size={16} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{platformStats.monthlyViews}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Top Category</p>
              <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400">
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
            Top Twitter Accounts
          </h2>
          <button
            onClick={handleViewAllTopChannels}
            className="flex items-center text-blue-500 dark:text-blue-400 hover:underline font-medium transition-colors duration-200"
          >
            View all
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-200">
          <TopChannelsTable 
            channels={mockTopChannels} 
            platform="twitter"
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
            { name: 'News', image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'Politics', image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'Entertainment', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'Sports', image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
          ].map((category, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => navigate('/top/twitter')}>
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

export default TwitterPage;