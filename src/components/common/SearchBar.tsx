import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Youtube, Twitch, Instagram } from 'lucide-react';

const SearchBar = ({ onClose }: { onClose?: () => void }) => {
  const [query, setQuery] = useState('');
  const [platform, setPlatform] = useState<'youtube' | 'twitch' | 'instagram'>('youtube');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/${platform}/user/${encodeURIComponent(query.trim())}`);
      if (onClose) onClose();
    }
  };

  const getPlatformIcon = () => {
    switch (platform) {
      case 'youtube':
        return <Youtube size={18} className="text-red-600" />;
      case 'twitch':
        return <Twitch size={18} className="text-purple-600" />;
      case 'instagram':
        return <Instagram size={18} className="text-pink-600" />;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={20} className="text-gray-400" />
        </div>
        
        <input
          type="text"
          placeholder={`Search for a ${platform} channel...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-32 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 bg-white dark:bg-gray-800"
        />
        
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div className="border-l border-gray-300 dark:border-gray-600 h-6 mr-2"></div>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value as 'youtube' | 'twitch' | 'instagram')}
            className="h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-700 dark:text-gray-300 font-medium rounded-md"
          >
            <option value="youtube">YouTube</option>
            <option value="twitch">Twitch</option>
            <option value="instagram">Instagram</option>
          </select>
          <div className="mr-2">
            {getPlatformIcon()}
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;