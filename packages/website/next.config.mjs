import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins:  [remarkGfm,[remarkToc, {tight: true, heading: 'Contents' }]],
        rehypePlugins: [rehypeSlug]
    },
});

export default withMDX(nextConfig)
