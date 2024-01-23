import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><strong>Ms. Boba is a deep thinker who truly cares about online community building and\nwhat it means for society.</strong> She is far ahead of anyone else in this space in\nterms of putting out real-world implementations that can serve many user while\nembodying her ideals.</p>";

				const frontmatter = {};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/a-good-friend-and-a-deep-thinker-who-tru.md";
				const url = undefined;
				function rawContent() {
					return "\n**Ms. Boba is a deep thinker who truly cares about online community building and\nwhat it means for society.** She is far ahead of anyone else in this space in\nterms of putting out real-world implementations that can serve many user while\nembodying her ideals.\n";
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
