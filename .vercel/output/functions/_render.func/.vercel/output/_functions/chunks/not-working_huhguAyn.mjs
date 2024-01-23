import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Thanks for letting me know. This is a very experimental page, and\nthings might break unexpectedly. Please do let me know what went wrong\nby contacting me at\n<a href=\"mailto:essential.randomn3ss@gmail.com\"></a><a href=\"mailto:essential.randomn3ss@gmail.com\">essential.randomn3ss@gmail.com</a>.</p>\n<p>In the meantime you can also donate through\n<a href=\"https://www.patreon.com/essentialrandomness\">Patreon</a> or\n<a href=\"https://ko-fi.com/essentialrandomness\">Ko-fi</a>.</p>";

				const frontmatter = {"title":"Help! Something isn&apos;t working!","order":850,"success":true};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/faqs/not-working.md";
				const url = undefined;
				function rawContent() {
					return "\nThanks for letting me know. This is a very experimental page, and\nthings might break unexpectedly. Please do let me know what went wrong\nby contacting me at\n<a href=\"mailto:essential.randomn3ss@gmail.com\">essential.randomn3ss@gmail.com</a>.\n\nIn the meantime you can also donate through\n<a href=\"https://www.patreon.com/essentialrandomness\">Patreon</a> or\n<a href=\"https://ko-fi.com/essentialrandomness\">Ko-fi</a>.\n";
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
