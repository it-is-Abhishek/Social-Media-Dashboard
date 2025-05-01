import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';

export interface Channel {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  platform: 'youtube' | 'twitch' | 'instagram' | 'twitter';
  subscribers: number;
  views: number;
  estimatedEarnings: string;
  grade: string;
}

interface TopChannelsTableProps {
  channels: Channel[];
  platform: 'youtube' | 'twitch' | 'instagram' | 'twitter';
  isLoading?: boolean;
}

const TopChannelsTable = ({ channels, platform, isLoading = false }: TopChannelsTableProps) => {
  const [sortField, setSortField] = useState<keyof Channel>('rank');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: keyof Channel) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedChannels = [...channels].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];

    if (sortField === 'subscribers' || sortField === 'views') {
      aValue = Number(aValue);
      bValue = Number(bValue);
    }

    if (sortField === 'estimatedEarnings') {
      // Extract the first number from the range (e.g., "$1K - $16K" -> 1000)
      aValue = parseFloat(String(a.estimatedEarnings).replace(/[^0-9.]/g, '')) || 0;
      bValue = parseFloat(String(b.estimatedEarnings).replace(/[^0-9.]/g, '')) || 0;
    }

    if (aValue < bValue) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': case 'A': case 'A-': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'B+': case 'B': case 'B-': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'C+': case 'C': case 'C-': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'D+': case 'D': case 'D-': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400';
    }
  };

  const platformClass = {
    youtube: 'text-red-600 dark:text-red-400',
    twitch: 'text-purple-600 dark:text-purple-400',
    instagram: 'text-pink-600 dark:text-pink-400',
    twitter: 'text-blue-500 dark:text-blue-400',
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('rank')}
            >
              <div className="flex items-center">
                Rank
                {sortField === 'rank' && (
                  sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                )}
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              Channel
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('subscribers')}
            >
              <div className="flex items-center">
                Subscribers
                {sortField === 'subscribers' && (
                  sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                )}
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('views')}
            >
              <div className="flex items-center">
                Views
                {sortField === 'views' && (
                  sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                )}
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('estimatedEarnings')}
            >
              <div className="flex items-center">
                Est. Earnings
                {sortField === 'estimatedEarnings' && (
                  sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                )}
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('grade')}
            >
              <div className="flex items-center">
                Grade
                {sortField === 'grade' && (
                  sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                )}
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {isLoading ? (
            Array(5).fill(0).map((_, i) => (
              <tr key={i} className="animate-pulse">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-8"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    <div className="ml-4">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-8"></div>
                </td>
              </tr>
            ))
          ) : (
            sortedChannels.map((channel) => (
              <tr key={channel.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {channel.rank}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={channel.avatar}
                      alt={`${channel.name} avatar`}
                    />
                    <div className="ml-4">
                      <div className="flex items-center">
                        <Link
                          to={`/${channel.platform}/user/${channel.id}`}
                          className={`text-sm font-medium ${platformClass[channel.platform]} hover:underline`}
                        >
                          {channel.name}
                        </Link>
                        <ArrowUpRight size={14} className="ml-1 opacity-50" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  {formatNumber(channel.subscribers)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  {formatNumber(channel.views)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  {channel.estimatedEarnings}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getGradeColor(channel.grade)}`}>
                    {channel.grade}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TopChannelsTable;