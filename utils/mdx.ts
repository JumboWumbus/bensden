import fs from "fs";
import path from "path";
import readingTime from "reading-time";
import matter from "gray-matter";

type Metadata = {
  title: string;
  publishedAt?: string;
  summary: string;
  tags?: string[];
  slug?: string;
  image?: string;
};

const CONTENT_DIRS = ["blog", "projects", "tiny-tips"];
const BASE_DIR = path.join(process.cwd(), "markdown/");
const METADATA_FILE = path.join(process.cwd(), "public", "metadata.json");

// Parse the frontmatter using `gray-matter`
function parseFrontmatter(fileContent: string): {
  metadata: Metadata;
  content: string;
} {
  const { data, content } = matter(fileContent);

  return {
    metadata: {
      title: data.title ?? "",
      publishedAt: data.publishedAt || new Date().toISOString(),
      summary: data.summary ?? "",
      tags: Array.isArray(data.tags)
        ? data.tags
        : (data.tags ?? "").split(",").map((tag: string) => tag.trim()),
      slug: data.slug,
      image: data.image,
    },
    content,
  };
}

// Get all MDX files from a directory
function getMDXFiles(dir: string): string[] {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.join(dir, file));
}

// Read an MDX file and extract metadata + content
function readMDXFile(filePath: string): {
  metadata: Metadata;
  content: string;
} {
  return parseFrontmatter(fs.readFileSync(filePath, "utf-8"));
}

// Generate metadata.json from all MDX files
export function generateMetadataJson() {
  const metadataList = CONTENT_DIRS.flatMap((section) => {
    const dirPath = path.join(BASE_DIR, section);
    return getMDXFiles(dirPath).map((filePath) => {
      const { metadata, content } = readMDXFile(filePath);
      const slug = path.basename(filePath, ".mdx");
      return {
        ...metadata,
        slug,
        url: `/${section}/post/${slug}`,
        section,
        tags: metadata.tags ?? [],
        minutes: Math.round(readingTime(content).minutes / 5) * 5,
      };
    });
  });

  fs.writeFileSync(METADATA_FILE, JSON.stringify(metadataList, null, 2));
  console.log("Metadata JSON file generated successfully!");
}
