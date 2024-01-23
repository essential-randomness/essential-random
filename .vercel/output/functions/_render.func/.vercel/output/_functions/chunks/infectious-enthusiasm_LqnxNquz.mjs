import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ms Boba’s enthusiasm is infectious and helps to keep teams and\nprojects running all the way to completion. <strong>I believe with her work ethic and\nskills she will continue to make great things for connecting on the internet!</strong></p>";

				const frontmatter = {};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/infectious-enthusiasm.md";
				const url = undefined;
				function rawContent() {
					return "\nMs Boba's enthusiasm is infectious and helps to keep teams and\nprojects running all the way to completion. **I believe with her work ethic and\nskills she will continue to make great things for connecting on the internet!**\n";
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
