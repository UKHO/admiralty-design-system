import createMDX from '@next/mdx';
import path from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  turbopack: {
    root: path.resolve(__dirname),
  },
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins:  ["remark-gfm" ,["remark-toc", {tight: true, heading: 'Contents' }]],
        rehypePlugins: ["rehype-slug"]
    },
});

export default withMDX(nextConfig)
