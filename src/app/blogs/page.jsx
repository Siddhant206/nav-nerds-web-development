
import { getAllBlogs, getBlogCategories } from "@/sanity/lib/blog";
import BlogLayout from "./BlogLayout";
import { generateMetadata as generateBaseMetadata } from "@/component/SEO/generateMetadata";
import { pagesMetadata } from "@/component/SEO/pages-metadata";

const POSTS_PER_PAGE = 9; 
export async function generateMetadata({ searchParams }) {
  const { search, category } = await searchParams;
  const baseMetadata = pagesMetadata.blogs;

  let title = baseMetadata.title;
  if (search) title = `Search: ${search} | Navnerds`;
  if (category) title = `${category} Articles | Navnerds`;

  return generateBaseMetadata({
    ...baseMetadata,
    title,
  });
}

export default async function BlogsPage({ searchParams }) {
  const params = await searchParams;
  const page = parseInt(params.page) || 1;
  const search = params.search || '';
  const category = params.category || '';

  // Fetch data server-side
  const [blogsData, categories] = await Promise.all([
    getAllBlogs({
      page,
      limit: POSTS_PER_PAGE,
      search,
      category
    }),
    getBlogCategories()
  ]);

  const { blogs, totalCount } = blogsData;
  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  return (
    <BlogLayout
      blogs={blogs}
      categories={categories}
      currentPage={page}
      totalPages={totalPages}
      totalResults={totalCount}
      searchQuery={search}
      selectedCategory={category}
      baseUrl="/blogs"
    />
  );
}