import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, n as renderComponent, _ as __astro_tag_component__, F as Fragment, X as createVNode } from './astro_va4p0pd8.mjs';
import { $ as $$Image } from './pages/generic_eRRtI0eS.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                                         */

const bobaWip = new Proxy({"src":"/_astro/bobawip.2a0Y4vEh.png","width":1924,"height":1604,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/essentialrandomness/projects/programming/essential-random/src/components/bobawip.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$ContentInProgress = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContentInProgress;
  return renderTemplate`${maybeRenderHead()}<aside class="wip" data-astro-cid-xz37kapx> ${renderComponent($$result, "Image", $$Image, { "src": bobaWip, "alt": "Boba-tan working hard", "data-astro-cid-xz37kapx": true })} <div data-astro-cid-xz37kapx> <div class="title" data-astro-cid-xz37kapx>This section is a Work In Progress!</div><div data-astro-cid-xz37kapx>
Writing content is hard work! When I run out of time, I might leave
      sections unfinished to stick to my content schedule.
</div> <div data-astro-cid-xz37kapx> <strong data-astro-cid-xz37kapx>If you're dying for this section to be filled, <a href="/support-me#donate" data-astro-cid-xz37kapx>become a $upporter</a></strong>. You can vote for it on my dedicated $upporters writing time!
</div> </div>  </aside> `;
}, "/Users/essentialrandomness/projects/programming/essential-random/src/components/ContentInProgress.astro", void 0);

