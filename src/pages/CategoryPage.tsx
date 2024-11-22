import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';

export default function CategoryPage() {
  const { category } = useParams();

  const categoryArticles = articles.filter(
    (article) =>
      article.category.trim().toLowerCase() === category?.trim().toLowerCase()
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 capitalize">
        {category} News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryArticles.length > 0 ? (
          categoryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <p className="text-gray-500 text-lg">
            No articles found in the "{category}" category.
          </p>
        )}
      </div>
    </main>
  );
}
