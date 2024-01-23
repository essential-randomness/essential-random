import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>My amazing friend <a href=\"https://scumsuck.com\">SKUMSUCK</a>\ngenerously created them for me.</p>";

				const frontmatter = {"title":"Who designed these beautiful icons?","order":1100};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/faqs/icons-design.md";
				const url = undefined;
				function rawContent() {
					return "\nMy amazing friend <a href=\"https://scumsuck.com\">SKUMSUCK</a>\ngenerously created them for me.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
