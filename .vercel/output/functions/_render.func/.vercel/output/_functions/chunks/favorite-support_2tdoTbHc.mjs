import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>If you love (moderate) adventure, joining my attempt at <a href=\"#donate\">a self-hosted support\ntool</a> is very appreciated. Alternatively,\n<a href=\"https://www.patreon.com/essentialrandomness\">Patreon</a> is a very popular option.</p>";

				const frontmatter = {"title":"Which support mode do you prefer?","order":500};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/faqs/favorite-support.md";
				const url = undefined;
				function rawContent() {
					return "\nIf you love (moderate) adventure, joining my attempt at [a self-hosted support\ntool](#donate) is very appreciated. Alternatively,\n[Patreon](https://www.patreon.com/essentialrandomness) is a very popular option.\n";
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
