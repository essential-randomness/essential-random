import { _ as __astro_tag_component__, F as Fragment, X as createVNode } from './astro_va4p0pd8.mjs';
import { $ as $$Image } from './pages/generic_eRRtI0eS.mjs';
import 'clsx';

const frontmatter = {
  "name": "The Fujoshi Guide to Web Development",
  "links": ["https://www.kickstarter.com/projects/essential-randomness/the-fujoshi-guide-to-web-development", "https://fujoweb.dev", "https://github.com/orgs/FujoWebDev/"],
  "description": "The product of a (successfully funded) Kickstarter, The Fujoshi Guide to Web Development follows the adventures of BobaBoard's\nmascot Boba-tan as she learns about modern web development concepts straight from the (very hot) embodiment of the relevant \nprogramming languages and tools.\n",
  "status": "Active development",
  "preview": "./the-fujoshi-guide.png",
  "tags": ["format: zine(s)", "category: education", "event: April 1st", "merch: in production"],
  "position": 6
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-vision",
    "text": "The vision"
  }, {
    "depth": 2,
    "slug": "the-premise-from-the-kickstarter",
    "text": "The Premise (from the Kickstarter)"
  }, {
    "depth": 2,
    "slug": "story-and-background",
    "text": "Story and Background"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    li: "li",
    nav: "nav",
    ol: "ol",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.nav, {
      class: "toc",
      children: createVNode(_components.ol, {
        class: "toc-level toc-level-1",
        children: [createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#the-vision",
            children: "The vision"
          })
        }), createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#the-premise-from-the-kickstarter",
            children: "The Premise (from the Kickstarter)"
          })
        }), createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#story-and-background",
            children: "Story and Background"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "the-vision",
      children: createVNode(_components.a, {
        href: "#the-vision",
        children: "The vision"
      })
    }), "\n", createVNode(_components.p, {
      children: "A series of books (zines) to teach web development concepts, specifically\ncatering to hobbyists and self-learners who are stuck between the simplistic,\nshallow tutorials for beginners, and the dense, jargon-filled documentation for\nprofessionals."
    }), "\n", createVNode(_components.p, {
      children: ["Rather than shying away from the complexity of modern web development, The\nFujoshi Guide to Web Development (informally known as ", createVNode(_components.em, {
        children: "FujoGuide"
      }), ") gently\nintroduces readers to concepts most beginners guides shy away from, trusting in\ntheir innate desire for mastery and growth, and giving them the tools to build\nmore ambitious and complex projects."]
    }), "\n", createVNode(_components.p, {
      children: ["\u201CVolume 0: Git & GitHub\u201D focuses on how to use version control for both personal\nprojects and to collaborate on open source software. It was ", createVNode(_components.a, {
        href: "https://www.kickstarter.com/projects/essential-randomness/the-fujoshi-guide-to-web-development",
        children: "successfully funded\non\nKickstarter"
      }), "\nand is currently in production."]
    }), "\n", createVNode(_components.h2, {
      id: "the-premise-from-the-kickstarter",
      children: createVNode(_components.a, {
        href: "#the-premise-from-the-kickstarter",
        children: "The Premise (from the Kickstarter)"
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["Boba-tan, BobaBoard mascot and fangirl extraordinaire, is very sad about the\nstate of the modern, corporate web. Unfortunately, while she keeps meaning to\n(re)learn how to make her own websites, she\u2019s too busy shipping fictional\ncharacters to find the time and motivation to study. Not to worry though,\nbecause she (smart) has finally found the perfect solution: imagining web\ndevelopment and other programming concepts as swoon-worthy ", createVNode("abbr", {
          title: "beautiful men",
          children: "ikemen"
        }), ", and alternating her study sessions with\nbouts of daydreaming about their ", createVNode("abbr", {
          title: "if you know, you\nknow",
          children: "yaoi"
        }), "-tastic interactions."]
      }), "\n", createVNode(_components.p, {
        children: "The Fujoshi Guide to Web Development follows the adventures of Boba-tan\u2019s own\n\u201Cprogramming world\u201D self-insert as she learns web development straight from\nthe source: the hot personified technologies who contribute to the marvel that\nis today\u2019s internet."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "story-and-background",
      children: createVNode(_components.a, {
        href: "#story-and-background",
        children: "Story and Background"
      })
    }), "\n", createVNode(_components.p, {
      children: ["The 4th in the series of BobaBoard\u2019s April Fools\u2019 Day projects, The Fujoshi\nGuide to Web Development went from a tentatively-proposed idea (", createVNode(_components.em, {
        children: "\u201CI keep\nthinking about this idea, but it\u2019s too overboard even for me\u201D"
      }), ") to a\nfully-fledged Kickstarter campaign in just about 2 months."]
    }), "\n", createVNode(_components.p, {
      children: "FujoGuide is the culmination of what I\u2019ve learned from nurturing beginner\nBobaBoard volunteers, and what I observed running the Fandom Coders community:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Confusion around version control is the biggest barrier for beginners seeking\nto contribute to open source projects they love."
      }), "\n", createVNode(_components.li, {
        children: "Currently available resources for web development are often outdated or\nsimplistic, and those tools and technologies that would make the lives of\nhobbyist programmers easier are hidden behind layers of jargon targeted at\nprofessionals."
      }), "\n", createVNode(_components.li, {
        children: "People\u2019s fear of teaching advanced concepts to beginners holds back the most\nambitious and motivated learners."
      }), "\n", createVNode(_components.li, {
        children: "While Git and GitHub can be scary and confusing to beginners, those who\npersevere find them to be incredibly empowering tools, and can quickly get up\nto speed with the basics if properly guided."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "While I lead the overall project and melded the technologies into a cohesive set\nof characters traits and relationship dynamics, the project was only possible thanks\nto the friends I made throughout my journey (as well as a few new allies) who came in\nto help with the writing, art, design, brainstorming, emotional support, and the incredible\namount of work that such a project requires."
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/projects/fujoguide.mdx";
const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/projects/fujoguide.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/essentialrandomness/projects/programming/essential-random/src/content/projects/fujoguide.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
