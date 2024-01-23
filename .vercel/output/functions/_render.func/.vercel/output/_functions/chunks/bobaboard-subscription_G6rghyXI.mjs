import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>\n    While BobaBoard is the main project I work on, I work on a lot more\n    than BobaBoard. It's important that I continue doing so for the\n    long-term success of our goals.\n</p>\n<p>\n    Even more importantly, there are many reasons why tying my ability to\n    survive to the success of the social software I build is a bad, bad\n    idea. While this might end up being its own blog post at some point,\n    for now I ask you trust me: if you want to see more of what I do,\n    please donate to me directly.\n</p>";

				const frontmatter = {"title":"Can&apos;t I just support you by buying a premium BobaBoard account?","order":1000};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/faqs/bobaboard-subscription.md";
				const url = undefined;
				function rawContent() {
					return "\n<p>\n    While BobaBoard is the main project I work on, I work on a lot more\n    than BobaBoard. It&apos;s important that I continue doing so for the\n    long-term success of our goals.\n</p>\n<p>\n    Even more importantly, there are many reasons why tying my ability to\n    survive to the success of the social software I build is a bad, bad\n    idea. While this might end up being its own blog post at some point,\n    for now I ask you trust me: if you want to see more of what I do,\n    please donate to me directly.\n</p>\n";
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
