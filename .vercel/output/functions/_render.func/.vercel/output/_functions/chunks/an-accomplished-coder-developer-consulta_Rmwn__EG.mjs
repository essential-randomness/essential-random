import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ms. Boba is an accomplished coder, developer, consultant, and all around cool\nperson. I would ask her for advice in a heartbeat, because she always brings a\nunique perspective to everything she’s involved with.</p>";

				const frontmatter = {};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/an-accomplished-coder-developer-consulta.md";
				const url = undefined;
				function rawContent() {
					return "\nMs. Boba is an accomplished coder, developer, consultant, and all around cool\nperson. I would ask her for advice in a heartbeat, because she always brings a\nunique perspective to everything she's involved with.\n";
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
