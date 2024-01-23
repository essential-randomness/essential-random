import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><strong>Ms. Boba is ACTUALLY working her ass off to build a community and helping break\ndown the obstacles that stop people from becoming involved or succeeding</strong>, she’s\nnot just someone excited about their shiny new toy or trying to sell a product.\nShe’s clearly in it for the long haul, and it gives me a lot of hope that\na lot of good can come out of BobaBoard and her other projects.</p>";

				const frontmatter = {"highlight":true,"order":4};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/building-bobaboard-effort.md";
				const url = undefined;
				function rawContent() {
					return "\n**Ms. Boba is ACTUALLY working her ass off to build a community and helping break\ndown the obstacles that stop people from becoming involved or succeeding**, she's\nnot just someone excited about their shiny new toy or trying to sell a product.\nShe's clearly in it for the long haul, and it gives me a lot of hope that\na lot of good can come out of BobaBoard and her other projects.\n";
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
