import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>\n    When I say anything, I mean, well, <em>mostly</em> anything. Crying\n    over the present state of fandom? Absolutely! Reading me your sexy\n    fanfic? Totally fine. Venting about your overbearing boss? Been there,\n    done that!\n</p>\n<p>\n    As long as the subject is something two friends in fandom would\n    \"reasonably\" discuss, then it's fair game! If a topic\n    falls outside my own boundaries, I'll let you know with no\n    judgement.\n</p>";

				const frontmatter = {"title":"I&apos;m a proud &quot;subsidized massage&quot; supporter. Can we really discuss <em>anything</em> on our call?","order":900,"success":true};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/faqs/call-topic.md";
				const url = undefined;
				function rawContent() {
					return "\n<p>\n    When I say anything, I mean, well, <em>mostly</em> anything. Crying\n    over the present state of fandom? Absolutely! Reading me your sexy\n    fanfic? Totally fine. Venting about your overbearing boss? Been there,\n    done that!\n</p>\n<p>\n    As long as the subject is something two friends in fandom would\n    &quot;reasonably&quot; discuss, then it&apos;s fair game! If a topic\n    falls outside my own boundaries, I&apos;ll let you know with no\n    judgement.\n</p>\n";
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
