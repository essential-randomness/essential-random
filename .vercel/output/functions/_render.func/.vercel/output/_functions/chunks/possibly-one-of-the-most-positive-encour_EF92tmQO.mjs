import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><strong>Ms. Boba is possibly one of the most positive, encouraging, and supportive people you’ll ever meet.</strong> If you think you can’t do something, don’t worry, because she’ll never think that. She spends a <em>lot</em> of her time empowering people to learn coding, doing streaming lessons, and talking you through projects, because she thinks everyone is capable! Ms. Boba has helped me think more about what I want from the internet and what I can do to make it happen!</p>";

				const frontmatter = {};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/testimonials/possibly-one-of-the-most-positive-encour.md";
				const url = undefined;
				function rawContent() {
					return "\n**Ms. Boba is possibly one of the most positive, encouraging, and supportive people you'll ever meet.** If you think you can't do something, don't worry, because she'll never think that. She spends a _lot_ of her time empowering people to learn coding, doing streaming lessons, and talking you through projects, because she thinks everyone is capable! Ms. Boba has helped me think more about what I want from the internet and what I can do to make it happen!\n";
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
