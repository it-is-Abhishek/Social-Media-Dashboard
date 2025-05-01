import { useState } from 'react';
import { Check, ChevronDown, ChevronUp, ExternalLink, Calendar } from 'lucide-react';

interface ProfileHeaderProps {
  platform: 'youtube' | 'twitch' | 'instagram' | 'twitter';
  username: string;
  displayName: string;
  avatar: string;
  isVerified?: boolean;
  joinDate?: string;
  description?: string;
  profileUrl?: string;
  isLoading?: boolean;
}

const ProfileHeader = ({
  platform,
  username,
  displayName,
  avatar,
  isVerified = false,
  joinDate,
  description,
  profileUrl,
  isLoading = false,
}: ProfileHeaderProps) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const platformStyles = {
    youtube: {
      bg: 'border-red-600',
      text: 'text-red-600 dark:text-red-400',
    },
    twitch: {
      bg: 'border-purple-600',
      text: 'text-purple-600 dark:text-purple-400',
    },
    instagram: {
      bg: 'border-pink-600',
      text: 'text-pink-600 dark:text-pink-400',
    },
    twitter: {
      bg: 'border-blue-500',
      text: 'text-blue-500 dark:text-blue-400',
    },
  };

  const platformStyle = platformStyles[platform];

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-200">
      {isLoading ? (
        <div className="animate-pulse p-6">
          <div className="flex items-center">
            <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-16 w-16"></div>
            <div className="ml-4 flex-1">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
            </div>
          </div>
          <div className="mt-4 h-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      ) : (
        <div className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <div className="relative">
              <div className={`absolute inset-0 -m-1 border-2 ${platformStyle.bg} rounded-full opacity-50`}></div>
              <img
                src={avatar}
                alt={`${displayName} profile`}
                className="h-16 w-16 rounded-full object-cover relative z-10"
              />
            </div>
            <div className="ml-0 sm:ml-4 mt-4 sm:mt-0">
              <div className="flex items-center">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{displayName}</h2>
                {isVerified && (
                  <span className="ml-2 bg-blue-500 text-white p-0.5 rounded-full">
                    <Check size={12} />
                  </span>
                )}
              </div>
              <p className={`text-sm ${platformStyle.text}`}>@{username}</p>
              
              {joinDate && (
                <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={14} className="mr-1" />
                  <span>Joined {joinDate}</span>
                </div>
              )}
            </div>
            
            {profileUrl && (
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto mt-4 sm:mt-0 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center"
              >
                Visit {platform === 'youtube' ? 'Channel' : 'Profile'}
                <ExternalLink size={14} className="ml-1" />
              </a>
            )}
          </div>
          
          {description && (
            <div className="mt-4">
              <div className={`text-sm text-gray-700 dark:text-gray-300 prose dark:prose-invert max-w-none ${
                !isDescriptionExpanded ? 'line-clamp-3' : ''
              }`}>
                {description}
              </div>
              {description.length > 150 && (
                <button
                  onClick={toggleDescription}
                  className="mt-1 flex items-center text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  {isDescriptionExpanded ? (
                    <>
                      <span>Show less</span>
                      <ChevronUp size={16} className="ml-1" />
                    </>
                  ) : (
                    <>
                      <span>Show more</span>
                      <ChevronDown size={16} className="ml-1" />
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;