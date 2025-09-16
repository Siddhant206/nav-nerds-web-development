import { MetadataRoute } from 'next'; 
import { client } from '@/sanity/lib/client';


export async function getData() {
	const query = `*[_type == "post"] {
    "currentSlug": slug.current,
    title,
    "updated": _updatedAt
  }`;
	const data = await client.fetch(query);
	return data;
}

export default async function sitemap() {
    const data = await getData()
    const posts = data.map((post) => ({
        url: `https://www.navnerds.com/blogs/${post.currentSlug}`,
        lastModified: post.lastModified,
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return [
        {
            url: 'https://www.navnerds.com/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://www.navnerds.com/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.navnerds.com/career',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://www.navnerds.com/about',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.9,
        },
        {
            url: 'https://www.navnerds.com/privacy-policy',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.navnerds.com/virtual-cfo-services',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.navnerds.com/accounting-bookkeeping',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.navnerds.com/compliance-management',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.navnerds.com/mis-reporting',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.navnerds.com/business-intelligence',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.navnerds.com/risk-mitigation',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.navnerds.com/fund-management',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.navnerds.com/associate-services',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        ...posts,
    ];

}