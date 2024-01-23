import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><strong>Ms. Boba is one of the few people I trust to navigate the ethics of tech in an era of exploitable social media.</strong> She has a tendency to go above and beyond for the sake of shitposts, seriously, somebody stop her.</p>";

				const frontmatter = {};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/one-of-the-few-people-i-trust-to-navigat.md";
				const url = undefined;
				function rawContent() {
					return "\n**Ms. Boba is one of the few people I trust to navigate the ethics of tech in an era of exploitable social media.** She has a tendency to go above and beyond for the sake of shitposts, seriously, somebody stop her.\n";
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
