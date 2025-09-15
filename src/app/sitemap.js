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
        url: `https://www.vitwo.finance/blogs-resources/${post.currentSlug}`,
        lastModified: post.lastModified,
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return [
        {
            url: 'https://www.vitwo.finance/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://www.vitwo.finance/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.vitwo.finance/career',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://www.vitwo.finance/about',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.9,
        },
        {
            url: 'https://www.vitwo.finance/privacy-policy',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.vitwo.finance/virtual-cfo-services',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.vitwo.finance/accounting-bookkeeping',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.vitwo.finance/compliance-management',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.vitwo.finance/mis-reporting',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.vitwo.finance/business-intelligence',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.vitwo.finance/risk-mitigation',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.vitwo.finance/fund-management',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://www.vitwo.finance/associate-services',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        ...posts,
    ];

}