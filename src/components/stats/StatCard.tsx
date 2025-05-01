import { ReactNode } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string | number;
  trend?: 'up' | 'down' | 'neutral';
  icon?: ReactNode;
  color?: string;
  isLoading?: boolean;
}

const StatCard = ({
  title,
  value,
  change,
  trend,
  icon,
  color = 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  isLoading = false,
}: StatCardProps) => {
  const renderTrend = () => {
    if (!trend || !change) return null;

    if (trend === 'up') {
      return (
        <div className="flex items-center text-green-600 dark:text-green-400">
          <TrendingUp size={14} />
          <span className="ml-1 text-xs font-medium">{change}</span>
        </div>
      );
    }

    if (trend === 'down') {
      return (
        <div className="flex items-center text-red-600 dark:text-red-400">
          <TrendingDown size={14} />
          <span className="ml-1 text-xs font-medium">{change}</span>
        </div>
      );
    }

    return <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{change}</span>;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-1/3"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
            {icon && <div className={`p-2 rounded-full ${color}`}>{icon}</div>}
          </div>
          <div className="mb-1">
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
          </div>
          {renderTrend()}
        </>
      )}
    </div>
  );
};

export default StatCard;