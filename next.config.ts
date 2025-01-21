import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  /* config options here */
  // pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  pageExtensions: ["tsx", "mdx", "md"],
};

const withMDX = createMDX({
  //Add plugins here
});

export default withMDX(nextConfig);
