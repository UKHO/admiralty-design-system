import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins:  ["remark-gfm" ,["remark-toc", {tight: true, heading: 'Contents' }]],
        rehypePlugins: ["rehype-slug"]
    },
});

export default withMDX(nextConfig)
