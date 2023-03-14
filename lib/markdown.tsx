import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

export default async function markdownToHtml(markdown) {
  const result = await remark()
    // https://github.com/sergioramos/remark-prism/issues/265
    .use(html, { sanitize: false })
    .use(prism, {
      transformInlineCode: true,
      plugins: [
        'diff-highlight',
        'inline-color',
        'keep-markup',
        'line-numbers',
      ],
    })
    .process(markdown);
  return result.toString();
}
