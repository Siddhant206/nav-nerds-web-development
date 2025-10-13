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
        url: "https://www.navnerds.com/",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
      },
      {
        url: "https://www.navnerds.com/pricing",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: "https://www.navnerds.com/contact-us",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.8,
      },
      {
        url: "https://www.navnerds.com/career",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: "https://www.navnerds.com/about-us",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.9,
      },
      {
        url: "https://www.navnerds.com/privacy-policy",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.8,
      },
      {
        url: "https://www.navnerds.com/services/support",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.8,
      },
      {
        url: "https://www.navnerds.com/services/training",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.8,
      },
      {
        url: "https://www.navnerds.com/services/migration",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.8,
      },
      {
        url: "https://www.navnerds.com/services/integration",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.8,
      },
      {
        url: "https://www.navnerds.com/services/customization",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.8,
      },
      {
        url: "https://www.navnerds.com/services/implementation",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.8,
      },
      {
        url: "https://www.navnerds.com/services/website-development",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.8,
      },
      {
        url: "https://www.navnerds.com/services/dedicated-resources",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.8,
      },
     
      ...posts,
    ];

}