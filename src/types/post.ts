export interface Post {
  id: string;
  createdAt: string;
  content: string;
  authorId: string;
}

export interface Author {
  id: string;
  firstName: string;
}

export interface PostWithAuthor {
  post: Post;
  author: Author;
}
