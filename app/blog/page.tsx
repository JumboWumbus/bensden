import BlogList from "@/components/BlogList/BlogList";
import { getMetadata } from "@/utils/Metadata/getMetadata";
export const dynamic = "force-static";
export default async function BlogPage() {
  const metadata = await getMetadata();
  return (
    <>
      <BlogList
        title="Blog"
        description="Welcome to the blog section"
        postList={metadata}
      />
    </>
  );
}
