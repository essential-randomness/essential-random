import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ms. Boba is uniquely creative and continues to guide whole communities with thought and tutorship. The work she is doing is not just appreciated, but necessary. Building infrastructure is no simple feat and Ms Boba continues to do so in the open. Supporting her means supporting an open, collaborative future for Fandom.</p>";

				const frontmatter = {};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/uniquely-creative-and-continues-to-guide.md";
				const url = undefined;
				function rawContent() {
					return "Ms. Boba is uniquely creative and continues to guide whole communities with thought and tutorship. The work she is doing is not just appreciated, but necessary. Building infrastructure is no simple feat and Ms Boba continues to do so in the open. Supporting her means supporting an open, collaborative future for Fandom.";
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
