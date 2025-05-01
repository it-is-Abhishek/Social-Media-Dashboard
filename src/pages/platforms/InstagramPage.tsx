import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Eye, BarChart, Award, Instagram } from 'lucide-react';
import SearchBar from '../../components/common/SearchBar';
import TopChannelsTable, { Channel } from '../../components/tables/TopChannelsTable';

// Mock data for demo purposes
const mockTopChannels: Channel[] = [
  {
    id: 'instagram',
    rank: 1,
    name: 'Instagram',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'instagram',
    subscribers: 500000000,
    views: 2000000000,
    estimatedEarnings: '$2M - $6M',
    grade: 'A+',
  },
  {
    id: 'cristiano',
    rank: 2,
    name: 'Cristiano Ronaldo',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'instagram',
    subscribers: 440000000,
    views: 1800000000,
    estimatedEarnings: '$1.8M - $5.4M',
    grade: 'A+',
  },
  {
    id: 'leomessi',
    rank: 3,
    name: 'Leo Messi',
    avatar: 'https://images.pexels.com/photos/1435086/pexels-photo-1435086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'instagram',
    subscribers: 350000000,
    views: 1400000000,
    estimatedEarnings: '$1.4M - $4.2M',
    grade: 'A+',
  },
  {
    id: 'selenagomez',
    rank: 4,
    name: 'Selena Gomez',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'instagram',
    subscribers: 310000000,
    views: 1200000000,
    estimatedEarnings: '$1.2M - $3.6M',
    grade: 'A',
  },
  {
    id: 'therock',
    rank: 5,
    name: 'Dwayne Johnson',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    platform: 'instagram',
    subscribers: 300000000,
    views: 1100000000,
    estimatedEarnings: '$1.1M - $3.3M',
    grade: 'A',
  },
];

const InstagramPage = () => {
  const navigate = useNavigate();
  
  // Platform overview stats
  const platformStats = {
    totalCreators: '25M+',
    totalInfluencers: '500K+',
    monthlyViews: '4B+',
    topCategory: 'Fashion & Beauty',
  };
  
  const handleViewAllTopChannels = () => {
    navigate('/top/instagram');
  };
  
  return (
    <div className="space-y-8 py-8">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-700 transform -skew-y-3 origin-top-left -z-10 h-64 md:h-80"></div>
        <div className="container mx-auto px-4 pt-16 pb-24">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Instagram Statistics & Analytics
            </h1>
            <p className="text-lg text-pink-100 mb-8">
              Track follower growth, engagement rates, and influence metrics for Instagram creators. Compare influencers and discover rising stars.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Search for an Instagram account
              </h2>
              <SearchBar platform="instagram" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Platform Overview */}
      <section className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <Instagram size={24} className="text-pink-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Platform Overview
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Creators</p>
              <div className="p-2 rounded-full bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                <Users size={16} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{platformStats.totalCreators}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Top Influencers</p>
              <div className="p-2 rounded-full bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                <BarChart size={16} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{platformStats.totalInfluencers}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Monthly Views</p>
              <div className="p-2 rounded-full bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                <Eye size={16} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{platformStats.monthlyViews}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Top Category</p>
              <div className="p-2 rounded-full bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
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
            Top Instagram Accounts
          </h2>
          <button
            onClick={handleViewAllTopChannels}
            className="flex items-center text-pink-600 dark:text-pink-400 hover:underline font-medium transition-colors duration-200"
          >
            View all
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-200">
          <TopChannelsTable 
            channels={mockTopChannels} 
            platform="instagram"
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
            { name: 'Fashion', image: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'Travel', image: 'https://images.pexels.com/photos/7625076/pexels-photo-7625076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'Fitness', image: 'https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { name: 'Beauty', image: 'https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
          ].map((category, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => navigate('/top/instagram')}>
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

export default InstagramPage;