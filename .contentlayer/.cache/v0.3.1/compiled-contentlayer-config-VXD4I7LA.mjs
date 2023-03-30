// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: "posts/*.mdx",
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, "")
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
    date: {
      type: "date"
    },
    formattedDate: {
      type: "string"
    },
    tags: {
      type: "string[]"
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-VXD4I7LA.mjs.map
