import { Article } from '../types';
import ArticleCard from './ArticleCard';

interface SearchResultsProps {
  results: Article[];
  query: string;
}

export default function SearchResults({ results, query }: SearchResultsProps) {
  if (!query) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg mt-1 max-h-96 overflow-y-auto z-50">
      {results.length === 0 ? (
        <div className="p-4 text-gray-500">No results found for "{query}"</div>
      ) : (
        <div className="divide-y divide-gray-100">
          {results.map((article) => (
            <div key={article.id} className="p-4 hover:bg-gray-50">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}