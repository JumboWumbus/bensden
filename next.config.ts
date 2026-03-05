import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const nextConfig: NextConfig = {
  // sassOptions: {
  //   silenceDeprecations: ["legacy-js-api"],
  // },
  transpilePackages: ["next-mdx-remote"],
  /* config options here */
  // pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  pageExtensions: ["tsx", "mdx", "md"],
};

const withMDX = createMDX({
  //Add plugins here
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
