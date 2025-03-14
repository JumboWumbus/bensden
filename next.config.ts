import type { NextConfig } from "next";
import createMDX from "@next/mdx";

import codeTitle from "remark-code-title";

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
    remarkPlugins: [
      ["remark-frontmatter", { strict: true, throwOnError: true }],
      ["remark-mdx-frontmatter", { strict: true, throwOnError: true }],
      ["remark-code-title", { strict: true, throwOnError: true }],
    ],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
