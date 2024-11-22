import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';

export default function ArticleDetailPage() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <article className="prose lg:prose-xl mx-auto">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <div className="flex items-center space-x-4 mb-8">
          <span className="text-blue-600 font-semibold">{article.category}</span>
          <span className="text-gray-500">
            {new Date(article.date).toLocaleDateString()}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
        <p className="text-xl text-gray-700 mb-8">{article.summary}</p>
        <div className="text-gray-800 leading-relaxed">{article.content}</div>
      </article>
    </main>
  );
}