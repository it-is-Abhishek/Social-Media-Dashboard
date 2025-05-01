import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Youtube, Twitch, Instagram, Twitter } from 'lucide-react';

const PlatformDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const platforms = [
    { id: 'youtube', name: 'YouTube', icon: <Youtube size={18} className="text-red-600" />, color: 'border-red-600' },
    { id: 'twitch', name: 'Twitch', icon: <Twitch size={18} className="text-purple-600" />, color: 'border-purple-600' },
    { id: 'instagram', name: 'Instagram', icon: <Instagram size={18} className="text-pink-600" />, color: 'border-pink-600' },
    { id: 'twitter', name: 'Twitter', icon: <Twitter size={18} className="text-blue-400" />, color: 'border-blue-400' },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const selectPlatform = (platformId: string) => {
    navigate(`/${platformId}`);
    closeDropdown();
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-blue-500 dark:focus:ring-blue-600 transition-colors duration-200"
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          Platform
          <ChevronDown size={16} className="ml-2 -mr-1" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition-colors duration-200"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="platform-menu"
        >
          <div className="py-1" role="none">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => selectPlatform(platform.id)}
                className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                role="menuitem"
              >
                <div className={`mr-3 w-1 h-4 ${platform.color} rounded-sm`}></div>
                {platform.icon}
                <span className="ml-2">{platform.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlatformDropdown;