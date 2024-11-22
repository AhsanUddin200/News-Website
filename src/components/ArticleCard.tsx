import { Article } from '../types';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured }: ArticleCardProps) {
  return (
    <Link
      to={`/article/${article.id}`}
      className={`group overflow-hidden ${
        featured
          ? 'col-span-2 row-span-2'
          : 'col-span-1'
      }`}
    >
      <div className="relative h-full">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            {article.category}
          </span>
          <h3 className={`mt-2 text-white font-bold ${
            featured ? 'text-2xl' : 'text-lg'
          }`}>
            {article.title}
          </h3>
          {featured && (
            <p className="mt-2 text-gray-300 line-clamp-2">
              {article.summary}
            </p>
          )}
          <div className="mt-4 text-sm text-gray-300">
            {new Date(article.date).toLocaleDateString()}
          </div>
          {/* Add "Read More" button */}
          <div className="mt-4">
            <Link
              to={`/article/${article.id}`}
              className="text-blue-400 font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
