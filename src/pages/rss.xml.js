import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getBlogPostGroups } from '../lib/blog';

export async function GET(context) {
	const posts = await getBlogPostGroups();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.defaultPost.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
