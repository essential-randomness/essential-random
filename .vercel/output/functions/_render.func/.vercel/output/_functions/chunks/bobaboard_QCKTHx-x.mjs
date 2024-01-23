import { _ as __astro_tag_component__, F as Fragment, X as createVNode } from './astro_va4p0pd8.mjs';
import { $ as $$Image } from './pages/generic_eRRtI0eS.mjs';
import 'clsx';

const frontmatter = {
  "name": "BobaBoard",
  "links": ["https://github.com/bobaboard", {
    "url": "https://www.bobaboard.com/",
    "name": "Home"
  }, "https://twitter.com/bobaboard", "https://bobaboard.tumblr.com", {
    "url": "https://store.bobaboard.com",
    "type": "store",
    "name": "store"
  }],
  "description": 'Privacy-oriented community software for fandom and beyond. As the homepage reads, \n"Part forum. Part social network. (Mostly) anonymous."\n',
  "status": "Pre-beta phase!",
  "preview": "./bobaboard.png",
  "tags": ["code: open source", "recruitment: it's complicated", "merch: on sale", "category: software"],
  "position": 0
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-vision",
    "text": "The vision"
  }, {
    "depth": 2,
    "slug": "story-and-background",
    "text": "Story and background"
  }, {
    "depth": 2,
    "slug": "feature-highlights",
    "text": "Feature highlights"
  }, {
    "depth": 2,
    "slug": "inspirations--acknowledgements",
    "text": "Inspirations & acknowledgements"
  }, {
    "depth": 2,
    "slug": "fun-facts",
    "text": "Fun facts"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    li: "li",
    nav: "nav",
    ol: "ol",
    p: "p",
    ul: "ul",
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
            href: "#story-and-background",
            children: "Story and background"
          })
        }), createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#feature-highlights",
            children: "Feature highlights"
          })
        }), createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#inspirations--acknowledgements",
            children: "Inspirations & acknowledgements"
          })
        }), createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#fun-facts",
            children: "Fun facts"
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
      children: "BobaBoard is a modern, open source community-building software built with an eye to the needs of transformative fandom. It prioritizes\nprivacy and fluidity of identity in a framework that includes high levels of customization and fine-grained permission settings, encouraging\ncreative expression across different formats and styles of communication."
    }), "\n", createVNode(_components.p, {
      children: "Unlike other decentralized software, BobaBoard is built to host multiple separate communities (\u201CRealms\u201D) on a single instance (\u201CGalaxy\u201D). This allows\na single sysadmin to serve a wider set of users, separating the skills needed to run the servers from the skills needed to effectively run social spaces.\nGrowing the first Galaxy is also a big part of the project: as of November 2022, \u201Cboba.social\u201D includes two Realms, one active, and one under construction. At\npresent, we\u2019re also defining our strategy (and requirements) to recruit more community managers and further expand the space."
    }), "\n", createVNode(_components.p, {
      children: "BobaBoard is highly-experimental software. As we build a system that\u2019s flexible enough to accomodate a variety of use cases and extensions, we\u2019re actively\nseeking to rediscuss common assumptions on the features and user experience that community software on the modern web must provide."
    }), "\n", createVNode(_components.h2, {
      id: "story-and-background",
      children: createVNode(_components.a, {
        href: "#story-and-background",
        children: "Story and background"
      })
    }), "\n", createVNode(_components.p, {
      children: ["The last decade of the internet was overwhelmingly focused on social networks centered on individual experiences, leaving another important category\nwoefully behind: community platforms. While some modern forum-like software exists, they\u2019re usually targeted towards business applications and text-heavy styles of\ncommunication. As social platforms grew to incorporate complex means of personal expression\u2014like photosets, videos, stories, twitter threads, re-sharing, and more\u2014\ncommunity platforms on the open web haven\u2019t seen the same level of modernization. Indeed,", createVNode(_components.a, {
        href: "https://discord.com/",
        children: "the largest player in the \u201Ccommunity platform\u201D space"
      }), "\nis not only not suited to the asynchronous style of communication typical of older forums, but it\u2019s not even accessible outside of its own app."]
    }), "\n", createVNode(_components.p, {
      children: ["The initial idea behind BobaBoard was born while decrying the current status of modern social networks, and the failures of independent efforts to meaningfully\ndisrupt the space. While many projects sought to recreate the experience of platforms like Twitter or Tumblr \u201Cbut different\u201D, the idea behind BobaBoard\nwas to challenge the assumption that platforms needed to rely on a large set of users in order to thrive. ", createVNode(_components.a, {
        href: "https://v1.bobaboard.com/",
        children: "The first phase of BobaBoard"
      }), " meant\nto answer the question: \u201Cwhat would a platform that only 50 people ", createVNode(_components.em, {
        children: "love"
      }), " to be on look like?\u201C. With the initial ideas validated, ", createVNode(_components.a, {
        href: "https://bobaboard.com/",
        children: "the second and current\nphase"
      }), " expands the target beyond the initial audience, seeking to answer the same question in a manner that\u2019s repeatable across\ndifferent (but ethically-aligned) ways to build community online."]
    }), "\n", createVNode(_components.p, {
      children: ["While the not-so-secret overarching goal of BobaBoard is to build a community software that can be customized to accomodate wildly different social spaces, its\ndevelopment path argues that it\u2019s impossible for developers to imagine such software on a whiteboard. The experience of building communities and software alongside\neach other is integral to carving a path towards \u201Cthe ", createVNode(_components.a, {
        href: "https://tvtropes.org/pmwiki/pmwiki.php/Main/YaoiFangirl",
        children: "BL fangirl"
      }), "-led WordPress of online communities\u201D."]
    }), "\n", createVNode(_components.h2, {
      id: "feature-highlights",
      children: createVNode(_components.a, {
        href: "#feature-highlights",
        children: "Feature highlights"
      })
    }), "\n", createVNode(_components.p, {
      children: "TODO"
    }), "\n", createVNode(_components.h2, {
      id: "inspirations--acknowledgements",
      children: createVNode(_components.a, {
        href: "#inspirations--acknowledgements",
        children: "Inspirations & acknowledgements"
      })
    }), "\n", createVNode(_components.p, {
      children: "TODO"
    }), "\n", createVNode(_components.h2, {
      id: "fun-facts",
      children: createVNode(_components.a, {
        href: "#fun-facts",
        children: "Fun facts"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "The origin of the name \u201CBobaBoard\u201D is two-folded: on one side, the software is meant to encourage the creation of safe \u201Csocial bubbles\u201D in a\nhighly chaotic internet; on the other side, \u201CBobaBoard Software\u201D shortens to BBS as a callback to old Bulletin Board Systems (a.k.a forums)."
      }), "\n"]
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
const url = "src/content/projects/bobaboard.mdx";
const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/projects/bobaboard.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/essentialrandomness/projects/programming/essential-random/src/content/projects/bobaboard.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
