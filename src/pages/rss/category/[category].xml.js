import rss from '@astrojs/rss';
import { slugifyCategory } from '../../../../src/data/categories';
import { getBlogPostGroups } from '../../../../src/lib/blog';

export async function getStaticPaths() {
  const posts = await getBlogPostGroups();
  const categories = [...new Set(posts.map((p) => p.defaultPost.data.category).filter(Boolean))];
  return categories.map((c) => ({ params: { category: slugifyCategory(c) } }));
}

export async function GET(context) {
  const { category } = context.params;
  const posts = (await getBlogPostGroups()).filter(
    (p) => slugifyCategory(p.defaultPost.data.category || '') === category
  );
  return rss({
    title: `Category: ${category}`,
    description: `Latest posts in ${category}`,
    site: context.site,
    items: posts.map((post) => ({
      ...post.defaultPost.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}

