import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Sun, Moon, BarChart } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import SearchBar from '../common/SearchBar';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-[#3b2a72] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 bg-white rounded-full flex items-center justify-center">
              <BarChart className="text-[#3b2a72]" size={28} />
            </div>
            <span className="text-xl font-bold text-white">SocialStats</span>
          </Link>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full text-white hover:bg-white/10 transition-colors duration-200"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-white hover:bg-white/10 transition-colors duration-200"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              to="/signup"
              className="px-6 py-2 bg-white text-[#3b2a72] rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200 shadow-md"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {isSearchOpen && (
          <div className="py-3 border-t border-white/10">
            <SearchBar onClose={() => setIsSearchOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
