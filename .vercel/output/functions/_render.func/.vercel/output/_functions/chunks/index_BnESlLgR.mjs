import { _ as __astro_tag_component__, F as Fragment, X as createVNode } from './astro_va4p0pd8.mjs';
import { $ as $$Image } from './pages/generic_eRRtI0eS.mjs';
import 'clsx';

const frontmatter = {
  "title": "A quick guide to `getStaticPaths`",
  "tagline": "A beginner-friendly explanation of why and how SSGs use this function.",
  "tags": ["+astro", "+typescript"],
  "created_at": "2023-12-31T11:09:53.000Z",
  "status": "pre-beta"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-getstaticpaths-does-in-astro-and-theoretically-nextjs",
    "text": "What getStaticPaths does in Astro (and theoretically NextJS)"
  }, {
    "depth": 2,
    "slug": "getstaticpaths-and-url-parameters",
    "text": "getStaticPaths and URL parameters"
  }, {
    "depth": 2,
    "slug": "getstaticpaths-and-props",
    "text": "getStaticPaths and props"
  }, {
    "depth": 2,
    "slug": "getstaticpaths-and-content-collections",
    "text": "getStaticPaths and content collections"
  }, {
    "depth": 3,
    "slug": "optional-trick-advanced-pre-render-components-within-getstaticpaths",
    "text": "Optional Trick (Advanced): pre-render components within getStaticPaths"
  }, {
    "depth": 2,
    "slug": "how-do-i-use-these-values-in-my-pages",
    "text": "How do I use these values in my pages?"
  }, {
    "depth": 3,
    "slug": "params",
    "text": "Params"
  }, {
    "depth": 3,
    "slug": "props",
    "text": "Props"
  }, {
    "depth": 2,
    "slug": "final-typescript-typing",
    "text": "Final TypeScript typing"
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
    li: "li",
    nav: "nav",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
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
            href: "#what-getstaticpaths-does-in-astro-and-theoretically-nextjs",
            children: ["What ", createVNode(_components.code, {
              children: "getStaticPaths"
            }), " does in Astro (and theoretically NextJS)"]
          })
        }), createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#getstaticpaths-and-url-parameters",
            children: [createVNode(_components.code, {
              children: "getStaticPaths"
            }), " and URL parameters"]
          })
        }), createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#getstaticpaths-and-props",
            children: [createVNode(_components.code, {
              children: "getStaticPaths"
            }), " and props"]
          })
        }), createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: [createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#getstaticpaths-and-content-collections",
            children: [createVNode(_components.code, {
              children: "getStaticPaths"
            }), " and content collections"]
          }), createVNode(_components.ol, {
            class: "toc-level toc-level-2",
            children: createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#optional-trick-advanced-pre-render-components-within-getstaticpaths",
                children: ["Optional Trick (Advanced): pre-render components within ", createVNode(_components.code, {
                  children: "getStaticPaths"
                })]
              })
            })
          })]
        }), createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: [createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#how-do-i-use-these-values-in-my-pages",
            children: "How do I use these values in my pages?"
          }), createVNode(_components.ol, {
            class: "toc-level toc-level-2",
            children: [createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#params",
                children: "Params"
              })
            }), createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#props",
                children: "Props"
              })
            })]
          })]
        }), createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#final-typescript-typing",
            children: "Final TypeScript typing"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "what-getstaticpaths-does-in-astro-and-theoretically-nextjs",
      children: createVNode(_components.a, {
        href: "#what-getstaticpaths-does-in-astro-and-theoretically-nextjs",
        children: ["What ", createVNode(_components.code, {
          children: "getStaticPaths"
        }), " does in Astro (and theoretically NextJS)"]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Static Site Generators (SSGs) don\u2019t create pages on demand when a visitor\nrequests them. Instead, they generate them all ahead of time (the so-called\n", createVNode(_components.em, {
        children: "\u201Cbuild time\u201D"
      }), ") before your site is uploaded to the web. This creates a problem\nwhen page definitions have parameters within their URLs: ", createVNode(_components.strong, {
        children: ["if a URL is of the\nform ", createVNode(_components.code, {
          children: "/posts/[postSlug]"
        }), ", what are all the possible valid values that\n", createVNode(_components.code, {
          children: "[postSlug]"
        }), " can have?"]
      }), " Without knowing this, your SSG cannot know what pages\nit\u2019s being asked to generate. This is the question that ", createVNode(_components.code, {
        children: "getStaticPaths"
      }), " exists\nto answer."]
    }), "\n", createVNode(_components.h2, {
      id: "getstaticpaths-and-url-parameters",
      children: createVNode(_components.a, {
        href: "#getstaticpaths-and-url-parameters",
        children: [createVNode(_components.code, {
          children: "getStaticPaths"
        }), " and URL parameters"]
      })
    }), "\n", createVNode(_components.p, {
      children: ["When an SSG goes to generate a page that has a dynamic parameter, it first\nsearches the code within in search of an ", createVNode(_components.em, {
        children: "exported"
      }), " function (the only ones it\ncan see) named ", createVNode(_components.code, {
        children: "getStaticPaths"
      }), ". When called, this function will give the SSG\nthe list of all the pages it needs to work its magic on. The form this list\ntakes is ", createVNode(_components.strong, {
        children: "an array made up of one JavaScript object per page with the values of\nthe URL parameter(s) for that page."
      })]
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s leverage TypeScript to show what this looks like:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " PageParameters"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  postSlug"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ParametersForEachPage"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Array"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<{"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  params"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " PageParameters"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}>;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// A function that takes no inputs, and returns ParametersForEachPage."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " getStaticPaths"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ParametersForEachPage"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Or, for a concrete example:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Since getStaticPaths often uses data that is loaded via network"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// or filesystem request, the function will be async and the return"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// value wrapped in a promise. If you don't know what that means,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// just ignore it: the broad concept remains the same."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " async"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " getStaticPaths"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "ParametersForEachPage"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "> {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    { params: { postSlug: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"my-shipping-manifesto\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    { params: { postSlug: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"typescript-is-your-friend-i-swear\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    { params: { postSlug: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"thirstposting-as-bonding-activity\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ];"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This will generate 3 pages:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "/posts/my-shipping-manifesto"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "/posts/typescript-is-your-friend-i-swear"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "/posts/thirstposting-as-bonding-activity"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["If you want, you can stop here: ", createVNode(_components.strong, {
        children: ["this is all your SSG needs to start using ", createVNode(_components.code, {
          children: "getStaticPaths"
        }), "."]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "getstaticpaths-and-props",
      children: createVNode(_components.a, {
        href: "#getstaticpaths-and-props",
        children: [createVNode(_components.code, {
          children: "getStaticPaths"
        }), " and props"]
      })
    }), "\n", createVNode(_components.p, {
      children: ["If you want to go deeper, however, there is yet another thing that\n", createVNode(_components.code, {
        children: "getStaticPaths"
      }), " can do for you: given that it already has to work to produce\nthe value of the URL parameters for every page (a task that might require\npotentially-expensive data loading), wouldn\u2019t it be neat if it could use that\nchance to ", createVNode(_components.strong, {
        children: ["also tell the SSG about the dynamic properties (\u201D", createVNode(_components.code, {
          children: "props"
        }), "\u201D) that\nchange page by page"]
      }), "?"]
    }), "\n", createVNode(_components.p, {
      children: ["Continuing our blog example, our dynamic properties could be ", createVNode(_components.code, {
        children: "tags"
      }), ", ", createVNode(_components.code, {
        children: "title"
      }), ",\n", createVNode(_components.code, {
        children: "created_at"
      }), ", and mostly anything that depends on the specific post and that we\nwant to avoid having to recalculate later. ", createVNode(_components.strong, {
        children: ["The SSG doesn\u2019t really care what\n", createVNode(_components.code, {
          children: "props"
        }), " you give it (and if you give any)"]
      }), ": it will simply pass them as-is to\neach page as it goes generate it, similarly to how we manually pass props to\ncomponents."]
    }), "\n", createVNode(_components.p, {
      children: "Our TypeScript signatures will then become:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " PageParameters"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  postSlug"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " PageProperties"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  tags"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "[];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  created_at"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Date"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " DataForEachPage"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Array"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<{"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  params"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " PageParameters"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  props"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " PageProperties"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}>;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// A function that takes no inputs, and returns DataForEachPage."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " getStaticPaths"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " DataForEachPage"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "In practice, our function will now look like this:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " async"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " getStaticPaths"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "GetStaticPathReturnValue"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "> {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Our shipping post"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            params: { postSlug: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"my-shipping-manifesto\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            props: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                tags: ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"fandom\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"shipping\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                title: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Why I am Right and You are All Wrong\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                created_at: "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Date"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'December 31, 2023 23:59:00'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Our typescript-defense-squad post"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            params: { postSlug: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"typescript-is-your-friend-i-swear\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            props: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                tags: ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"coding\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"typescript\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"beginners\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                title: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Be kind to him, he's just trying to help\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                created_at: "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Date"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'January 5, 2024 16:20:00'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // And so on so on..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ];"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Note that ", createVNode(_components.strong, {
        children: "unlike params (that the SSG must have to know what to generate), props\nare completely optional"
      }), ": if we preferred, we could simply load the post data\nagain in the page itself by using the value in the ", createVNode(_components.code, {
        children: "postSlug"
      }), " URL parameter.\n\u201CProps\u201D is simply a \u201Csince we\u2019re here, we might as well\u201D convenience."]
    }), "\n", createVNode(_components.h2, {
      id: "getstaticpaths-and-content-collections",
      children: createVNode(_components.a, {
        href: "#getstaticpaths-and-content-collections",
        children: [createVNode(_components.code, {
          children: "getStaticPaths"
        }), " and content collections"]
      })
    }), "\n", createVNode(_components.p, {
      children: ["In Astro, ", createVNode(_components.code, {
        children: "getStaticPaths"
      }), " is often used in tandem with content collections. There\u2019s\nnothing particularly special about using ", createVNode(_components.code, {
        children: "getStaticPaths"
      }), " this way, but let\u2019s go through\nhow such code typically looks bit by bit, and make sure that what\u2019s happening is clear."]
    }), "\n", createVNode(_components.p, {
      children: "Once again, our goal is to let the SSG know about:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["The value of ", createVNode(_components.code, {
          children: "postSlug"
        }), " for each one of our posts"]
      }), "\n", createVNode(_components.li, {
        children: ["The properties that change page by page (we\u2019ll assume this is\nevery property of ", createVNode(_components.code, {
          children: "entry.data"
        }), " for our collection, plus the function to render\nthe content)"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " async"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " getStaticPaths"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // If you're already loading this in the page itself, you cannot reuse it here:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // assume that getStaticPaths exists on its own and has no access to anything else"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // on the file you're writing: it can only see what's written within it."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " blogEntries"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " await"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " getCollection"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"posts\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Given an array, map will run the function for each entry, and put the returned"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // value in a new array (at the same position). This tells the SSG to generate a"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // page for each entry in our collection."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " blogEntries."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "map"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "blogPost"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "      // Content collections give us a nice slug for each entry, kindly"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "      // precalculated for us. This is the mandatory part."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      params: { postSlug: blogPost.slug },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "      // The properties that change for every rendered page. This is a simple"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "      // convenience since we have all the data available here."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      props: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Our \"renderContent\" prop will contain the function that renders the blog"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // post content. Rather than calling the function, we assign its value"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // to the renderContent property, like we'd do for any other variable."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // In practice, calling renderContent() will be the same as calling render()."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        renderContent: blogPost.render,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // We spread the content of blogPost.data in the returned object, so that"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // we have a prop for each value in the data, rather than the whole data"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // object as a single prop."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        ..."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "blogPost.data,"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Calling this ", createVNode(_components.code, {
        children: "getStaticPaths"
      }), " yields a similar result to the above version: an array with\none entry for each entry in your collection, with the value of the ", createVNode(_components.code, {
        children: "postSlug"
      }), " URL\nparameter, and ", createVNode(_components.code, {
        children: "props"
      }), " that contain the dynamic data for each page."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " async"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " getStaticPaths"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "DataForEachPage"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "> {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Our shipping post"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            params: { postSlug: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"my-shipping-manifesto\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            props: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                renderContent: "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "/*a function to render the blogpost content*/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                tags: ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"fandom\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"shipping\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                title: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Why I am Right and You are All Wrong\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                created_at: "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Date"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'December 31, 2023 23:59:00'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Our typescript-defense-squad post"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            params: { postSlug: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"typescript-is-your-friend-i-swear\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            props: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                renderContent: "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "/*a function to render the blogpost content*/"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                tags: ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"coding\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"typescript\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"beginners\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                title: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Be kind to him, he's just trying to help\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                created_at: "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Date"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'January 5, 2024 16:20:00'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // And so on so on..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ];"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Or in TypeScript terms:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " PageParameters"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  postSlug"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " PageProperties"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Warning: AstroComponent is not the real type, but don't worry about that."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  renderContent"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "AstroComponent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  tags"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "[];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  created_at"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Date"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " DataForEachPage"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Array"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<{"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  params"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " PageParameters"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  props"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " PageProperties"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}>;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// A function that takes no inputs, and returns DataForEachPage. Since"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// content collections have an asynchronous loader, this function will return a"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// promise. Luckily, Astro is chill with that."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " getStaticPaths"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "DataForEachPage"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">;"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "optional-trick-advanced-pre-render-components-within-getstaticpaths",
      children: createVNode(_components.a, {
        href: "#optional-trick-advanced-pre-render-components-within-getstaticpaths",
        children: ["Optional Trick (Advanced): pre-render components within ", createVNode(_components.code, {
          children: "getStaticPaths"
        })]
      })
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "Show me the trick!"
      }), createVNode("div", {
        children: [createVNode(_components.p, {
          children: ["If you want to ", createVNode(_components.em, {
            children: "directly return the rendered component"
          }), " (rather than the\nfunction to render it), you will run into a problem: the ", createVNode(_components.code, {
            children: "render"
          }), " function is\nan ", createVNode(_components.code, {
            children: "async"
          }), " function (that is returns a ", createVNode(_components.code, {
            children: "Promise"
          }), "), which means the function you\ncall to ", createVNode(_components.code, {
            children: "map"
          }), " every element of the array will also need to be ", createVNode(_components.code, {
            children: "async"
          }), " (and thus\nreturn a ", createVNode(_components.code, {
            children: "Promise"
          }), ")."]
        }), createVNode(_components.p, {
          children: "In TypeScript terms:"
        }), createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto"
          },
          tabindex: "0",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Same as before"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "type"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " PageParameters"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "  postSlug"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " string"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "};"
              })
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// Now our properties include Content (the actual component) instead of renderContent (a reference"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// to the function to render the content)"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "type"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " PageProperties"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "  // Instead of being a reference to the function `render`, this is now the result of calling"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "  // `await render()`"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "  Content"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " AstroComponent"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "  tags"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " string"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "[];"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "  title"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " string"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "  created_at"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " Date"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "};"
              })
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// OOOPS, now this is an array of promises! This makes Astro very confused."
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "type"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " DataForEachPage"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " Array"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "<"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "  Promise"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "<{"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "    params"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " PageParameters"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "    props"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: ":"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " PageProperties"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ";"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "  }>"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ">;"
              })
            })]
          })
        }), createVNode(_components.p, {
          children: ["If we want to pre-render the content, we can fix this in a somewhat-simple way: by waiting for\nall the promises in the array to be resolved, and thus turning ", createVNode(_components.code, {
            children: "DataForEachPage"
          }), " back\nto a simple array of objects. This is done using ", createVNode(_components.code, {
            children: "Promise.all(array)"
          }), ", which takes an\narray of ", createVNode(_components.code, {
            children: "Promise"
          }), " and waits for them all to be resolved."]
        }), createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto"
          },
          tabindex: "0",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "export"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " async"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " function"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " getStaticPaths"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "() {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "    const"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " blogEntries"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " await"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " getCollection"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"posts\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ");"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "    // We tell astro to wait for all promises in the array to be resolved before"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "    // reading the value."
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "    return"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " Promise"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "all"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "        // Since we added async to the function passed to map, we're now returning"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "        // an array of Promises (which will be waited on by Promise.all)"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "        blogEntries."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "map"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "async"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " ("
              }), createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "blogPost"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ") "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "=>"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "        return"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "            params: { postSlug: blogPost.slug },"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "            props: {"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "                // We now return the content component directly (note the first-letter-uppercase"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "                // convention, typical of components). Since `post.render` is an async function"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "                // it will need to be awaited, which is what forced us to add async"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "                // to the function passed to `map` and to have to use Promise.all."
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "                Content: "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "await"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " post."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "render"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(),"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "                ..."
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "blogPost.data,"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "            },"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "        };"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    });"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "}"
              })
            })]
          })
        }), createVNode(_components.p, {
          children: ["Now we\u2019re back to the previous type signature, and all\u2019s right with ", createVNode(_components.del, {
            children: "the world"
          }), "\nAstro."]
        }), createVNode(_components.p, {
          children: ["We can then use the rendered component in our ", createVNode(_components.code, {
            children: ".astro"
          }), " files by doing:"]
        }), createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto"
          },
          tabindex: "0",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "---"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " { "
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "Content"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "tags"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "title"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "created_at"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " } "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " Astro.props;"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "---"
              })
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "{title}"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "Published on: {created_at}"
              })
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "<"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "Content"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " />"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            })]
          })
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "how-do-i-use-these-values-in-my-pages",
      children: createVNode(_components.a, {
        href: "#how-do-i-use-these-values-in-my-pages",
        children: "How do I use these values in my pages?"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Astro has its own way to get these values in your page, using the special ", createVNode(_components.code, {
        children: "Astro"
      }), " object\nthat is available in every ", createVNode(_components.code, {
        children: ".astro"
      }), " file. Simply access the ", createVNode(_components.code, {
        children: "params"
      }), " and ", createVNode(_components.code, {
        children: "props"
      }), " elements\nin this object to get your values."]
    }), "\n", createVNode(_components.h3, {
      id: "params",
      children: createVNode(_components.a, {
        href: "#params",
        children: "Params"
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Remember: this destructuring is equivalent to"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// const postSlug = Astro.params.postSlug;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "postSlug"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Astro.params;"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "props",
      children: createVNode(_components.a, {
        href: "#props",
        children: "Props"
      })
    }), "\n", createVNode(_components.p, {
      children: "Props work exactly as it would be in any component that accepts props:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "renderContent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "tags"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "created_at"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Astro.props;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// If you want to use the rendered content you can render it and"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// then use it as any other tag. Note we capitalize the first letter"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// of content to remind ourself that's a component."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " Content"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " await"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " renderContent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{title}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Published on: {created_at}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Content"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " />"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "final-typescript-typing",
      children: createVNode(_components.a, {
        href: "#final-typescript-typing",
        children: "Final TypeScript typing"
      })
    }), "\n", createVNode(_components.p, {
      children: "Here\u2019s the final typescript types of the whole thing, which (if you\u2019ve surrendered\nto the power of our Lord TypeScript) will help you remember how the concepts are related:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " PageParameters"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  postSlug"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " PageProperties"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  renderContent"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "AstroComponent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  tags"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "[];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  created_at"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Date"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " DataForEachPage"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Array"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<{"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  params"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " PageParameters"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  props"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " PageProperties"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}>;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Astro will resolve that Promise for us, so we don't need to do anything"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// special with it. If Promises confuse you, you can pretend they're not here"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// in this case."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " getStaticPaths"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "DataForEachPage"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// The type of Astro.params will then be the same as PageParameters"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " AstroParams"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  postSlug"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// And the type of Astro.props will then be the same as PageProperties"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " AstroProps"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  renderContent"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Promise"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "AstroComponent"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  tags"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "[];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  title"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "  created_at"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Date"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["\u2026and that is all! Go forth and use the power of ", createVNode(_components.code, {
        children: "getStaticPaths"
      }), " and let me know\nif anything is unclear."]
    }), "\n", createVNode("details", {
      open: true,
      children: [createVNode("summary", {
        children: "Liked this? Help me change the face of web development!"
      }), createVNode("div", {
        children: createVNode(_components.p, {
          children: ["Changing the web means changing who builds it! To this end, I create\naccessible education targeted at growing hobbyists webdevs from isolated\nbeginners to open-source collaborators and maintainers. Learn how to", " ", "\n", createVNode("a", {
            href: "/support-me",
            children: "support this and more work on my Support Me page!"
          })]
        })
      })]
    }), "\n", createVNode("style", {
      children: `
    details {
        background-color: lightgray;
        padding: 10px 20px;
        margin: 20px 10px;
        border-radius: 16px;
    }
    summary {
        font-weight: bold;
    }
`
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
const url = "src/content/posts/get-static-paths/index.mdx";
const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/posts/get-static-paths/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/essentialrandomness/projects/programming/essential-random/src/content/posts/get-static-paths/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
