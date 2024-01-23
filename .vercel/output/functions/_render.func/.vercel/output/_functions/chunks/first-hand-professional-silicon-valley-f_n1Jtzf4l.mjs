import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><strong>No one else working on a nascent fandom project has both\nfirst-hand professional Silicon Valley FAANG tech expertise and\n“trash panda” fandom expertise.</strong> This makes Ms. Boba uniquely positioned\nto responsibly and competently wield the necessary Big Tech skills (such as\nnetworking + recruiting + estimating + training, and other “starting/running a\ntech project” needs) for a fandom tech-based project.</p>";

				const frontmatter = {"highlight":true,"order":2};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/first-hand-professional-silicon-valley-f.md";
				const url = undefined;
				function rawContent() {
					return "\n**No one else working on a nascent fandom project has both\nfirst-hand professional Silicon Valley FAANG tech expertise and\n\"trash panda\" fandom expertise.** This makes Ms. Boba uniquely positioned\nto responsibly and competently wield the necessary Big Tech skills (such as\nnetworking + recruiting + estimating + training, and other \"starting/running a\ntech project\" needs) for a fandom tech-based project.\n";
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
