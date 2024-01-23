import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>You can log in to your PayPal account to manage all your\nsubscriptions. For Stripe, <a href=\"https://billing.stripe.com/p/login/7sI9E470ibQt0A8dQQ\">click here</a> for the customer portal.</p>\n<p>In case of any issue, contact me at any time at\n<a href=\"mailto:essential.randomn3ss@gmail.com\"></a><a href=\"mailto:essential.randomn3ss@gmail.com\">essential.randomn3ss@gmail.com</a>.</p>";

				const frontmatter = {"title":"How do I cancel?","order":700,"success":true};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/faqs/cancelling.md";
				const url = undefined;
				function rawContent() {
					return "\nYou can log in to your PayPal account to manage all your\nsubscriptions. For Stripe, [click here](https://billing.stripe.com/p/login/7sI9E470ibQt0A8dQQ) for the customer portal.\n\nIn case of any issue, contact me at any time at\n<a href=\"mailto:essential.randomn3ss@gmail.com\">essential.randomn3ss@gmail.com</a>.\n";
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
