import fs from "fs";
import path from "path";
import readingTime from "reading-time";

type Metadata = {
  title: string;
  publishedAt?: string;
  summary: string;
  tags?: string;
  slug?: string;
  image?: string;
};

function parseFrontmatter(fileContent: string): {
  metadata: Metadata;
  content: string;
} {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes

    // If the key is "tags", handle it as an array
    if (key.trim() === "tags") {
      // If the value looks like an array (e.g., [test, berries, pie])
      if (value.startsWith("[") && value.endsWith("]")) {
        // Parse the string into an array of tags
        value = value
          .slice(1, -1)
          .split(",")
          .map((tag) => tag.trim().replace(/^['"](.*)['"]$/, "$1"));
      }
    }

    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

export function generateMetadataJson() {
  const baseDir = path.join(process.cwd(), "markdown/"); // Replace with actual path to MDX files
  const metadataFile = path.join(process.cwd(), "public", "metadata.json");

  // List of directories for different types of content
  const contentDirs = ["blog", "projects", "tiny-tips"];

  const metadataList: Array<
    Partial<Metadata> & {
      slug: string;
      url: string;
      tags: string[];
      section: string;
      minutes: number;
    }
  > = [];

  contentDirs.forEach((subDir) => {
    const dirPath = path.join(baseDir, subDir);
    const files = getMDXFiles(dirPath);

    files.forEach((filePath) => {
      const { metadata, content } = readMDXFile(filePath);
      const slug = path.basename(filePath, ".mdx");
      const url = `/${subDir}/${slug}`; // Generate URL based on directory and slug
      const section = subDir; // Set section based on the directory name
      const readTime = readingTime(content);
      const minutes = Math.round(readTime.minutes / 5) * 5;
      const publishedAt = metadata.publishedAt || new Date().toISOString();
      const tags = metadata?.tags ?? [];

      // Add metadata entry
      metadataList.push({
        ...metadata,
        slug,
        url,
        section,
        tags,
        minutes,
        publishedAt,
      });
    });
  });
  // Write metadata to JSON file
  fs.writeFileSync(metadataFile, JSON.stringify(metadataList, null, 2));
  console.log("Metadata JSON file generated successfully!");
}

// Function to get all MDX files in a directory
function getMDXFiles(dir: string): string[] {
  return fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => path.join(dir, file));
}

// Function to read an MDX file and parse its front matter
function readMDXFile(filePath: string): {
  metadata: Metadata;
  content: string;
} {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}
