import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ms. Boba is the only person I’ve seen approach building a social media site or a fan community with an actual grounded, realistic eye towards the future.</p>";

				const frontmatter = {};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/the-only-person-ive-seen-approach-buildi.md";
				const url = undefined;
				function rawContent() {
					return "\nMs. Boba is the only person I've seen approach building a social media site or a fan community with an actual grounded, realistic eye towards the future.\n";
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
