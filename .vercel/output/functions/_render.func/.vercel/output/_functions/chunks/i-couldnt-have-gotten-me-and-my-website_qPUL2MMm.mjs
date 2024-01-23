import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I couldn’t have gotten me and my website from crappy wix site with absolute 0 code knowledge, to a selfcoded git and vercel integration without Ms. Boba!</p>";

				const frontmatter = {"hidden":true};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/i-couldnt-have-gotten-me-and-my-website.md";
				const url = undefined;
				function rawContent() {
					return "\nI couldn't have gotten me and my website from crappy wix site with absolute 0 code knowledge, to a selfcoded git and vercel integration without Ms. Boba!\n";
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
