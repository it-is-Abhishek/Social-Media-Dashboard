import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Youtube, Twitch, Instagram, Twitter } from 'lucide-react';
import TopChannelsTable, { Channel } from '../components/tables/TopChannelsTable';

const TopListsPage = () => {
  const { platform = 'youtube' } = useParams<{ platform: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Mock data for demonstration
  const [channels, setChannels] = useState<Channel[]>([]);
  
  useEffect(() => {
    // Validate platform and redirect if invalid
    const validPlatforms = ['youtube', 'twitch', 'instagram', 'twitter'];
    if (!validPlatforms.includes(platform)) {
      navigate('/top/youtube');
      return;
    }
    
    // Simulate API call
    setIsLoading(true);
    const timer = setTimeout(() => {
      setChannels(generateMockData(platform, 50));
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [platform, selectedCategory, navigate]);
  
  const generateMockData = (platform: string, count: number): Channel[] => {
    const result: Channel[] = [];
    
    for (let i = 1; i <= count; i++) {
      let name = '';
      let grade = '';
      
      // Assign different probability for grades
      const gradeRandom = Math.random();
      if (gradeRandom > 0.9) {
        grade = 'A+';
      } else if (gradeRandom > 0.7) {
        grade = 'A';
      } else if (gradeRandom > 0.5) {
        grade = 'B+';
      } else if (gradeRandom > 0.3) {
        grade = 'B';
      } else if (gradeRandom > 0.1) {
        grade = 'C+';
      } else {
        grade = 'C';
      }
      
      // Platform-specific mock data
      switch (platform) {
        case 'youtube':
          name = `YouTuber ${i}`;
          break;
        case 'twitch':
          name = `Streamer ${i}`;
          break;
        case 'instagram':
          name = `Influencer ${i}`;
          break;
        case 'twitter':
          name = `Twitter User ${i}`;
          break;
        default:
          name = `Creator ${i}`;
      }
      
      const subscribers = Math.floor(Math.random() * 50000000) + 500000;
      const views = Math.floor(Math.random() * 10000000000) + 10000000;
      
      let earningsMin = 0;
      let earningsMax = 0;
      
      if (subscribers >= 10000000) {
        earningsMin = 100000;
        earningsMax = 1000000;
      } else if (subscribers >= 1000000) {
        earningsMin = 10000;
        earningsMax = 100000;
      } else {
        earningsMin = 1000;
        earningsMax = 10000;
      }
      
      const formatEarnings = (num: number): string => {
        if (num >= 1000000) {
          return `$${(num / 1000000).toFixed(1)}M`;
        }
        if (num >= 1000) {
          return `$${(num / 1000).toFixed(1)}K`;
        }
        return `$${num}`;
      };
      
      const estimatedEarnings = `${formatEarnings(earningsMin)} - ${formatEarnings(earningsMax)}`;
      
      result.push({
        id: `creator-${i}`,
        rank: i,
        name,
        avatar: `https://i.pravatar.cc/150?img=${i + 10}`,
        platform: platform as any,
        subscribers,
        views,
        estimatedEarnings,
        grade,
      });
    }
    
    return result;
  };
  
  const handlePlatformChange = (newPlatform: string) => {
    navigate(`/top/${newPlatform}`);
    setSelectedCategory('all');
  };
  
  const platforms = [
    { id: 'youtube', name: 'YouTube', icon: <Youtube size={20} className="text-red-600" /> },
    { id: 'twitch', name: 'Twitch', icon: <Twitch size={20} className="text-purple-600" /> },
    { id: 'instagram', name: 'Instagram', icon: <Instagram size={20} className="text-pink-600" /> },
    { id: 'twitter', name: 'Twitter', icon: <Twitter size={20} className="text-blue-400" /> },
  ];
  
  const categories = {
    youtube: [
      { id: 'all', name: 'All Categories' },
      { id: 'gaming', name: 'Gaming' },
      { id: 'entertainment', name: 'Entertainment' },
      { id: 'music', name: 'Music' },
      { id: 'education', name: 'Education' },
      { id: 'tech', name: 'Tech' },
    ],
    twitch: [
      { id: 'all', name: 'All Categories' },
      { id: 'gaming', name: 'Gaming' },
      { id: 'irl', name: 'IRL' },
      { id: 'music', name: 'Music' },
      { id: 'creative', name: 'Creative' },
    ],
    instagram: [
      { id: 'all', name: 'All Categories' },
      { id: 'fashion', name: 'Fashion' },
      { id: 'travel', name: 'Travel' },
      { id: 'fitness', name: 'Fitness' },
      { id: 'food', name: 'Food' },
      { id: 'beauty', name: 'Beauty' },
    ],
    twitter: [
      { id: 'all', name: 'All Categories' },
      { id: 'news', name: 'News' },
      { id: 'sports', name: 'Sports' },
      { id: 'politics', name: 'Politics' },
      { id: 'entertainment', name: 'Entertainment' },
      { id: 'tech', name: 'Tech' },
    ],
  };
  
  const currentPlatform = platforms.find(p => p.id === platform) || platforms[0];
  const currentCategories = categories[platform as keyof typeof categories] || categories.youtube;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Top {currentPlatform.name} Creators
      </h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-8 transition-colors duration-200">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Filter by Platform</h2>
              <div className="flex flex-wrap gap-2">
                {platforms.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handlePlatformChange(p.id)}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      platform === p.id
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {p.icon}
                    <span className="ml-2">{p.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Filter by Category</h2>
              <div className="flex flex-wrap gap-2">
                {currentCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-200">
        <TopChannelsTable 
          channels={channels} 
          platform={platform as any}
          isLoading={isLoading} 
        />
        
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing top {channels.length} creators on {currentPlatform.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopListsPage;