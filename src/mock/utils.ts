export function filterPostsByCategory(
  posts: IPost[],
  categories: string[] = []
): IPost[] {
  if (!categories.length) return posts;

  return posts.filter(post =>
    post.categories.some(category => categories.includes(category.name))
  );
}
