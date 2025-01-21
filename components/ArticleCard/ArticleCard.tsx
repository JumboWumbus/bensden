import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  BsCalendar4Event,
  BsEye,
  BsClock,
  BsCalendar4Week,
} from "react-icons/bs";
import Link from "next/link";
import { PostMetadata } from "@/utils/types";

interface ArticleCardProps {
  post: PostMetadata;
  className?: string;
}

export default function ArticleCard({ post, className }: ArticleCardProps) {
  return (
    <Card
      className={`group flex flex-col justify-between shadow-none transition-shadow duration-300 hover:shadow-box-hov-lg hover:cursor-pointer ${className} `}
    >
      <div className="prose prose-sm prose-char ">
        <CardHeader className="p-4">
          <CardTitle className=" font-extrabold relative text-3xl  mb-1">
            <span className="relative after:duration-300 after:block after:content-[''] after:absolute after:bottom-[-4px] after:h-1 after:left-1/2 after:w-0 after:bg-primary after:transition-all group-hover:after:w-full group-hover:after:left-0">
              {post.title}
            </span>
          </CardTitle>
          <CardDescription className="flex gap-3">
            <div className="flex items-baseline gap-1">
              <span>
                <BsCalendar4Week />
              </span>
              <span>{post.publishedAt}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>
                <BsClock />
              </span>
              <span>{post.minutes}</span>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4">{post.summary}</CardContent>
      </div>

      <div>
        <CardFooter className="px-4 ">
          {post.tags.map((tag) => (
            <Link className="mr-2" key={`${tag}-link`} href="">
              <Badge variant={"secondary"}>{tag}</Badge>
            </Link>
          ))}
        </CardFooter>
      </div>
    </Card>
  );
}
