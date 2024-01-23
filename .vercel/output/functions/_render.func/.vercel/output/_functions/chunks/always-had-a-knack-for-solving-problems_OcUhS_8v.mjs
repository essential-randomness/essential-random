import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ms. Boba has always had a knack for solving problems with creative ideas. When I\nmet her, her knowledge in code and unshakable passion were inspiring. She’s\ndedicated to her work and brings projects to life that benefit the “all” more\nthan the “self”.</p>";

				const frontmatter = {};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/always-had-a-knack-for-solving-problems.md";
				const url = undefined;
				function rawContent() {
					return "\nMs. Boba has always had a knack for solving problems with creative ideas. When I\nmet her, her knowledge in code and unshakable passion were inspiring. She's\ndedicated to her work and brings projects to life that benefit the \"all\" more\nthan the \"self\".\n";
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
