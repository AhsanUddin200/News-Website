import { useState, useEffect } from 'react';
import { Article } from '../types';
import { articles } from '../data/articles';

export function useSearch(query: string) {
  const [results, setResults] = useState<Article[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchResults = articles.filter((article) => {
      const searchTerm = query.toLowerCase();
      return (
        article.title.toLowerCase().includes(searchTerm) ||
        article.content.toLowerCase().includes(searchTerm) ||
        article.summary.toLowerCase().includes(searchTerm)
      );
    });

    setResults(searchResults);
  }, [query]);

  return results;
}