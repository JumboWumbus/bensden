import { getMetadata } from "@/utils/Metadata/getMetadata";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(
    `@/markdown/blog/${slug}.mdx`
  );

  return (
    <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
      <Post />;
    </div>
  );
}

export async function generateStaticParams() {
  const metadata = await getMetadata();
  const blogPosts = metadata.filter((post) => post.section === "blog");
  // Map the filtered posts to extract the slugs
  const slugs = blogPosts.map((post) => ({ slug: post.slug }));

  return slugs;
}

export const dynamicParams = false;
