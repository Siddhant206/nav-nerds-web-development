
// import { blogQuery, blogBySlugQuery } from "./queries";
// import { sanityFetch } from "./live";
 

// export async function getPostBySlug(slug )  {
//     const result = await sanityFetch({
//         query: blogBySlugQuery,
//         params: { slug }
//     });
//     return result.data;
// }

// export async function getAllPosts(limit ) {
//     const query = limit ? `${blogQuery}[0...${limit}]` : blogQuery;
//     const result = await sanityFetch({
//         query: query
//     });
//     return result.data;
// }


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

  const [blogs, totalCount] = await Promise.all([
    client.fetch(postsQuery),
    client.fetch(countQuery)
  ]);

  return { blogs, totalCount };
}

export async function getBlogCategories() {
  const query = `array::unique(*[_type == "post" && defined(category)].category)`;
  return client.fetch(query);
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
  
  return client.fetch(query, { slug });
}