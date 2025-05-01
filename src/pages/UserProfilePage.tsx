import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Users, Eye, TrendingUp, DollarSign } from 'lucide-react';
import GrowthChart from '../components/charts/GrowthChart';

interface Stats {
  followers: number;
  views: number;
  growth: string;
  earnings: string;
  growthData: { date: string; value: number }[];
}

const UserProfilePage = () => {
  const { platform = 'youtube', username = '' } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<Stats>({
    followers: 0,
    views: 0,
    growth: '+0%',
    earnings: '$0 - $0',
    growthData: []
  });

  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    const timer = setTimeout(() => {
      // Generate mock growth data
      const growthData = Array.from({ length: 30 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (29 - i));
        return {
          date: date.toISOString().split('T')[0],
          value: 1000000 + Math.random() * 500000
        };
      });

      setStats({
        followers: 1000000,
        views: 50000000,
        growth: '+2.5%',
        earnings: '$1K - $16K',
        growthData
      });
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [platform, username]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getChartColor = () => {
    switch (platform) {
      case 'youtube': return '#EF4444';
      case 'twitch': return '#9333EA';
      case 'instagram': return '#EC4899';
      default: return '#3B82F6';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          {isLoading ? (
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {username}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {platform.charAt(0).toUpperCase() + platform.slice(1)} Creator
              </p>
            </>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Followers</h3>
              <Users size={20} className="text-blue-600" />
            </div>
            {isLoading ? (
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
            ) : (
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatNumber(stats.followers)}
              </p>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Views</h3>
              <Eye size={20} className="text-green-600" />
            </div>
            {isLoading ? (
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
            ) : (
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatNumber(stats.views)}
              </p>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Growth</h3>
              <TrendingUp size={20} className="text-purple-600" />
            </div>
            {isLoading ? (
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
            ) : (
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.growth}
              </p>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Est. Earnings</h3>
              <DollarSign size={20} className="text-yellow-600" />
            </div>
            {isLoading ? (
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
            ) : (
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.earnings}
              </p>
            )}
          </div>
        </div>

        {/* Growth Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Growth Trend
          </h2>
          {isLoading ? (
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          ) : (
            <div className="h-64 flex items-center justify-center">
              <GrowthChart data={stats.growthData} color={getChartColor()} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
