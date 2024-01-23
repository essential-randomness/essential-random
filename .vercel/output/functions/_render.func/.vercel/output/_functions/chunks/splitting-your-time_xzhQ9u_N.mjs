import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>As my <a href=\"/projects\">projects page</a> hopefully conveys, I work on an eclectic\nvariety of projects mainly focused in these areas:</p>\n<ul>\n<li>“A more fun, more social web” for fandom and beyond</li>\n<li>Internet freedom and open source development</li>\n<li>Accessible technical education for underrepresented communities</li>\n</ul>\n<p>These days (late 2023), I’m proritizing the following projects:</p>\n<ol>\n<li><strong>Shipping FujoGuide Volume 0:</strong> not only <a href=\"https://www.kickstarter.com/projects/essential-randomness/the-fujoshi-guide-to-web-development\">a succesful\nKickstarter</a>\ndeserves a successful delivery, but making Git+GitHub accessible to a new\npublic will redefine who can be building the web of tomorrow</li>\n<li><strong>Secret WIP project:</strong> Not ready to talk about it yet, but it fits nicely\nwith everything else :)</li>\n<li><strong>My Own Worksona:</strong> My professional online presence, including this website.\nIn 2024, I must start bringing in enough money so I can continue empowering\nmyself and others to build towards a better future for the web</li>\n<li><strong>BobaBoard Community Handoff:</strong> <a href=\"https://www.bobaboard.com\">BobaBoard</a> (the\nmain project I’ve worked on since 2020) is ready to leave its cozy nest and\nbe embraced by the broader web. To that end, I’m helping transition the\nproject from being led by me to being led by its own community.</li>\n</ol>\n<p>Your support buys you early access to news about these projects (and beyond), as well as my\neternal gratitude. Refer to the tier cards for more info!</p>";

				const frontmatter = {"title":"How are you splitting your time these days? What am I buying with my support?","order":100};
				const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/faqs/splitting-your-time.md";
				const url = undefined;
				function rawContent() {
					return "\nAs my [projects page](/projects) hopefully conveys, I work on an eclectic\nvariety of projects mainly focused in these areas:\n\n- \"A more fun, more social web\" for fandom and beyond\n- Internet freedom and open source development\n- Accessible technical education for underrepresented communities\n\nThese days (late 2023), I'm proritizing the following projects:\n\n1. **Shipping FujoGuide Volume 0:** not only [a succesful\n   Kickstarter](https://www.kickstarter.com/projects/essential-randomness/the-fujoshi-guide-to-web-development)\n   deserves a successful delivery, but making Git+GitHub accessible to a new\n   public will redefine who can be building the web of tomorrow\n2. **Secret WIP project:** Not ready to talk about it yet, but it fits nicely\n   with everything else :)\n3. **My Own Worksona:** My professional online presence, including this website.\n   In 2024, I must start bringing in enough money so I can continue empowering\n   myself and others to build towards a better future for the web\n4. **BobaBoard Community Handoff:** [BobaBoard](https://www.bobaboard.com) (the\n   main project I've worked on since 2020) is ready to leave its cozy nest and\n   be embraced by the broader web. To that end, I'm helping transition the\n   project from being led by me to being led by its own community.\n\nYour support buys you early access to news about these projects (and beyond), as well as my\neternal gratitude. Refer to the tier cards for more info!\n";
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
