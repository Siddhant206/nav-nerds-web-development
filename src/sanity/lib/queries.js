export const blogQuery = `
  *[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    mainImage{
      asset->{url},
      alt
    },
    description,
    excerpt,
    "author": author->{name, image, bio}, 
     "readingTime": round(length(pt::text(body)) / 5 / 60)
  }
`;

export const blogBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    mainImage{
      asset->{url},
      alt
    },
    body,
    tag,
    excerpt,
    "author": author->{name, image, bio}, 
     "readingTime": round(length(pt::text(body)) / 5 / 60)
  }
`; 