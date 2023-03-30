import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrettyCode from 'rehype-pretty-code';
import { formatDate } from './lib/formatDate';
import { rehypePrettyCodeOptions } from './lib/rehypePrettyCode';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: 'posts/*.mdx',
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
    publishedAtFormatted: {
      type: 'string',
      resolve: (doc) => {
        return formatDate(doc.publishedAt);
      },
    },
  },
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    metaTitle: {
      type: 'string',
    },
    metaDesc: {
      type: 'string',
    },
    summary: {
      type: 'string',
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer', 'nofollow'],
        },
      ],
    ],
  },
});
