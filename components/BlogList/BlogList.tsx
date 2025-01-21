import { Separator } from "../ui/separator";
import ArticleCard from "../ArticleCard/ArticleCard";
import { PostMetadata } from "@/utils/types";

interface BlogListProps {
  title: string;
  description: string;
  postList: Array<PostMetadata>;
  // postList: Array<Post>;
}
// Set card height to largest card using auto-rows-fr
export default function BlogList({
  title,
  description,
  postList,
}: BlogListProps) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-8 gap-4">
      <header className="col-span-1 md:col-span-2 prose prose-char prose-headings:mb-0 lg:prose-xl flex h-full flex-col items-center lg:sticky  lg:items-start lg:text-left">
        <h1>{title}</h1>
        <p>{description}</p>
        <Separator />
      </header>
      <div className="col-span-2 md:col-span-6 grid grid-cols-2 gap-4 auto-rows-fr">
        {postList.map((post, index) => {
          return (
            <ArticleCard
              className={`${
                postList.length % 2 !== 0 && index === postList.length - 1
                  ? "col-span-full"
                  : "col-span-full lg:col-span-1"
              }`}
              key={post.slug}
              post={post}
            />
          );
        })}
      </div>
    </div>
  );
}
