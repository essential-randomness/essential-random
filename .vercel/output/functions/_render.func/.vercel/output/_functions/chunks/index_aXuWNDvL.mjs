import { _ as __astro_tag_component__, F as Fragment, X as createVNode } from './astro_va4p0pd8.mjs';
import { $ as $$Image } from './pages/generic_eRRtI0eS.mjs';
import 'clsx';

const __0___choose_what_to_pay_stripe_png__ = new Proxy({"src":"/_astro/choose-what-to-pay-stripe.EvBE-q8b.png","width":1406,"height":1065,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/essentialrandomness/projects/programming/essential-random/src/content/posts/tip-jar-with-stripe-and-paypal/choose-what-to-pay-stripe.png";
							}
							
							return target[name];
						}
					});

const __1___after_payment_stripe_png__ = new Proxy({"src":"/_astro/after-payment-stripe.5ijHs_mk.png","width":1411,"height":808,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/essentialrandomness/projects/programming/essential-random/src/content/posts/tip-jar-with-stripe-and-paypal/after-payment-stripe.png";
							}
							
							return target[name];
						}
					});

const __2___paypal_options_png__ = new Proxy({"src":"/_astro/paypal-options.trNlX-4B.png","width":1289,"height":404,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/essentialrandomness/projects/programming/essential-random/src/content/posts/tip-jar-with-stripe-and-paypal/paypal-options.png";
							}
							
							return target[name];
						}
					});

const __3___campaign_page_preview_png__ = new Proxy({"src":"/_astro/campaign-page-preview.saPhQgbJ.png","width":1578,"height":1021,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/essentialrandomness/projects/programming/essential-random/src/content/posts/tip-jar-with-stripe-and-paypal/campaign-page-preview.png";
							}
							
							return target[name];
						}
					});

