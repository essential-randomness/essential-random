import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>As a Fandom Old and a software engineer, she has a unique set of skills to\ncreate an oasis in the ever-increasing sea of hostile advertising-driven fandom\nspaces. She’s more than prepared for the herculean task of building a\ncommunity-based fandom space for users to make their own little haven.</p>";

				const frontmatter = {"hidden":true};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/fandom-old-and-software-engineer.md";
				const url = undefined;
				function rawContent() {
					return "\nAs a Fandom Old and a software engineer, she has a unique set of skills to\ncreate an oasis in the ever-increasing sea of hostile advertising-driven fandom\nspaces. She's more than prepared for the herculean task of building a\ncommunity-based fandom space for users to make their own little haven.\n";
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
