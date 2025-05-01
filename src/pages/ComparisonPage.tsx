import { useState } from 'react';
import { X, Search, BarChart2 } from 'lucide-react';
import StatsGrid from '../components/stats/StatsGrid';
import GrowthChart from '../components/charts/GrowthChart';

interface CreatorData {
  id: string;
  platform: 'youtube' | 'twitch' | 'instagram' | 'twitter';
  name: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    rank: number;
    estimatedEarnings: string;
    likes?: number;
    comments?: number;
    videos?: number;
    engagement?: string;
  };
}

// Mock data for demonstration
const mockCreators: Record<string, CreatorData> = {
  'mrbeast': {
    id: 'mrbeast',
    platform: 'youtube',
    name: 'MrBeast',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stats: {
      followers: 100000000,
      views: 17000000000,
      rank: 5,
      estimatedEarnings: '$1.2M - $19.2M',
      likes: 350000000,
      comments: 8000000,
      videos: 700,
      engagement: '8.2%',
    }
  },
  'pewdiepie': {
    id: 'pewdiepie',
    platform: 'youtube',
    name: 'PewDiePie',
    avatar: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stats: {
      followers: 111000000,
      views: 28000000000,
      rank: 6,
      estimatedEarnings: '$800K - $12.8M',
      likes: 280000000,
      comments: 6000000,
      videos: 4500,
      engagement: '7.1%',
    }
  },
  'ninja': {
    id: 'ninja',
    platform: 'twitch',
    name: 'Ninja',
    avatar: 'https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stats: {
      followers: 18000000,
      views: 500000000,
      rank: 1,
      estimatedEarnings: '$500K - $1M',
    }
  },
  'charlidamelio': {
    id: 'charlidamelio',
    platform: 'instagram',
    name: 'Charli D\'Amelio',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stats: {
      followers: 45000000,
      views: 1500000000,
      rank: 10,
      estimatedEarnings: '$400K - $800K',
    }
  },
};

const ComparisonPage = () => {
  const [selectedCreators, setSelectedCreators] = useState<CreatorData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<CreatorData[]>([]);
  
  // Mock search functionality
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }
    
    // Filter from our mock data
    const results = Object.values(mockCreators).filter(creator => 
      creator.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
      !selectedCreators.some(selected => selected.id === creator.id)
    );
    
    setSearchResults(results);
  };
  
  const addCreator = (creator: CreatorData) => {
    if (selectedCreators.length < 3) {
      setSelectedCreators([...selectedCreators, creator]);
      setSearchResults(searchResults.filter(c => c.id !== creator.id));
      setSearchTerm('');
    }
  };
  
  const removeCreator = (creatorId: string) => {
    setSelectedCreators(selectedCreators.filter(c => c.id !== creatorId));
  };
  
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Compare Creators
      </h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-8 transition-colors duration-200">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Select up to 3 creators to compare
          </h2>
          
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a creator..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
              />
            </div>
            <button type="submit" className="sr-only">Search</button>
          </form>
          
          {searchResults.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Search Results</h3>
              <div className="space-y-2">
                {searchResults.map((creator) => (
                  <div 
                    key={creator.id}
                    className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200"
                    onClick={() => addCreator(creator)}
                  >
                    <img 
                      src={creator.avatar} 
                      alt={creator.name} 
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{creator.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{creator.platform.charAt(0).toUpperCase() + creator.platform.slice(1)} • {formatNumber(creator.stats.followers)} followers</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Selected Creators ({selectedCreators.length}/3)
            </h3>
            
            {selectedCreators.length === 0 ? (
              <div className="flex items-center justify-center p-8 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                <div className="text-center">
                  <BarChart2 size={36} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Search and select creators to compare their statistics
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedCreators.map((creator) => (
                  <div 
                    key={creator.id}
                    className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <img 
                      src={creator.avatar} 
                      alt={creator.name} 
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-3 flex-grow">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{creator.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {creator.platform.charAt(0).toUpperCase() + creator.platform.slice(1)} • 
                        {formatNumber(creator.stats.followers)} followers
                      </p>
                    </div>
                    <button
                      onClick={() => removeCreator(creator.id)}
                      className="p-1.5 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {selectedCreators.length > 0 && (
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Follower Comparison
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {selectedCreators.map((creator) => (
                  <div key={creator.id}>
                    <div className="mb-2 flex items-center">
                      <img 
                        src={creator.avatar} 
                        alt={creator.name} 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">{creator.name}</h3>
                    </div>
                    <div className="h-10 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <div 
                        className={`h-full rounded-lg ${
                          creator.platform === 'youtube' ? 'bg-red-600' :
                          creator.platform === 'twitch' ? 'bg-purple-600' :
                          creator.platform === 'instagram' ? 'bg-pink-600' : 'bg-blue-600'
                        }`}
                        style={{ 
                          width: `${Math.min(100, (creator.stats.followers / Math.max(...selectedCreators.map(c => c.stats.followers))) * 100)}%` 
                        }}
                      >
                      </div>
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {formatNumber(creator.stats.followers)} followers
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Total Views Comparison
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {selectedCreators.map((creator) => (
                  <div key={creator.id}>
                    <div className="mb-2 flex items-center">
                      <img 
                        src={creator.avatar} 
                        alt={creator.name} 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">{creator.name}</h3>
                    </div>
                    <div className="h-10 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <div 
                        className={`h-full rounded-lg ${
                          creator.platform === 'youtube' ? 'bg-red-600' :
                          creator.platform === 'twitch' ? 'bg-purple-600' :
                          creator.platform === 'instagram' ? 'bg-pink-600' : 'bg-blue-600'
                        }`}
                        style={{ 
                          width: `${Math.min(100, (creator.stats.views / Math.max(...selectedCreators.map(c => c.stats.views))) * 100)}%` 
                        }}
                      >
                      </div>
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {formatNumber(creator.stats.views)} views
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Estimated Earnings Comparison
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {selectedCreators.map((creator) => (
                  <div key={creator.id}>
                    <div className="mb-2 flex items-center">
                      <img 
                        src={creator.avatar} 
                        alt={creator.name} 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">{creator.name}</h3>
                    </div>
                    <p className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
                      {creator.stats.estimatedEarnings}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Estimated monthly earnings</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Growth Trends
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {selectedCreators.map((creator) => (
                <GrowthChart
                  key={creator.id}
                  title={`${creator.name} Followers Growth`}
                  color={
                    creator.platform === 'youtube' ? 'red' :
                    creator.platform === 'twitch' ? 'purple' :
                    creator.platform === 'instagram' ? 'pink' : 'blue'
                  }
                  formatValue={formatNumber}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ComparisonPage;