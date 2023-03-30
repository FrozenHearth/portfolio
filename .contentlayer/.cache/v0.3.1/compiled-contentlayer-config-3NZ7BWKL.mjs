// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";

// lib/formatDate.ts
import { format, isThisYear } from "date-fns";
var formatDate = (date) => {
  const currentDate = new Date(date);
  return isThisYear(currentDate) ? format(currentDate, "MMM d") : format(currentDate, "MMM d, y");
};

// lib/rehypePrettyCode.ts
var rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  onVisitHighlightedLine(node) {
    node.properties.className.push("line--highlighted");
  }
};

// contentlayer.config.ts
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: "posts/*.mdx",
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, "")
    },
    publishedAtFormatted: {
      type: "string",
      resolve: (doc) => {
        return formatDate(doc.publishedAt);
      }
    }
  },
  fields: {
    title: {
      type: "string",
      required: true
    },
    metaTitle: {
      type: "string"
    },
    metaDesc: {
      type: "string"
    },
    summary: {
      type: "string"
    },
    publishedAt: {
      type: "string",
      required: true
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer", "nofollow"]
        }
      ]
    ]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-3NZ7BWKL.mjs.map
