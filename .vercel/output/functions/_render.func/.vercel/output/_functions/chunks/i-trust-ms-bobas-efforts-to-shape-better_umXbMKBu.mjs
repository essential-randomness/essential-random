import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I trust Ms. Boba’s efforts to shape better spaces for fandom to succeed because\nshe makes thoughtful, deliberate decisions about user experience - not just\nbased on her own wants and needs, but based on the feedback of people with\nexperiences different than her own. <strong>She knows that you can’t please everyone,\nbut does trust that everyone has something valuable to say</strong>, and ultimately is\nlooking to build a fandom tools that can be adaptable to a variety of wants and\nneeds. She knows that slow and steady will win the race because it will give us\nstable tools.</p>";

				const frontmatter = {};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/i-trust-ms-bobas-efforts-to-shape-better.md";
				const url = undefined;
				function rawContent() {
					return "\nI trust Ms. Boba's efforts to shape better spaces for fandom to succeed because\nshe makes thoughtful, deliberate decisions about user experience - not just\nbased on her own wants and needs, but based on the feedback of people with\nexperiences different than her own. **She knows that you can't please everyone,\nbut does trust that everyone has something valuable to say**, and ultimately is\nlooking to build a fandom tools that can be adaptable to a variety of wants and\nneeds. She knows that slow and steady will win the race because it will give us\nstable tools.\n";
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
