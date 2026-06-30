import rss from '@astrojs/rss';
import { slugifyTag } from '../../../../src/lib/slug';
import { getBlogPostGroups } from '../../../../src/lib/blog';

export async function getStaticPaths() {
  const posts = await getBlogPostGroups();
  const tags = [...new Set(posts.flatMap((p) => p.defaultPost.data.tags || []))];
  return tags.map((t) => ({ params: { tag: slugifyTag(t) } }));
}

export async function GET(context) {
  const { tag } = context.params;
  const posts = (await getBlogPostGroups()).filter((p) =>
    (p.defaultPost.data.tags || []).some((t) => slugifyTag(t) === tag)
  );
  return rss({
    title: `Tag: ${tag}`,
    description: `Latest posts tagged ${tag}`,
    site: context.site,
    items: posts.map((post) => ({
      ...post.defaultPost.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}