const frontmatter = {
  "title": "I made some pages in HTML and CSS, now what?",
  "tagline": "How to build an indie website that grows with you",
  "created_at": "2024-01-16T15:59:59.000Z",
  "status": "pre-beta",
  "og_description": "Have you learned some HTML and CSS but feel like the website\nof your dreams (with a blog! a fancy gallery! a comments section!) is out of\nyour reach? Here's a few options for your next steps!\n"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "outgrowing-html-and-css",
    "text": "Outgrowing HTML and CSS"
  }, {
    "depth": 2,
    "slug": "so-many-pathways-so-little-time",
    "text": "So Many Pathways, So Little Time"
  }, {
    "depth": 3,
    "slug": "the-static-site-generation-path",
    "text": "The Static Site Generation Path"
  }, {
    "depth": 4,
    "slug": "installing-astro",
    "text": "Installing Astro"
  }, {
    "depth": 4,
    "slug": "part-1-the-basics",
    "text": "Part 1: The Basics"
  }, {
    "depth": 4,
    "slug": "part-2-the-slightly-less-basics",
    "text": "Part 2: The slightly-less Basics"
  }, {
    "depth": 4,
    "slug": "uploading-your-website",
    "text": "Uploading your Website"
  }, {
    "depth": 3,
    "slug": "the-play-around-in-the-browser-path",
    "text": "The Play Around in the Browser Path"
  }, {
    "depth": 3,
    "slug": "the-saving-data-on-the-server-path",
    "text": "The Saving Data on the Server Path"
  }, {
    "depth": 3,
    "slug": "the-always-worth-it-regadless-of-path",
    "text": "The \u201CAlways Worth it, Regadless of Path\u201D"
  }, {
    "depth": 2,
    "slug": "next-up-on-your-journey-trial-and-error-mix-and-match",
    "text": "Next Up on Your Journey: Trial and Error, Mix and Match"
  }, {
    "depth": 2,
    "slug": "making-the-glompjump-to-typescript",
    "text": "Making the GlompJump to TypeScript"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    del: "del",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    nav: "nav",
    ol: "ol",
    p: "p",
    strong: "strong",
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
            href: "#outgrowing-html-and-css",
            children: "Outgrowing HTML and CSS"
          })
        }), createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: [createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#so-many-pathways-so-little-time",
            children: "So Many Pathways, So Little Time"
          }), createVNode(_components.ol, {
            class: "toc-level toc-level-2",
            children: [createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: [createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#the-static-site-generation-path",
                children: "The Static Site Generation Path"
              }), createVNode(_components.ol, {
                class: "toc-level toc-level-3",
                children: [createVNode(_components.li, {
                  class: "toc-item toc-item-h4",
                  children: createVNode(_components.a, {
                    class: "toc-link toc-link-h4",
                    href: "#installing-astro",
                    children: "Installing Astro"
                  })
                }), createVNode(_components.li, {
                  class: "toc-item toc-item-h4",
                  children: createVNode(_components.a, {
                    class: "toc-link toc-link-h4",
                    href: "#part-1-the-basics",
                    children: "Part 1: The Basics"
                  })
                }), createVNode(_components.li, {
                  class: "toc-item toc-item-h4",
                  children: createVNode(_components.a, {
                    class: "toc-link toc-link-h4",
                    href: "#part-2-the-slightly-less-basics",
                    children: "Part 2: The slightly-less Basics"
                  })
                }), createVNode(_components.li, {
                  class: "toc-item toc-item-h4",
                  children: createVNode(_components.a, {
                    class: "toc-link toc-link-h4",
                    href: "#uploading-your-website",
                    children: "Uploading your Website"
                  })
                })]
              })]
            }), createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#the-play-around-in-the-browser-path",
                children: "The Play Around in the Browser Path"
              })
            }), createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#the-saving-data-on-the-server-path",
                children: "The Saving Data on the Server Path"
              })
            }), createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#the-always-worth-it-regadless-of-path",
                children: "The \u201CAlways Worth it, Regadless of Path\u201D"
              })
            })]
          })]
        }), createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#next-up-on-your-journey-trial-and-error-mix-and-match",
            children: "Next Up on Your Journey: Trial and Error, Mix and Match"
          })
        }), createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#making-the-glompjump-to-typescript",
            children: ["Making the ", createVNode(_components.del, {
              children: "Glomp"
            }), "Jump to TypeScript"]
          })
        })]
      })
    }), "\n", "\n", createVNode(_components.h2, {
      id: "outgrowing-html-and-css",
      children: createVNode(_components.a, {
        href: "#outgrowing-html-and-css",
        children: "Outgrowing HTML and CSS"
      })
    }), "\n", createVNode(_components.p, {
      children: "After building a few HTML pages, you may start to feel that your website dreams\nare slowed down by repeated tasks, or that you\u2019re looking for more fanciful\ninteractivity than you know how to build. Your struggles might include (or look\nsimilar to) these:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Keeping your layout consistent across pages without repeating code. For\nexample, you might want to automatically update your navigation on every page\nwithout changing the HTML on each of them."
      }), "\n", createVNode(_components.li, {
        children: "Automatically creating pages for each individual work in your galleries, or\nfiltering them according to their tags."
      }), "\n", createVNode(_components.li, {
        children: "Allowing users to add their own content to your pages, be it in the form of a\nguestbook, a comment section, or even likes on your posts."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["First of all, ", createVNode(_components.em, {
        children: "congratulations!"
      }), " Your ambition is a sign of your growth as a\nwebsite weaver. At this point, for how intimidating that sounds, you might be\nready for the next step in web development: a foray into JavaScript-based tools,\nand (if you wish) programming."]
    }), "\n", createVNode(_components.h2, {
      id: "so-many-pathways-so-little-time",
      children: createVNode(_components.a, {
        href: "#so-many-pathways-so-little-time",
        children: "So Many Pathways, So Little Time"
      })
    }), "\n", createVNode(_components.p, {
      children: ["First, ", createVNode(_components.em, {
        children: "bad news"
      }), ": there\u2019s countless potential paths in front of you, which might\nfeel confusing and overwhelming. But\u2013", createVNode(_components.em, {
        children: "good news!"
      }), "\u2013every developer\u2019s journey is\nunique (and rarely linear), and you\u2019re going to be fine no matter the steps you\nchoose to take."]
    }), "\n", createVNode(_components.p, {
      children: "In this article, we\u2019ll discuss my favorite options:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "The Static Site Generation Path (my reccommendation for fannish folks)"
      }), "\n", createVNode(_components.li, {
        children: "The Play Around in the Browser Path"
      }), "\n", createVNode(_components.li, {
        children: "The Server Path"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "You can choose one of them and follow it to the end, or you can jump around as\nyou wish. Some will find that the one that seemed most appealing doesn\u2019t\nend up being their favorite. Others might find the one that didn\u2019t turns\nout to be a lot of fun."
    }), "\n", createVNode(_components.p, {
      children: "Remember: if you don\u2019t like the choice you made, you can\ngo back and try a different one. Not only figuring out what you don\u2019t like is as\nvaluable as figuring out what you do, but all these choices build upon each\nother. No learning is ever wasted."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "NOTE:"
        }), " If you\u2019re very ambitious, you might choose to start directly here, and\nlearn HTML and CSS as you go. While some might caution you against it, as a\nfellow \u201Cthrowing myself off the deep end\u201D learner, I say: ", createVNode(_components.em, {
          children: "don\u2019t let your\ndreams be dreams!"
        }), " For you, the Static Site Generation Path might be the right\nchoice."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "the-static-site-generation-path",
      children: createVNode(_components.a, {
        href: "#the-static-site-generation-path",
        children: "The Static Site Generation Path"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Let\u2019s say you like to produce content, ", createVNode(_components.em, {
        children: "a lot of content"
      }), ". This might look like\na website with many different pages, galleries with a lot of art, or even\nfrequent updates and improvements to your layout that need to be copy pasted on\neach page. Maybe you ", createVNode(_components.em, {
        children: "even"
      }), " wish to start a blog. Static Site Generators are the\nperfect tool to tackle these challenges."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: ["A Static Site Generator (SSG) is a program that, rather than have you write each\npage of your website by hand, stitches your files together and ", createVNode(_components.em, {
          children: "generates"
        }), " those\npages for you."]
      }), " For example, an SSG will allow you to:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Define your own ", createVNode(_components.code, {
          children: "<Navigation />"
        }), " tag to add wherever you want your navigation bar\nto appear. The SSG will swap this tag with the HTML and CSS of your navigation."]
      }), "\n", createVNode(_components.li, {
        children: ["Automatically add a new entry to your gallery for each image in a folder, making sure\nyou never accidentally forget to add a new ", createVNode(_components.code, {
          children: "img"
        }), " tag to your HTML."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "In the end, an SSG will create the same HTML and CSS files you\u2019d have written\nmanually"
      }), ", without you having to repeat the same code over and over again.\nThese days, ", createVNode(_components.a, {
        href: "https://astro.build/",
        children: "the web (and me)\u2018s most darling Static Site Generator is\nAstro"
      }), ". If their homepage seems too full of jargon and\noverwhelming for you, don\u2019t worry: you don\u2019t need to understand any of those\nwords to be able to use it."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Note:"
        }), " if you want to follow along my ", createVNode(_components.em, {
          children: "live"
        }), " explanation of this path, you can ", createVNode(_components.a, {
          href: "https://youtu.be/LOs8DqEi2_s?si=W31BDVLQn73zKUp8",
          children: "watch me\ngo through it on YouTube"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "installing-astro",
      children: createVNode(_components.a, {
        href: "#installing-astro",
        children: "Installing Astro"
      })
    }), "\n", createVNode(_components.p, {
      children: "Here\u2019s how to get started:"
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "Click here to reveal the installation steps"
      }), createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.strong, {
              children: "Learn how to open you Terminal (command line) and navigate to a folder:"
            }), " many\nbeginners (and some experts) are nervous about using the command line to run programs. In\nreality, ", createVNode(_components.strong, {
              children: ["you can start using the command line without learning ", createVNode(_components.em, {
                children: "any"
              }), " command."]
            }), " Windows\u2019 Terminal is\ncalled PowerShell, and ", createVNode(_components.a, {
              href: "https://adamtheautomator.com/windows-open-powershell-in-a-folder/#Opening_PowerShell_via_the_Address_Bar",
              children: "you can open it in any folder by following this guide"
            }), ".\nThere are similar guides for ", createVNode(_components.a, {
              href: "https://apple.stackexchange.com/questions/11323/how-can-i-open-a-terminal-window-directly-from-my-current-finder-location",
              children: "Mac"
            }), "\nor ", createVNode(_components.a, {
              href: "https://www.techrepublic.com/article/linux-101-how-to-quickly-open-a-terminal-in-a-specific-directory/",
              children: "Linux"
            }), "."]
          }), "\n", createVNode(_components.blockquote, {
            children: ["\n", createVNode(_components.p, {
              children: [createVNode(_components.strong, {
                children: "NOTE:"
              }), " if you\u2019d really, ", createVNode(_components.em, {
                children: "really"
              }), " like to avoid using a Terminal, I suggest you go through the\n", createVNode(_components.a, {
                href: "#the-play-around-in-the-browser-path",
                children: "\u201CPlay Around in the Browser\u201D path"
              }), " instead. Just know I\nbelieve in you and your ability to master the command line!"]
            }), "\n"]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.strong, {
              children: "Install NodeJS with Node Version Manager (NVM):"
            }), " NodeJS allows you to run\nJavaScript code on your computer (rather than in your browser). Astro, like\nmany other program, is written in JavaScript and needs NodeJS to run.\n", createVNode(_components.strong, {
              children: ["Rather than installing NodeJS directly I suggest you use NVM\n(", createVNode(_components.a, {
                href: "https://github.com/coreybutler/nvm-windows?tab=readme-ov-file#install-nvm-windows",
                children: "Windows"
              }), ",\n", createVNode(_components.a, {
                href: "https://github.com/nvm-sh/nvm",
                children: "others"
              }), ")."]
            }), " NVM will install NodeJS for you,\nand allow you to switch between different versions whenever you need. It\u2019s a\nhandy tool that will help you later. After installing NodeJS, ", createVNode(_components.strong, {
              children: ["you can now\nrun ", createVNode(_components.code, {
                children: "npm"
              }), " commands in your Terminal."]
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.strong, {
              children: "Install (and play around with) Astro"
            }), ": Astro has an excellent\n", createVNode(_components.a, {
              href: "https://docs.astro.build/",
              children: "documentation website"
            }), " and a friendly Discord\nserver for when you get stuck. Currently (January 2024), ", createVNode(_components.strong, {
              children: [createVNode(_components.a, {
                href: "https://docs.astro.build/en/install/auto/",
                children: "the command to\ncreate your Astro website"
              }), " is ", createVNode(_components.code, {
                children: "npm create astro@latest"
              }), "."]
            }), " Open your Terminal in the folder you want to create\nyour website in, run this command, answer some questions, and you\u2019re done!\nReopen your Terminal in the new folder (or ", createVNode(_components.code, {
              children: "cd"
            }), " into it) then run ", createVNode(_components.code, {
              children: "npm run dev"
            }), " to see your Astro website come to life."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", createVNode(_components.h4, {
      id: "part-1-the-basics",
      children: createVNode(_components.a, {
        href: "#part-1-the-basics",
        children: "Part 1: The Basics"
      })
    }), "\n", createVNode(_components.p, {
      children: "From here, here\u2019s how I suggest you approach learning how to use SSGs:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.a, {
            href: "https://docs.astro.build/en/core-concepts/astro-pages/",
            children: "Make some new\npages"
          }), ":"]
        }), " First, you\ncan create some HTML pages in your ", createVNode(_components.code, {
          children: "src/pages/"
        }), " folder to see that all you\nknow still works as you expect! Next, you can try creating some ", createVNode(_components.code, {
          children: ".astro"
        }), "\npages, and (if you\u2019re a fan of markdown) even some ", createVNode(_components.code, {
          children: ".md"
        }), " ones. Run ", createVNode(_components.code, {
          children: "npm run dev"
        }), " in your terminal to see a preview of these pages."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "https://docs.astro.build/en/guides/deploy/#building-your-site-locally",
            children: ["Learn how to ", createVNode(_components.code, {
              children: "build"
            }), " your\nwebsite"]
          })
        }), ":\nWhen you have made one or more pages, you can run ", createVNode(_components.code, {
          children: "npm run build"
        }), " to generate\nyour final HTML and CSS pages. Explore the files in the newly-created ", createVNode(_components.code, {
          children: "dist/"
        }), "\ndirectory (in the same folder as your website) to see the code Astro built for\nyou!"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.a, {
            href: "https://docs.astro.build/en/core-concepts/astro-components/",
            children: "Create a Component (without\nProps)"
          }), ":"]
        }), " A\nComponent is a reusable tag you can add to any ", createVNode(_components.code, {
          children: ".astro"
        }), " page in place of\nrewriting the same HTML. You can write ", createVNode(_components.em, {
          children: "any"
        }), " component you wish, but if you\ncannot choose the Astro documentation has ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/tutorial/3-components/",
          children: "a tutorial that guides you through\ncreating a Navigation\nBar"
        }), ". Regardless of which\ncomponent you choose to build, this is a good time to dive into them!"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.a, {
            href: "https://docs.astro.build/en/core-concepts/layouts/",
            children: "Create your Layout"
          }), ":"]
        }), "\nA step up from simple components, creating a layout will allow you to easily\nwrap the unique content of every page in the same HTML. The new concept you\u2019re\nlooking to explore here is ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/core-concepts/astro-components/#slots",
          children: ["the ", createVNode(_components.code, {
            children: "<slot />"
          }), "\ntag"]
        }), ". A\nslot is a \u201Chole\u201D in the HTML of your component that allows you to insert more\nHTML and CSS content within it. Think of wrapping the content unique to each\npage in a ", createVNode(_components.code, {
          children: "<Layout>"
        }), " tag!"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.a, {
            href: "https://docs.astro.build/en/core-concepts/astro-components/#component-props",
            children: "Create a Component (with\nprops)"
          }), ":"]
        }), "\nprops allow you to add custom attributes to Component tags you create! For\nexample, you might create a ", createVNode(_components.code, {
          children: "Card"
        }), " that allows you to display information\nabout your OCs, and use attributes for the data that changes between them,\nlike their names, images, and descriptions."]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "part-2-the-slightly-less-basics",
      children: createVNode(_components.a, {
        href: "#part-2-the-slightly-less-basics",
        children: "Part 2: The slightly-less Basics"
      })
    }), "\n", createVNode(_components.p, {
      children: ["At this point, if you start feeling overwhelmed by the JavaScript required, it\nmight be worth temporarily switching to the ", createVNode(_components.a, {
        href: "#the-play-around-in-the-browser-path",
        children: "\u201CPlay Around in the\nBrowser\u201D"
      }), " path to beef up your skills.\nOnce you\u2019re comfortable with these (or if you like \u201Ctrials by fire\u201D), here\u2019s\nhow you might proceed:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.a, {
            href: "https://docs.astro.build/en/core-concepts/routing/#dynamic-routes",
            children: "Dynamic Routes"
          }), ":"]
        }), " Dynamic\nroutes allow you to automatically generate individual pages based on a list of\ndata. For example, continuing the OC example, you might create an individual\npage for each character and make your OC card link to it. For a different take\non this, the ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/tutorial/5-astro-api/",
          children: "\u201Cbuild a blog\u201D Astro\ntutorial"
        }), " guides you\nthrough automatically generating a blog from a series of markdown files in a\nfolder. My ", createVNode(_components.a, {
          href: "/posts/get-static-paths",
          children: ["guide to ", createVNode(_components.code, {
            children: "getStaticPaths"
          })]
        }), " might also help."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.a, {
            href: "https://docs.astro.build/en/guides/content-collections/#_top",
            children: "Content\nCollections"
          }), ":"]
        }), "\nThis is my favorite Astro feature, and one of the main reasons I so highly\nreccommend it. While this will require ", createVNode(_components.a, {
          href: "#making-the-glompjump-to-typescript",
          children: "some\nTypeScript"
        }), ", you don\u2019t need to fully know\nTypeScript to get benefits out of it. Long story short, content collections\nallow you to store all your content in a ", createVNode(_components.code, {
          children: "src/content/"
        }), " folder, and make sure\nthat all content in a collection has the same structure. For example, a\ncontent collection can help ensure that all your blogpost have a title, or all\nyour OCs have a favorite food. You can follow ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/tutorials/add-content-collections/#extending-the-blog-tutorial-with-content-collections",
          children: "Astro\u2019s Blog with Content\nCollections\ntutorial"
        }), "\nto learn more about them."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.a, {
            href: "https://docs.astro.build/en/guides/markdown-content/#configuring-markdown-and-mdx",
            children: "Remark & Rehype Plugins"
          }), ":"]
        }), "\nonce again, one of my favorite features (not just of Astro). If you\u2019re writing your content\nin markdown or MDX, you can install Remark and Rehype plugins to extend the\ncapabilities of your markdown. For example, I use them to automatically\ngenerate the table of content in these pages, or to add emojis to my content\nusing the typical ", createVNode(_components.code, {
          children: ":emoji:"
        }), " shorthand ", createVNode(_components.img, {
          src: "/emojis/bobaparty.png",
          class: "custom-emoji",
          alt: ":bobaparty:"
        }), createVNode(_components.img, {
          src: "/emojis/bobaparty.png",
          class: "custom-emoji",
          alt: ":bobaparty:"
        }), createVNode(_components.img, {
          src: "/emojis/bobaparty.png",
          class: "custom-emoji",
          alt: ":bobaparty:"
        }), "!"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "uploading-your-website",
      children: createVNode(_components.a, {
        href: "#uploading-your-website",
        children: "Uploading your Website"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Statically Generated websites can be easily published to websites hosts like\nNeocities. After all, once you run ", createVNode(_components.code, {
        children: "npm run build"
      }), ", the content within your\n", createVNode(_components.code, {
        children: "dist/"
      }), " folder will be the same HTML and CSS pages you\u2019d have written by hand!\nIf you want to step up your game even further, you can ", createVNode(_components.a, {
        href: "#the-always-worth-it-regadless-of-path",
        children: "learn how to use Git +\nGitHub"
      }), " to automatically upload your\nwebsite to the web whenever you create a new version."]
    }), "\n", createVNode(_components.h3, {
      id: "the-play-around-in-the-browser-path",
      children: createVNode(_components.a, {
        href: "#the-play-around-in-the-browser-path",
        children: "The Play Around in the Browser Path"
      })
    }), "\n", createVNode($$ContentInProgress, {}), "\n", createVNode(_components.p, {
      children: "Maybe you want to try JavaScript, but aren\u2019t yet ready to commit to all that\ncomes with a more complex setup, like the one for static site generation. Maybe\nyou wish to build experiences that fit within a single page, but require more\ninteractivity or bell and whistles that HTML and CSS give you."
    }), "\n", createVNode(_components.p, {
      children: "Luckily, JavaScript is one of the simplest programming languages to get started with!\nAll you need is the same browser you\u2019ve been reading this page with\u2013at least if you\u2019re\non a desktop device!"
    }), "\n", createVNode(_components.p, {
      children: "While I don\u2019t have time to flesh out this section, here\u2019s some very quick pointers for what to learn:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Basic of code (variables, arrays, functions, objects):"
        }), " You can ", createVNode(_components.a, {
          href: "https://www.codecademy.com/article/running-javascript-in-the-browser-console",
          children: "use your\nbrowser\nconsole"
        }), "\nto play around with JavaScript in an easily-interactive fashion! This is a\ngreat way to quickly experiment with some programming basics. If you wish, I\nhave a ", createVNode(_components.a, {
          href: "https://www.youtube.com/watch?v=0k3rIR2rp0o&list=PLhXpCwgI-5FIo4KHBNSsrGi78pLECCe7Z&index=5",
          children: "YouTube tutorial on these\nbasics"
        }), ".\nJust be mindful that ", createVNode(_components.a, {
          href: "#making-the-glompjump-to-typescript",
          children: "this tutorial uses\nTypeScript"
        }), ", which doesn\u2019t work directly\nin the browser console. However, all that is discussed works exactly the same for JavaScript (minus\ntype annotations)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Logging values to console:"
        }), " This is invaluable for debugging, especially as a beginner. I suggest learning about both\n", createVNode(_components.code, {
          children: "console.log"
        }), " and ", createVNode(_components.code, {
          children: "console.dir"
        }), " (with the ", createVNode(_components.code, {
          children: "{ depth: null }"
        }), " option). Use them freely and with abandon!"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "DOM manipulation:"
        }), " What good is JavaScript if you don\u2019t know how to use it\nto change the look of your website? Learn about\n", createVNode(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_basic_dom_manipulation",
          children: createVNode(_components.code, {
            children: "querySelector"
          })
        }), "\nand ", createVNode(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#creating_and_placing_new_nodes",
          children: "adding children to elements"
        }), ", and get manipulating!"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "JavaScript event handlers:"
        }), " Reacting to browser events is what JavaScript\nis all about! ", createVNode(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events",
          children: ["Learning all you can about\n", createVNode(_components.code, {
            children: "addEventListener"
          })]
        }), "\nwill quickly set you on the path to mastery!"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Given the lack of time, I\u2019ll leave you with another of my posts in place of task\nexamples: ", createVNode(_components.a, {
        href: "https://essential-randomness.tumblr.com/post/677309777029824512/dear-ms-boba-how-do-you-go-from-having-general",
        children: "how to come up with good projects to improve your programming\nskills"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "the-saving-data-on-the-server-path",
      children: createVNode(_components.a, {
        href: "#the-saving-data-on-the-server-path",
        children: "The Saving Data on the Server Path"
      })
    }), "\n", createVNode($$ContentInProgress, {}), "\n", createVNode(_components.p, {
      children: "Do you want to interact with other websites and applications (like Discord), or\nstore and retrieve \u201Cuser-generated data\u201D (like comments)? Then learning about server-side\nprogramming might be the thing for you!"
    }), "\n", createVNode(_components.p, {
      children: "One again, there\u2019s many routes to learn about this topic. While I don\u2019t have\ntime to flesh out this section, here\u2019s some very quick pointers for what to\nlearn:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.a, {
            href: "#installing-astro",
            children: "Install Astro"
          }), ":"]
        }), " While Astro is mainly a Static Site\nGenerator, it\u2019s also an incredibly quick and easy way to get a server up and\nrunning!"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: [createVNode(_components.a, {
            href: "https://docs.astro.build/en/core-concepts/rendering-modes/#on-demand-rendered",
            children: "Enable \u201Cserver\nmode\u201D"
          }), ":"]
        }), "\nAs I said, you can easily get access to a server with Astro!"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["Watch ", createVNode(_components.a, {
            href: "https://www.twitch.tv/videos/2026880997",
            children: "my video on using forms and\nwebhooks"
          }), ":"]
        }), " Forms are your portal\nbetween the client (what you see on your browser) and the server (where data\ngets processed). You can also learn about ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes",
          children: "API endpoints in\nAstro"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Learn SQLite:"
        }), " While I don\u2019t have content specifically about this yet, I\ncan reccommend ", createVNode(_components.a, {
          href: "https://turso.tech/",
          children: "Turso"
        }), " as a way to get access to a free\nSQLite DB to experiment with."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Important:"
      }), " You cannot host websites that need a server on Neocities. ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/deploy/",
        children: "Astro\u2019s website has\na few handy suggestions for you"
      }), ". You will need to\nchoose one that supports SSR. This is a good time to learn ", createVNode(_components.a, {
        href: "#the-always-worth-it-regadless-of-path",
        children: "about using Version Control"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "the-always-worth-it-regadless-of-path",
      children: createVNode(_components.a, {
        href: "#the-always-worth-it-regadless-of-path",
        children: "The \u201CAlways Worth it, Regadless of Path\u201D"
      })
    }), "\n", createVNode($$ContentInProgress, {}), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Learn Git & GitHub:"
        }), " Once again, Git + GitHub have been voted \u201Cmost useful\nskill that I would not have learned on my own\u201D by our beginner friends in\nFandom Coders! They\u2019re also ", createVNode(_components.a, {
          href: "https://www.youtube.com/watch?v=PMVw63yvY7U&list=PLhXpCwgI-5FIo4KHBNSsrGi78pLECCe7Z&index=1",
          children: "the topic of my very first\nlivestream"
        }), ".\nIf you want hot fictional characters to help you learn this skill, ", createVNode(_components.a, {
          href: "https://www.fujoweb.dev/",
          children: "follow our\nprogress on FujoGuide Volume 0"
        }), "!"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Switch to a professional code editor:"
        }), " The default choice these days is\n", createVNode(_components.a, {
          href: "https://code.visualstudio.com/docs/introvideos/basics",
          children: "the excellent VSCode"
        }), "!"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "next-up-on-your-journey-trial-and-error-mix-and-match",
      children: createVNode(_components.a, {
        href: "#next-up-on-your-journey-trial-and-error-mix-and-match",
        children: "Next Up on Your Journey: Trial and Error, Mix and Match"
      })
    }), "\n", createVNode(_components.p, {
      children: ["These paths just give you an idea of what\u2019s possible, but remember: you don\u2019t\nneed to follow them linearly. Jump in and out and see which one you vibe with!\nIf you start feeling discouraged, try attacking JavaScript from a different side. The\nbest way to learn is to ", createVNode(_components.a, {
        href: "https://essential-randomness.tumblr.com/post/677309777029824512/dear-ms-boba-how-do-you-go-from-having-general",
        children: "build a project that\u2019s just a bit outside of your comfort\nzone"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["While the road to mastering these abilities won\u2019t be simple, I know that if\nyou stick with it you\u2019ll find yourself making progress quicker than you think,\nearlier than you think. ", createVNode(_components.strong, {
        children: "If you ever feel like there\u2019s no way you\u2019ll ever \u201Cget it\u201D,\ndon\u2019t despair: that\u2019s just how programming feels like sometimes!"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["You can always reach out to me on my socials or ", createVNode(_components.a, {
        href: "https://www.twitch.tv/essentialrandomness",
        children: "during streams"
      }), " with any question."]
    }), "\n", createVNode(_components.h2, {
      id: "making-the-glompjump-to-typescript",
      children: createVNode(_components.a, {
        href: "#making-the-glompjump-to-typescript",
        children: ["Making the ", createVNode(_components.del, {
          children: "Glomp"
        }), "Jump to TypeScript"]
      })
    }), "\n", createVNode(_components.p, {
      children: ["As you go through this journey, you will sometimes hear about TypeScript. For the most\npart, you don\u2019t need to worry about it: JavaScript code is also valid TypeScript\ncode. ", createVNode(_components.strong, {
        children: "Wherever you can write TypeScript, you can write JavaScript (but not vice versa)"
      }), ",\nwith maybe just a few red squiggles in your editor to keep you on your toes."]
    }), "\n", createVNode(_components.p, {
      children: "What TypeScript adds on top of JavaScript is the ability to know for sure what\ntype of value your variables contain, and what values your functions accept and\ngive back. While TypeScript can be scary, it\u2019s yet another step forward that can\nhelp you become a better and more efficient programmer. Thanks to TypeScript,\nyou can write more and more complex programs without spending as much time\ndebugging them or looking up references."
    }), "\n", createVNode("figure", {
      children: [createVNode("iframe", {
        width: "420",
        height: "315",
        src: "https://www.youtube.com/embed/6pDH66X3ClA"
      }), createVNode("figcaption", {
        children: createVNode(_components.p, {
          children: "TypeScript suffering as JavaScript revels in its lack of type safety."
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Unfortunately, there isn\u2019t a lot of great beginners friendly material to recommend.\nAs mentioned, ", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=0k3rIR2rp0o&list=PLhXpCwgI-5FIo4KHBNSsrGi78pLECCe7Z&index=5",
        children: "I went through TypeScript basics in this video"
      }), ".\nHopefully, I\u2019ll get to publish more content about it soon!"]
    }), "\n", createVNode(_components.p, {
      children: "Have a fun journey!"
    }), "\n", createVNode("style", {
      children: `
figure {
    text-align: center;
}
figcaption {
    margin-top: 5px;
    text-size: small;
    color: gray;
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
const url = "src/content/posts/html-css-what-next/index.mdx";
const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/posts/html-css-what-next/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/essentialrandomness/projects/programming/essential-random/src/content/posts/html-css-what-next/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
