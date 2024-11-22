import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Article } from '../types';
import { articles } from '../data/articles';
import { PlusCircle, Edit2, Trash2 } from 'lucide-react';

export default function AdminDashboard() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  if (!isAuthenticated) {
    navigate('/admin');
    return null;
  }

  const handleDelete = (id: string) => {
    // In a real app, this would make an API call
    console.log('Deleting article:', id);
  };

  const handleSave = (article: Article) => {
    // In a real app, this would make an API call
    console.log('Saving article:', article);
    setEditingArticle(null);
    setIsAdding(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <div className="space-x-4">
          <button
            onClick={() => setIsAdding(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Article
          </button>
          <button
            onClick={logout}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Logout
          </button>
        </div>
      </div>

      {(isAdding || editingArticle) && (
        <ArticleForm
          article={editingArticle}
          onSave={handleSave}
          onCancel={() => {
            setEditingArticle(null);
            setIsAdding(false);
          }}
        />
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {articles.map((article) => (
            <li key={article.id} className="px-6 py-4 flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium text-gray-900">{article.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{article.category}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => setEditingArticle(article)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(article.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}