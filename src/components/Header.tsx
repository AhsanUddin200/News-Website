import { Menu, Search as SearchIcon, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import SearchResults from './SearchResults';

const categories = ['Politics', 'Tech', 'Sports', 'Business', 'Culture'];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchResults = useSearch(searchQuery);

  return (
    <header className="bg-white shadow-md bg-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <button
              className="sm:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-gray-900">CNN NEWS</h1>
            </Link>
          </div>

          <nav className="hidden sm:flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase()}`}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                {category}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <SearchResults results={searchResults} query={searchQuery} />
            </div>
            <Link to="/admin" className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-5 w-5 text-gray-600" />
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden py-2 space-y-1">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {category}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}