import { getPostBySlug } from "@/sanity/lib/blog";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getPostBySlug(slug);

  if (!blog) return { title: "Blog not found | Navnerds" };

  const ogImage = blog.mainImage?.asset?.url
    ? urlFor(blog.mainImage.asset.url).width(1200).height(630).url()
    : "/default-og.jpg";

  return {
    title: blog.title,
    description: blog.excerpt || blog.description || "Read our latest insights.",
    openGraph: {
      title: blog.title,
      description: blog.excerpt || blog.description || "",
      url: `https://www.navnerds.com/blogs/${slug}`,
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630, alt: blog.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt || blog.description || "",
      images: [ogImage],
    },
    alternates: {
      canonical: `https://www.navnerds.com/blogs/${slug}`,
    },
    robots: "index, follow",
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <section className="w-full min-h-screen bg-[url(/HomePageBg.webp)] bg-cover bg-no-repeat bg-top">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="relative w-full border-b-2 overflow-hidden"
      >
        <div className="absolute bottom-0 md:top-0 left-10 h-fit w-full -z-10">
          <Image
            src="/Banner/BreadcrumbShape.png"
            alt="Breadcrumb background"
            width={1920}
            height={1020}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-sm px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 py-5 md:py-10 text-center">
            Blogs 
          </h1>
        
        </div>
      </nav>

      {/* Blog Content */}
      <div className="max-w-5xl mx-auto flex flex-col gap-6 px-4 py-12">
        {/* Tag */}
        {post.tag && (
          <span className="self-start text-xs px-4 py-2 bg-blue-100 text-gray-800 rounded-full font-semibold uppercase tracking-wide">
            {post.tag}
          </span>
        )}

        {/* Title with styled background */}
        <div className="bg-[#4fd0da] p-4 rounded-2xl text-white text-center shadow-lg">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            {post.title}
          </h1>

          {/* Meta information */}
          <div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-blue-100 text-sm">
            <time dateTime={post.publishedAt} className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.readingTime && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {post.readingTime} min read
              </span>
            )}
          </div>
        </div>

        {/* Featured Image */}
        {post.mainImage?.asset?.url && (
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={urlFor(post.mainImage.asset.url).width(1200).height(600).url()}
              alt={post.mainImage?.alt || post.title}
              width={1200}
              height={600}
              className="w-full h-auto max-h-[30rem] object-cover" 
              priority
            />
          </div>
        )}

        {/* Subtitle/Excerpt */}
        {(post.subtitle || post.excerpt) && (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed font-medium">
                {post.subtitle || post.excerpt}
              </p>
            </div>
          </div>
        )}

        {/* Main Content */}
        {post.body && (
          <article className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm text-gray-800">
            <div className="prose prose-lg prose-blue max-w-none 
                          prose-headings:text-gray-800 
                          prose-p:text-gray-700 prose-p:leading-relaxed
                          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                          prose-strong:text-gray-800
                          prose-blockquote:border-blue-200 prose-blockquote:bg-blue-50/50 prose-blockquote:rounded-lg prose-blockquote:p-4
                          prose-code:bg-gray-100 prose-code:rounded prose-code:px-2 prose-code:py-1
                          prose-pre:bg-gray-900 prose-pre:rounded-lg
                          prose-img:rounded-lg prose-img:shadow-md">
              <PortableText value={post.body} />
            </div>
          </article>
        )}

        {/* Back to Blog Link */}
        <div className="flex justify-center pt-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#4fd0da] text-white rounded-full hover:bg-black transition-colors font-medium shadow-md"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}