const __4___paypal_buttons_png__ = new Proxy({"src":"/_astro/paypal-buttons.owEqlSzV.png","width":1496,"height":935,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/essentialrandomness/projects/programming/essential-random/src/content/posts/tip-jar-with-stripe-and-paypal/paypal-buttons.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Create a tip jar with PayPal and Stripe (easy mode)",
  "created_at": "2023-12-07T15:35:19.000Z",
  "status": "rough-draft"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "set-up",
    "text": "Set up"
  }, {
    "depth": 3,
    "slug": "what-you-need",
    "text": "What you need"
  }, {
    "depth": 3,
    "slug": "donations-vs-tips",
    "text": "Donations vs Tips"
  }, {
    "depth": 3,
    "slug": "how-to-get-tips-with-stripe",
    "text": "How to Get Tips with Stripe"
  }, {
    "depth": 4,
    "slug": "stripe-customers-portal",
    "text": "Stripe Customers Portal"
  }, {
    "depth": 3,
    "slug": "how-to-get-tips-with-paypal",
    "text": "How to Get Tips with PayPal"
  }, {
    "depth": 4,
    "slug": "paypalme",
    "text": "PayPal.me"
  }, {
    "depth": 4,
    "slug": "paypal-donation-button",
    "text": "PayPal Donation Button"
  }, {
    "depth": 4,
    "slug": "paypal-payments-buttons",
    "text": "PayPal Payments Buttons"
  }, {
    "depth": 3,
    "slug": "how-to-do-things-when-payments-happen",
    "text": "How to Do Things when Payments Happen"
  }, {
    "depth": 3,
    "slug": "tradeoffs--pitfalls",
    "text": "Tradeoffs & Pitfalls"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
      a: "a",
      "astro-image": "astro-image",
      blockquote: "blockquote",
      em: "em",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      li: "li",
      nav: "nav",
      ol: "ol",
      p: "p",
      strong: "strong",
      ul: "ul",
      ...props.components
    },
    _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.nav, {
      class: "toc",
      children: createVNode(_components.ol, {
        class: "toc-level toc-level-1",
        children: createVNode(_components.li, {
          class: "toc-item toc-item-h2",
          children: [createVNode(_components.a, {
            class: "toc-link toc-link-h2",
            href: "#set-up",
            children: "Set up"
          }), createVNode(_components.ol, {
            class: "toc-level toc-level-2",
            children: [createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#what-you-need",
                children: "What you need"
              })
            }), createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#donations-vs-tips",
                children: "Donations vs Tips"
              })
            }), createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: [createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#how-to-get-tips-with-stripe",
                children: "How to Get Tips with Stripe"
              }), createVNode(_components.ol, {
                class: "toc-level toc-level-3",
                children: createVNode(_components.li, {
                  class: "toc-item toc-item-h4",
                  children: createVNode(_components.a, {
                    class: "toc-link toc-link-h4",
                    href: "#stripe-customers-portal",
                    children: "Stripe Customers Portal"
                  })
                })
              })]
            }), createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: [createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#how-to-get-tips-with-paypal",
                children: "How to Get Tips with PayPal"
              }), createVNode(_components.ol, {
                class: "toc-level toc-level-3",
                children: [createVNode(_components.li, {
                  class: "toc-item toc-item-h4",
                  children: createVNode(_components.a, {
                    class: "toc-link toc-link-h4",
                    href: "#paypalme",
                    children: "PayPal.me"
                  })
                }), createVNode(_components.li, {
                  class: "toc-item toc-item-h4",
                  children: createVNode(_components.a, {
                    class: "toc-link toc-link-h4",
                    href: "#paypal-donation-button",
                    children: "PayPal Donation Button"
                  })
                }), createVNode(_components.li, {
                  class: "toc-item toc-item-h4",
                  children: createVNode(_components.a, {
                    class: "toc-link toc-link-h4",
                    href: "#paypal-payments-buttons",
                    children: "PayPal Payments Buttons"
                  })
                })]
              })]
            }), createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#how-to-do-things-when-payments-happen",
                children: "How to Do Things when Payments Happen"
              })
            }), createVNode(_components.li, {
              class: "toc-item toc-item-h3",
              children: createVNode(_components.a, {
                class: "toc-link toc-link-h3",
                href: "#tradeoffs--pitfalls",
                children: "Tradeoffs & Pitfalls"
              })
            })]
          })]
        })
      })
    }), "\n", "\n", "\n", "\n", "\n", "\n", createVNode(_components.h2, {
      id: "set-up",
      children: createVNode(_components.a, {
        href: "#set-up",
        children: "Set up"
      })
    }), "\n", createVNode(_components.p, {
      children: "In this article, we\u2019re going to show you how to create a tip jar with PayPal and\nStripe, the easy way!"
    }), "\n", createVNode(_components.h3, {
      id: "what-you-need",
      children: createVNode(_components.a, {
        href: "#what-you-need",
        children: "What you need"
      })
    }), "\n", createVNode(_components.p, {
      children: "In order to set up your tip jars you will need an account with the payment\nprocessor that you wish to use. In this tutorial, we will use the following\nprocessors:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://stripe.com/",
          children: "Stripe"
        }), ": The most popular payment processor among\ndevelopers. As most payment processors out there, it\u2019s not friendly to NSFW\ncreators (blame credit card companies) so if your content toes the line of\nwhat\u2019s allowed once again make sure to transfer out your money often."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.paypal.com/",
          children: "PayPal"
        }), ": Probably the most famous payment processor\non the web. Not friendly to unconventional (read: NSFW) creators (make sure\nnot to mention that in your details, and to set up your account to transfer\nout money often), but tends to be the preferred way to pay for many people,\nespecially in Latin American countries. To get the full power of PayPal, make\nsure to create a ", createVNode(_components.strong, {
          children: "business account"
        }), "."]
      }), "\n"]
    }), "\n", createVNode("div", {
      class: "warning",
      children: createVNode(_components.p, {
        children: "You might need additional set up after you create an account in order to be able\nto use the features we\u2019ll discuss. Do reach out if you need help, and let me\nknow if this article needs more or updated information."
      })
    }), "\n", createVNode(_components.h3, {
      id: "donations-vs-tips",
      children: createVNode(_components.a, {
        href: "#donations-vs-tips",
        children: "Donations vs Tips"
      })
    }), "\n", createVNode(_components.p, {
      children: "TODO: use some words on the distinction and the legal warnings"
    }), "\n", createVNode(_components.h3, {
      id: "how-to-get-tips-with-stripe",
      children: createVNode(_components.a, {
        href: "#how-to-get-tips-with-stripe",
        children: "How to Get Tips with Stripe"
      })
    }), "\n", createVNode(_components.p, {
      children: ["The easiest way to get tips with Stripe is by using their ", createVNode(_components.a, {
        href: "https://stripe.com/docs/payment-links",
        children: "payment\nlinks"
      }), " feature. This feature allows you\nto select either a product to sell, a subscription or a donation, and (after\nsome setup) will give you a link to a checkout page that you can give to anyone\nto collect payments."]
    }), "\n", createVNode(_components.p, {
      children: "This is how the set up page looks when you select the donation option:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __0___choose_what_to_pay_stripe_png__,
        alt: "TODO:alt"
      })
    }), "\n", createVNode(_components.p, {
      children: "As you play around with the settings, you\u2019ll see the preview of the checkout\npage update on the right. If you want to keep it simple, you don\u2019t need to mess\naround with settings, but you can explore advanced options for more fun\nopportunities. For example:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["You can add ", createVNode(_components.strong, {
          children: "custom fields"
        }), " to collect more information from payers. For\nexample, you could let people fill in information about a custom doodle in\nexchange for their tip!"]
      }), "\n", createVNode(_components.li, {
        children: ["You can also ", createVNode(_components.strong, {
          children: "limit the number of payments"
        }), " to only allow the link to be\nused a certain number of times. This can be useful for anything you want to\nkeep \u201Climited edition\u201D."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Make sure to also check the \u201Cafter payment\u201D tab to confirm what users will see\nonce their payment is successful. You can either use Stripe\u2019s default page or\nyou can choose to redirect them to a specific page on your website."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __1___after_payment_stripe_png__,
        alt: "TODO:alt"
      })
    }), "\n", createVNode("div", {
      class: "warning",
      children: createVNode(_components.p, {
        children: ["Make sure that neither of these pages are showing your personal information!\nMake sure to try making a few test payments yourself to ensure that Stripe isn\u2019t\nleaking data to the payer. Check your ", createVNode(_components.a, {
          href: "https://dashboard.stripe.com/settings/public",
          children: "public business details\npage"
        }), " to hide or change\ninformation."]
      })
    }), "\n", createVNode(_components.h4, {
      id: "stripe-customers-portal",
      children: createVNode(_components.a, {
        href: "#stripe-customers-portal",
        children: "Stripe Customers Portal"
      })
    }), "\n", createVNode(_components.p, {
      children: ["While this might not be necessary for one-time donations, subscriptions need a\nportal that allows people to manage their information. Luckily, Stripe offers a\npremade one. You can read more about ", createVNode(_components.a, {
        href: "https://stripe.com/docs/no-code/customer-portal",
        children: "setting up a customer portal\nhere"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "how-to-get-tips-with-paypal",
      children: createVNode(_components.a, {
        href: "#how-to-get-tips-with-paypal",
        children: "How to Get Tips with PayPal"
      })
    }), "\n", createVNode(_components.h4, {
      id: "paypalme",
      children: createVNode(_components.a, {
        href: "#paypalme",
        children: "PayPal.me"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://www.paypal.com/paypalme/",
        children: "PayPal.me"
      }), " is PayPal equivalent to Stripe\u2019s\npayment links (but without the ability to sell a subscription or specific\nproduct). After setting this up, you will be given a link that allows anyone to\nsend you an amount of their choice. You can also request a specific amount by\nadding it at the end of your link. PayPal.me does not require a business account\nand can be used for everyday things like splitting bills."]
    }), "\n", createVNode(_components.p, {
      children: ["Quoting the ", createVNode(_components.a, {
        href: "https://www.paypal.com/us/cshelp/article/what-is-paypalme-help432",
        children: "help\narticle"
      }), ":"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "How do I request a specific amount via paypal.me? Just add the amount you want\nto request to the end of your link. For example, use paypal.me/DiaRusso/25 to\nrequest 25.00 USD. The request will be made in your default currency, which\nyou can change at any time in your PayPal Account settings. You can request a\nspecific currency by adding its code to the amount. To ask for Australian\nDollars, for example, you would use paypal.me/DiaRusso/25AUD."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "paypal-donation-button",
      children: createVNode(_components.a, {
        href: "#paypal-donation-button",
        children: "PayPal Donation Button"
      })
    }), "\n", createVNode(_components.p, {
      children: ["If you want the full power of the PayPal donation experience (and aren\u2019t selling\nspecific goods or services), you can use the ", createVNode(_components.a, {
        href: "https://www.paypal.com/donate/buttons/manage",
        children: "PayPal Donations\nButton"
      }), ". This allows a ton of\ncustomization (even more than Stripe) and works both as a link you can give out\non socials or as HTML code you can embed on your website."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __2___paypal_options_png__,
        alt: "TODO:alt"
      })
    }), "\n", createVNode(_components.p, {
      children: "One fun bit that PayPal allows is actual fundraising campaigns with defined\ngoals. It also allows payers to choose between different preset amounts (which\nrequire separate payment links with Stripe), and to specify an \u201Cinitiative\u201D they\nwant their donation to go towards (which you can likely hack together with\nStripe custom fields)."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __3___campaign_page_preview_png__,
        alt: "TODO:alt"
      })
    }), "\n", createVNode(_components.p, {
      children: "PayPal donation buttons also allow for recurring donations, so if you aren\u2019t\nlooking to sell products, this can be a good way to get no-strings-attached,\nrecurring tips from your supporters."
    }), "\n", createVNode("div", {
      class: "warning",
      children: createVNode(_components.p, {
        children: "Since there\u2019s a lot of possible options for PayPal donations, we won\u2019t go through\neach possibility. Let me know if you end up stuck, and I\u2019ll do my best to help!"
      })
    }), "\n", createVNode(_components.h4, {
      id: "paypal-payments-buttons",
      children: createVNode(_components.a, {
        href: "#paypal-payments-buttons",
        children: "PayPal Payments Buttons"
      })
    }), "\n", createVNode(_components.p, {
      children: ["If you want to actually sell things, and not simply accept donations, you can use\n", createVNode(_components.a, {
        href: "https://www.paypal.com/buttons/",
        children: "PayPal\u2019s Buttons integration"
      }), ". There are a lot\nof different types of buttons (especially if you\u2019re logged in), but the ones you\nshould consider using are the \u201Csmart payments button\u201D and the \u201Csmart donations button\u201D."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __4___paypal_buttons_png__,
        alt: "TODO:alt"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Once again, there are ", createVNode(_components.em, {
        children: "a lot of options here"
      }), " (including the ability to allow\npeople to set their own prices for products or add custom requests), but at the\nend of the flow you will once again get a link to a PayPal page with checkout\noptions (not available for subscriptions), as well as HTML code you can add to\nyour website to display the payment button there."]
    }), "\n", createVNode(_components.p, {
      children: ["Check out ", createVNode(_components.a, {
        href: "https://github.com/essential-randomness/essential-random/blob/97cff874198d07612e4d668c01d35cdc4d24e8a0/src/components/PayPalButton.tsx#L23",
        children: "my subscriptions page"
      }), "\nfor a few more options that you can add to this code, like the ability to not require\nshipping information or redirect the user to a specific page after payment."]
    }), "\n", createVNode(_components.h3, {
      id: "how-to-do-things-when-payments-happen",
      children: createVNode(_components.a, {
        href: "#how-to-do-things-when-payments-happen",
        children: "How to Do Things when Payments Happen"
      })
    }), "\n", createVNode(_components.p, {
      children: "Both PayPal and Stripe allow you to redirect the user to a specific page after payment,\nbut for anything more complex you will need a service that\u2019s able to receive webhooks."
    }), "\n", createVNode(_components.p, {
      children: "The concept of webhook is beyond this guide. If you have some money to spend monthly\nZapier allows to react to both Stripe and PayPal events without needing to code, while\nPipeDream is a free option that however requires some coding abilities."
    }), "\n", createVNode(_components.p, {
      children: "Stay tuned for a guide on webhooks, cause they\u2019re super cool!"
    }), "\n", createVNode(_components.h3, {
      id: "tradeoffs--pitfalls",
      children: createVNode(_components.a, {
        href: "#tradeoffs--pitfalls",
        children: "Tradeoffs & Pitfalls"
      })
    }), "\n", createVNode(_components.p, {
      children: "While this is a cool way to avoid additional intermediaries between you and payment\nprocessors, there are a few downsides you should be aware of:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Tax Handling:"
        }), " Many 3rd parties will automatically handle taxes on your payments.\nWith this system, you will need to do so yourself. Make sure you consult an accountant\nand/or check the laws of your place of residence."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Leaking personal information:"
        }), " If you aren\u2019t careful it can be easy to accidentally\nleak personal information while using this method. Run a few tests yourself after setting\nthese up and make sure there\u2019s no information you want to hide available anywhere!"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Seeing personal information:"
        }), " Since you\u2019ll be taking payments directly, you\u2019ll be\nable to see information about your buyers that other 3rd parties (like Patreon) might\nhide by default. While this might not be a problem for you, it might deter people from\nusing your links."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Thank you for reading through the end. If you do want to test this live (and see more\narticles like this), head to my ", createVNode(_components.a, {
        href: "/support-me#donate",
        children: "\u201Csupport me\u201D page"
      }), "! Let me know\nif this was useful, or if more details are needed by writing me on my socials."]
    }), "\n", createVNode(_components.p, {
      children: "See you soon!"
    }), "\n", createVNode("style", {
      children: `
    .warning {
        background-color: yellow;
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
const url = "src/content/posts/tip-jar-with-stripe-and-paypal/index.mdx";
const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/posts/tip-jar-with-stripe-and-paypal/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/essentialrandomness/projects/programming/essential-random/src/content/posts/tip-jar-with-stripe-and-paypal/index.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
