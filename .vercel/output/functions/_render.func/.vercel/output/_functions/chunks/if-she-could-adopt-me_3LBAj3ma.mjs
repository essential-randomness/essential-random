import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><strong>Ms. Boba has great ideas and knows how to put them in motion.</strong> She’s also one of the nicest people I’ve ever worked with. If she could adopt me, I’d be signing the paperwork already.</p>";

				const frontmatter = {};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/if-she-could-adopt-me.md";
				const url = undefined;
				function rawContent() {
					return "\n**Ms. Boba has great ideas and knows how to put them in motion.** She's also one of the nicest people I've ever worked with. If she could adopt me, I'd be signing the paperwork already.\n";
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
