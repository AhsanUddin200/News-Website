export interface Article {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  imageUrl: string;
  date: string;
}

export interface User {
  username: string;
  isAdmin: boolean;
}