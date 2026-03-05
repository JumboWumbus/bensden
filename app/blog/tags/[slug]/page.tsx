import BlogList from "@/components/BlogList/BlogList";
import { getMetadata } from "@/utils/Metadata/getMetadata";
import { PostMetadata } from "@/utils/types";
import { notFound } from "next/navigation";

function filterPostsByTag(tag: string, posts: PostMetadata[]): PostMetadata[] {
  return posts.filter((post) => post.tags.includes(tag));
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const metadata = await getMetadata();
  const filteredPosts = filterPostsByTag(slug, metadata);

  if (filteredPosts.length === 0) {
    return notFound();
  }

  return (
    <BlogList
      title={"Tag filter"}
      description={`Posts with the tag ${slug}`}
      postList={filteredPosts}
    />
  );
}
