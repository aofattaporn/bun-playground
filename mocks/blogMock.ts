import { BlogType, CommentType } from "../models/Blog";

// Mock data for comments
const comments: CommentType[] = [
  {
    id: 1,
    author: "John Doe",
    content: "Great post!",
    createdAt: new Date("2023-10-01T10:30:00Z"),
  },
  {
    id: 2,
    author: "Jane Smith",
    content: "I enjoyed reading this.",
    createdAt: new Date("2023-10-02T15:20:00Z"),
  },
];

// Mock data for blogs
const blogs: BlogType[] = [
  {
    id: 1,
    title: "Introduction to Mock Data",
    content: "This is a sample blog post about generating mock data for APIs.",
    author: "Alice Johnson",
    createdAt: new Date("2023-10-01T08:45:00Z"),
    updatedAt: new Date("2023-10-01T08:45:00Z"),
    tags: ["mock data", "API", "web development"],
    comments: [comments[0]],
  },
  {
    id: 2,
    title: "Working with TypeScript",
    content:
      "TypeScript is a superset of JavaScript that adds static types to the language.",
    author: "Bob Williams",
    createdAt: new Date("2023-10-02T11:15:00Z"),
    updatedAt: new Date("2023-10-02T11:15:00Z"),
    tags: ["TypeScript", "JavaScript", "programming"],
    comments: [comments[1]],
  },
];

export { blogs, comments };
