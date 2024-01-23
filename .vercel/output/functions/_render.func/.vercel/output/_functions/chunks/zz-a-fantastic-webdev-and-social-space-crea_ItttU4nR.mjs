import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ms. Boba is a fantastic webdev and social space creator. She is incredibly\ntransparent about her process, and open to feedback, user suggestions and\nexperiences.</p>";

				const frontmatter = {};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/zz-a-fantastic-webdev-and-social-space-crea.md";
				const url = undefined;
				function rawContent() {
					return "\nMs. Boba is a fantastic webdev and social space creator. She is incredibly\ntransparent about her process, and open to feedback, user suggestions and\nexperiences.\n";
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
