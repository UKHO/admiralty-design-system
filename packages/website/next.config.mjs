import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import createMDX from '@next/mdx';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config, options) => {
  //   config.resolve.alias["@ukho-internal/component-api"] = [""];
  //
  //   return config;
  // },
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [remarkGfm, remarkToc],
        rehypePlugins: [rehypeSlug, rehypeHighlight,
            [
                rehypeAutolinkHeadings,
                {
                    behaviour: 'wrap',
                    properties: {
                        ariaHidden: true,
                        tabIndex: -1,
                        className: 'hash-link'
                    }
                }
            ]],
    },
});

export default withMDX(nextConfig)
