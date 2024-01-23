import { _ as __astro_tag_component__, F as Fragment, X as createVNode } from './astro_va4p0pd8.mjs';
import { $ as $$Image } from './pages/generic_eRRtI0eS.mjs';
import 'clsx';

const frontmatter = {
  "title": "~~test~~ A quick primer on this blog (engine)",
  "created_at": "2022-07-16T02:07:09.000Z",
  "tags": ["+mood: write high edit sober", "+type: design doc", '"yes, why, I did indeed write (the first draft of) this while high, and what a better way to set the tone"', "jokes aside, the #1 killer of fun is taking yourself too seriously or professionally", "once you start your own blog with a post you've written high, you have set the floor you're authorized to stoop down to", "thus ensuring people will know better than to take you so seriously that you'll be too self conscious to write a post while high"],
  "unlisted": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-why",
    "text": "The why"
  }, {
    "depth": 2,
    "slug": "the-goals",
    "text": "The goals"
  }, {
    "depth": 2,
    "slug": "the-tech-stack-in-place",
    "text": "The tech stack in place"
  }, {
    "depth": 3,
    "slug": "mdx",
    "text": "MDX"
  }, {
    "depth": 4,
    "slug": "unifiedjs",
    "text": "UnifiedJS"
  }, {
    "depth": 3,
    "slug": "contentlayer",
    "text": "ContentLayer"
  }, {
    "depth": 3,
    "slug": "nextjs-most-likely-axed-for-astro-possibly-remix",
    "text": "NextJS (most likely axed for Astro, possibly Remix)"
  }, {
    "depth": 4,
    "slug": "straight-up-vanilla-css",
    "text": "Straight up vanilla CSS"
  }, {
    "depth": 3,
    "slug": "payments-that-i-own",
    "text": "Payments that I own"
  }, {
    "depth": 2,
    "slug": "the-tech-stack-to-come",
    "text": "The tech stack to come"
  }, {
    "depth": 3,
    "slug": "todo-activitypub--rss--other-microformats",
    "text": "TODO: ActivityPub & RSS & other microformats"
  }, {
    "depth": 3,
    "slug": "todo-nixos",
    "text": "TODO: NixOS"
  }, {
    "depth": 3,
    "slug": "the-final-frontier-netlify-cms",
    "text": "The final frontier: Netlify CMS"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    del: "del",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    input: "input",
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
            href: "#the-why",
            children: "The why"
          })
        }), createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#the-goals",
            children: "The goals"
          })
        }), createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: [createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#the-tech-stack-in-place",
            children: "The tech stack in place"
          }), createVNode(_components.ol, {
            class: "toc-level toc-level-2",
            children: [createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: [createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#mdx",
                children: "MDX"
              }), createVNode(_components.ol, {
                class: "toc-level toc-level-3",
                children: createVNode(_components.li, {
                  class: "toc-item toc-item-h4",
                  children: createVNode(_components.a, {
                    class: "toc-link toc-link-h4",
                    href: "#unifiedjs",
                    children: "UnifiedJS"
                  })
                })
              })]
            }), createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#contentlayer",
                children: "ContentLayer"
              })
            }), createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: [createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#nextjs-most-likely-axed-for-astro-possibly-remix",
                children: ["NextJS (most likely axed for Astro, ", createVNode(_components.em, {
                  children: "possibly"
                }), " Remix)"]
              }), createVNode(_components.ol, {
                class: "toc-level toc-level-3",
                children: createVNode(_components.li, {
                  class: "toc-item toc-item-h4",
                  children: createVNode(_components.a, {
                    class: "toc-link toc-link-h4",
                    href: "#straight-up-vanilla-css",
                    children: "Straight up vanilla CSS"
                  })
                })
              })]
            }), createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#payments-that-i-own",
                children: "Payments that I own"
              })
            })]
          })]
        }), createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: [createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#the-tech-stack-to-come",
            children: "The tech stack to come"
          }), createVNode(_components.ol, {
            class: "toc-level toc-level-2",
            children: [createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#todo-activitypub--rss--other-microformats",
                children: "TODO: ActivityPub & RSS & other microformats"
              })
            }), createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#todo-nixos",
                children: "TODO: NixOS"
              })
            }), createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#the-final-frontier-netlify-cms",
                children: "The final frontier: Netlify CMS"
              })
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s talk about this blog."
    }), "\n", createVNode(_components.p, {
      children: ["Something clicked recently, when Mastodon\u2019s ", createVNode(_components.code, {
        children: "rel=me"
      }), " feature forced me to conceptualize this as my \u201Cexperimental\u201D blog, thus\nleading by the shocking\u2014", createVNode(_components.em, {
        children: "shocking"
      }), ", I say!\u2014realization that it is indeed such. Indeed (as you might notice by half-baked features,\nlinks leading to nowhere, and mostly unfilled project entries), I\u2019m leaving trails for myself of knicks and knacks to\nexplore with time."]
    }), "\n", createVNode(_components.h2, {
      id: "the-why",
      children: createVNode(_components.a, {
        href: "#the-why",
        children: "The why"
      })
    }), "\n", createVNode(_components.p, {
      children: "In short, the reason I\u2019m building this blog is that there I believe there is a perfect storm brewing.\nFor the first time in history, technology is coming out to make the Dream started by the IndieWeb finally not\njust possible, but accessible and customizable."
    }), "\n", createVNode(_components.p, {
      children: ["In short: for a ", createVNode(_components.em, {
        children: "there is a great, new type of modern website engine"
      }), "\njust waiting to to be born, ", createVNode(_components.em, {
        children: "just out of my reach"
      }), ". In a way, this blog is my attempt to carve out \u201Cthe solution\u201D out of\na mishmash of the pieces that other people have seen and worked on. Part of my 2022 is going to be exploring how to make what you see here all fit together, and hopefully sharing\nsome of the building block I\u2019ll inevitably build with all of you."]
    }), "\n", createVNode(_components.h2, {
      id: "the-goals",
      children: createVNode(_components.a, {
        href: "#the-goals",
        children: "The goals"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Act as a \u201Ccommand center\u201D for your existence on the web: there is a lot of interesting microdata that you\nmight want to propagate about you on the web, and it\u2019s kinda telling that we let link.tree be so popular."
      }), "\n", createVNode(_components.li, {
        children: ["Be born ", createVNode(_components.em, {
          children: "from"
        }), " your content, not be the source of it: a blog should be a layer on top of things you can\nport around the web.\u2019"]
      }), "\n", createVNode(_components.li, {
        children: "Propagate metadata to other website, and have everything be scrapable and targetable"
      }), "\n", createVNode(_components.li, {
        children: "Be easily modifiable at the level someone wants it to be modifiable at. It should never be harder than\nit can be. Everything should be customizable in a way that\u2019s shareable."
      }), "\n", createVNode(_components.li, {
        children: "Be easily deployable, with no compromises."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Somewhere there is also this diagram here, and the fact that I have bought the ", createVNode(_components.code, {
        children: "shrines.club"
      }), " domain."]
    }), "\n", createVNode(_components.h2, {
      id: "the-tech-stack-in-place",
      children: createVNode(_components.a, {
        href: "#the-tech-stack-in-place",
        children: "The tech stack in place"
      })
    }), "\n", createVNode(_components.h3, {
      id: "mdx",
      children: createVNode(_components.a, {
        href: "#mdx",
        children: "MDX"
      })
    }), "\n", createVNode(_components.p, {
      children: "[meme: shut up about mdx shut up about mdx]"
    }), "\n", createVNode(_components.p, {
      children: ["If you haven\u2019t heard me rant about how good MDX is, consider yourself lucky. Here\u2019s the downlow: MDX\nis ", createVNode(_components.em, {
        children: "really, really"
      }), " good."]
    }), "\n", createVNode(_components.h4, {
      id: "unifiedjs",
      children: createVNode(_components.a, {
        href: "#unifiedjs",
        children: "UnifiedJS"
      })
    }), "\n", createVNode(_components.p, {
      children: "My love for MDX is inseperable from my love for the unifiedjs ecosystem (and their organizational structure)."
    }), "\n", createVNode(_components.p, {
      children: "UnifiedJS allows you to apply plugins to stuff. For example, here\u2019s some plugins I could add (and whether I added)"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Github-flavored markdwon, allowing me to ", createVNode(_components.del, {
          children: "strike through"
        }), " things, and"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Automatically adiding header links to my things"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Some TOC thing, though I haven\u2019t found the perfecrt one yet. Will have to write a plugin."]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          disabled: true
        }), " A plugin I\u2019ve actually been writing, to reimplement a more flexible version of docusaurs notes."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "contentlayer",
      children: createVNode(_components.a, {
        href: "#contentlayer",
        children: "ContentLayer"
      })
    }), "\n", createVNode(_components.p, {
      children: "I have been somewhat disappointed with the development experience of content layer, and can\u2019t really reccommend it\nas wholeheartidly as i wish i could, but i still find the idea to be just wha\u2019ts needed. It does two main things:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Puts the content in its own folders, and compiles it for you before serving"
      }), "\n", createVNode(_components.li, {
        children: "Applies the MDX plugins"
      }), "\n", createVNode(_components.li, {
        children: "Makes it easy for you to import the content where you want"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Problems:"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Images are separated from the source"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Not as fine-grained as I\u2019d like (hard to add plugins only to specific things, for example)"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Should rely on more portable things like Zod"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "nextjs-most-likely-axed-for-astro-possibly-remix",
      children: createVNode(_components.a, {
        href: "#nextjs-most-likely-axed-for-astro-possibly-remix",
        children: ["NextJS (most likely axed for Astro, ", createVNode(_components.em, {
          children: "possibly"
        }), " Remix)"]
      })
    }), "\n", createVNode(_components.p, {
      children: "Right now, this is using NextJS 13. Big reason: NextJS is what Boba is written in, and i\u2019ve been dying to fix some\nproblems that NextJS version 13 would. So I\u2019ve been using it for it."
    }), "\n", createVNode(_components.p, {
      children: "But I think NextJS is a bit too much for what I want to write here: I don\u2019t want enterprise software, and I am actually\ntempted to even go as far as Astro. If nothing else, I\u2019m going to"
    }), "\n", createVNode(_components.h4, {
      id: "straight-up-vanilla-css",
      children: createVNode(_components.a, {
        href: "#straight-up-vanilla-css",
        children: "Straight up vanilla CSS"
      })
    }), "\n", createVNode(_components.h3, {
      id: "payments-that-i-own",
      children: createVNode(_components.a, {
        href: "#payments-that-i-own",
        children: "Payments that I own"
      })
    }), "\n", createVNode(_components.h2, {
      id: "the-tech-stack-to-come",
      children: createVNode(_components.a, {
        href: "#the-tech-stack-to-come",
        children: "The tech stack to come"
      })
    }), "\n", createVNode(_components.h3, {
      id: "todo-activitypub--rss--other-microformats",
      children: createVNode(_components.a, {
        href: "#todo-activitypub--rss--other-microformats",
        children: "TODO: ActivityPub & RSS & other microformats"
      })
    }), "\n", createVNode(_components.h3, {
      id: "todo-nixos",
      children: createVNode(_components.a, {
        href: "#todo-nixos",
        children: "TODO: NixOS"
      })
    }), "\n", createVNode(_components.p, {
      children: "This will allow me to also explore other stuff, like adding image services, my own \u201Ciframely\u201D\nimplementation (I\u2019ll rant about iframely another time)."
    }), "\n", createVNode(_components.h3, {
      id: "the-final-frontier-netlify-cms",
      children: createVNode(_components.a, {
        href: "#the-final-frontier-netlify-cms",
        children: "The final frontier: Netlify CMS"
      })
    }), "\n", createVNode(_components.p, {
      children: "Sometimes you have a good idea and then realize someone else has done it. That\u2019s me with netlify CMS."
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
const url = "src/content/posts/entry2.mdx";
const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/posts/entry2.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/essentialrandomness/projects/programming/essential-random/src/content/posts/entry2.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
