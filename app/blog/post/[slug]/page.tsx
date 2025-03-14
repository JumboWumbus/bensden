import { getMetadata } from "@/utils/Metadata/getMetadata";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/markdown/blog/${slug}.mdx`);

  return <Post />;
}

export async function generateStaticParams() {
  const metadata = await getMetadata();
  const blogPosts = metadata.filter((post) => post.section === "blog");
  // Map the filtered posts to extract the slugs
  const slugs = blogPosts.map((post) => ({ slug: post.slug }));

  return slugs;
}

export const dynamicParams = false;
