import { Metadata } from 'next';
import { PageMetadata } from './pages-metadata'; 

export const siteConfig = {
    name: "Navnerds",
    url: "https://www.navnerds.com",
    ogImage: "/images/default-og.jpg",
};

export function generateMetadata(pageData){
    const baseUrl = siteConfig.url;

    return {
        title: pageData.title,
        description: pageData.description,
        keywords: pageData.keywords?.join(", "),
        robots: pageData.robots || "index, follow",

        openGraph: pageData.openGraph
            ? {
                title: pageData.openGraph.title,
                description: pageData.openGraph.description,
                type: (pageData.openGraph.type) || "website",
                url: pageData.canonical || siteConfig.url,
                images: pageData.openGraph.image
                    ? [
                        {
                            url: `${baseUrl}${pageData.openGraph.image}`,
                            width: 1200,
                            height: 630,
                            alt: pageData.openGraph.title,
                        },
                    ]
                    : undefined,
            }
            : undefined,

        twitter: pageData.twitter
            ? {
                card: pageData.twitter.card,
                title: pageData.twitter.title,
                description: pageData.twitter.description,
                images: pageData.twitter.image
                    ? [`${baseUrl}${pageData.twitter.image}`]
                    : undefined,
            }
            : undefined,
        verification: pageData.verification
            ? {
                google: pageData.verification.google, 
            }
            : undefined,
        alternates: pageData.canonical
            ? {
                canonical: pageData.canonical,
            }
            : undefined,
    };
}

