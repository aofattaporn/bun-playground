export type BlogType = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  comments: CommentType[];
};

export type CommentType = {
  id: number;
  author: string;
  content: string;
  createdAt: Date;
};
