import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ms. Boba is always really insightful and has a belief that any questions asked\nare worth at least a solid answer and is always willing to help or, if she\ndoesn’t know how, provides avenues to search for an answer. She’s definitely\nmade a commitment to fostering a community of people helping to build each other\nand their projects up!</p>";

				const frontmatter = {};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/always-really-insightful-and-has-a-belie.md";
				const url = undefined;
				function rawContent() {
					return "\nMs. Boba is always really insightful and has a belief that any questions asked\nare worth at least a solid answer and is always willing to help or, if she\ndoesn't know how, provides avenues to search for an answer. She's definitely\nmade a commitment to fostering a community of people helping to build each other\nand their projects up!\n";
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
