import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ms. Boba is the kind of person who can not only come up with a wild, ambitious, and delightfully ridiculous idea, but also has the knowledge, expertise, and tenacity to actually make that idea a reality.</p>";

				const frontmatter = {"highlight":true};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/the-kind-of-person-who-can-not-only-come.md";
				const url = undefined;
				function rawContent() {
					return "\nMs. Boba is the kind of person who can not only come up with a wild, ambitious, and delightfully ridiculous idea, but also has the knowledge, expertise, and tenacity to actually make that idea a reality.\n";
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
