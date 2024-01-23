import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>\n    You can keep that, and be automatically enrolled in the \"almond\n    butter toast\" support tier as a thank you for donating before it\n    was cool.\n</p>\n<p>\n    If you wish to up your amount, you can cancel that subscription and\n    create a new one. As long as it's using the same email, I'll\n    make a note to leave you at least as \"almond butter toast\",\n    regardless of amount.\n</p>\n<p>\n    In case of any issue, contact me at any time at\n    <a href=\"mailto:essential.randomn3ss@gmail.com\">essential.randomn3ss@gmail.com</a>.\n</p>";

				const frontmatter = {"title":"What if I&apos;m currently on the old $5/month plan?","order":800};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/faqs/old-plan.md";
				const url = undefined;
				function rawContent() {
					return "\n<p>\n    You can keep that, and be automatically enrolled in the &quot;almond\n    butter toast&quot; support tier as a thank you for donating before it\n    was cool.\n</p>\n<p>\n    If you wish to up your amount, you can cancel that subscription and\n    create a new one. As long as it&apos;s using the same email, I&apos;ll\n    make a note to leave you at least as &quot;almond butter toast&quot;,\n    regardless of amount.\n</p>\n<p>\n    In case of any issue, contact me at any time at\n    <a href=\"mailto:essential.randomn3ss@gmail.com\">essential.randomn3ss@gmail.com</a>.\n</p>\n";
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
