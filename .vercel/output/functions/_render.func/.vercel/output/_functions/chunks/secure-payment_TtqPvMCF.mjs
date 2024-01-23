import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Yes. I’m selling subscriptions through Stripe and PayPal links,\nwhich means your credit card information never leaves those sites.</p>";

				const frontmatter = {"title":"Is my payment info secure?","order":600};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/faqs/secure-payment.md";
				const url = undefined;
				function rawContent() {
					return "\nYes. I&apos;m selling subscriptions through Stripe and PayPal links,\nwhich means your credit card information never leaves those sites.\n";
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
