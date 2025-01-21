import { PostMetadata } from "../types";

export async function getMetadata(): Promise<PostMetadata[]> {
  const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const response = await fetch(`${baseUrl}/metadata.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch metadata: ${response.statusText}`);
  }

  const metadata: PostMetadata[] = await response.json();
  return metadata;
}
