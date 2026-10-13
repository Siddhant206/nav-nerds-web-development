// sanity/lib/blog.js
import { client } from "./client";

export async function getAllBlogs({ 
  page = 1, 
  limit = 9, 
  search = '', 
  category = '' 
} = {}) {
  const offset = (page - 1) * limit;
  
  // Build dynamic filters
  let filters = `_type == "post" && defined(slug.current)`;
  
  if (search) {
    filters += ` && (title match "*${search}*" || excerpt match "*${search}*")`;
  }
  
  if (category) {
    filters += ` && category == "${category}"`;
  }

  // Count query
  const countQuery = `count(*[${filters}])`;
  
  // Posts query with pagination
  const postsQuery = `*[${filters}] | order(publishedAt desc) [${offset}...${offset + limit}] {
    _id,
    title,
    slug,
    excerpt,
    description,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt,
    readingTime,
    category
  }`;

  try {
    const [blogs, totalCount] = await Promise.all([
      client.fetch(postsQuery),
      client.fetch(countQuery)
    ]);

    return { blogs: Array.isArray(blogs) ? blogs : [], totalCount: totalCount || 0 };
  } catch (err) {
    console.warn("[blog.js] Failed to fetch blogs:", err?.message || err);
    return { blogs: [], totalCount: 0 };
  }
}

export async function getBlogCategories() {
  const query = `array::unique(*[_type == "post" && defined(category)].category)`;
  try {
    const categories = await client.fetch(query);
    return Array.isArray(categories) ? categories : [];
  } catch (err) {
    return [];
  }
}

export async function getPostBySlug(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    subtitle,
    description,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    body,
    publishedAt,
    readingTime,
    category,
    tag
  }`;
  
  try {
    return await client.fetch(query, { slug });
  } catch (err) {
    return null;
  }
}