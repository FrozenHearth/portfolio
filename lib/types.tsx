export interface BlogPostType {
  slug: string;
  frontmatter: {
    title: string;
    metaTitle: string;
    metaDesc: string;
    summary: string;
    date: string;
    formattedDate: Date;
    tags: string[];
  };
}
