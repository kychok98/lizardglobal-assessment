export function filterPostsByCategory(
  posts: Post[],
  categories: string[] = []
): Post[] {
  if (!categories.length) return posts;

  return posts.filter(post =>
    post.categories.some(category => categories.includes(category.name))
  );
}
