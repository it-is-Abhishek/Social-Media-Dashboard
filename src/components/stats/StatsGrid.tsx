import { Users, Eye, Award, DollarSign, ThumbsUp, MessageSquare, Video, BarChart } from 'lucide-react';
import StatCard from './StatCard';

interface StatsGridProps {
  platform: 'youtube' | 'twitch' | 'instagram' | 'twitter';
  isLoading?: boolean;
  stats?: {
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

const StatsGrid = ({ platform, isLoading = false, stats }: StatsGridProps) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getIconColor = (platform: string) => {
    switch (platform) {
      case 'youtube':
        return 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400';
      case 'twitch':
        return 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400';
      case 'instagram':
        return 'bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400';
      case 'twitter':
        return 'bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400';
      default:
        return 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400';
    }
  };

  const iconColor = getIconColor(platform);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Followers"
        value={isLoading ? 0 : formatNumber(stats?.followers || 0)}
        change="+2.5% (30d)"
        trend="up"
        icon={<Users size={16} />}
        color={iconColor}
        isLoading={isLoading}
      />
      <StatCard
        title="Total Views"
        value={isLoading ? 0 : formatNumber(stats?.views || 0)}
        change="+4.3% (30d)"
        trend="up"
        icon={<Eye size={16} />}
        color={iconColor}
        isLoading={isLoading}
      />
      <StatCard
        title="Rank"
        value={isLoading ? 0 : `#${stats?.rank || 0}`}
        change="No change"
        trend="neutral"
        icon={<Award size={16} />}
        color={iconColor}
        isLoading={isLoading}
      />
      <StatCard
        title="Est. Earnings"
        value={isLoading ? 0 : stats?.estimatedEarnings || '$0 - $0'}
        change="Monthly"
        trend="neutral"
        icon={<DollarSign size={16} />}
        color={iconColor}
        isLoading={isLoading}
      />
      
      {platform === 'youtube' && (
        <>
          <StatCard
            title="Total Likes"
            value={isLoading ? 0 : formatNumber(stats?.likes || 0)}
            change="+1.8% (30d)"
            trend="up"
            icon={<ThumbsUp size={16} />}
            color={iconColor}
            isLoading={isLoading}
          />
          <StatCard
            title="Total Comments"
            value={isLoading ? 0 : formatNumber(stats?.comments || 0)}
            change="+0.7% (30d)"
            trend="up"
            icon={<MessageSquare size={16} />}
            color={iconColor}
            isLoading={isLoading}
          />
          <StatCard
            title="Videos"
            value={isLoading ? 0 : formatNumber(stats?.videos || 0)}
            change="+5 (30d)"
            trend="up"
            icon={<Video size={16} />}
            color={iconColor}
            isLoading={isLoading}
          />
          <StatCard
            title="Engagement"
            value={isLoading ? 0 : stats?.engagement || '0%'}
            change="+0.2% (30d)"
            trend="up"
            icon={<BarChart size={16} />}
            color={iconColor}
            isLoading={isLoading}
          />
        </>
      )}
    </div>
  );
};

export default StatsGrid;