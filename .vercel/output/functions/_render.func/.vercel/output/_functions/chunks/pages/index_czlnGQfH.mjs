import { A as AstroError, i as UnknownContentCollectionError, f as createComponent, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, r as renderTemplate, n as renderComponent, u as unescapeHTML, e as createAstro, m as maybeRenderHead, h as addAttribute, o as renderSlot, p as renderHead } from '../astro_va4p0pd8.mjs';
import 'kleur/colors';
import 'clsx';
import { p as prependForwardSlash } from '../astro/assets-service_pKUu5FBY.mjs';
/* empty css                          */
/* empty css                          */
/* empty css                          */
import { jsx, jsxs } from 'react/jsx-runtime';
/* empty css                          */
import { SocialLinks as SocialLinks$1 } from 'social-links';
import { SiKickstarter, SiYoutube, SiPatreon, SiKofi, SiLivejournal, SiMastodon, SiNpm, SiTwitch, SiTumblr, SiGithub, SiTwitter } from '@icons-pack/react-simple-icons';
import { FaShoppingBag } from 'react-icons/fa/index.js';
import { VscGlobe } from 'react-icons/vsc/index.js';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/faqs/bobaboard-subscription.md": () => import('../bobaboard-subscription_eSlg56c6.mjs'),"/src/content/faqs/call-topic.md": () => import('../call-topic_vPJ_bqPZ.mjs'),"/src/content/faqs/cancelling.md": () => import('../cancelling_uB-1rJYj.mjs'),"/src/content/faqs/favorite-support.md": () => import('../favorite-support_IGsKT9i8.mjs'),"/src/content/faqs/icons-design.md": () => import('../icons-design_aPQbLk--.mjs'),"/src/content/faqs/not-working.md": () => import('../not-working_AVMLBGqV.mjs'),"/src/content/faqs/old-plan.md": () => import('../old-plan_nNJudNRD.mjs'),"/src/content/faqs/secure-payment.md": () => import('../secure-payment_qinwIJxy.mjs'),"/src/content/faqs/splitting-your-time.md": () => import('../splitting-your-time_fF2tnJ3_.mjs'),"/src/content/posts/doing-content-right/index.mdx": () => import('../index_CVyLstoE.mjs'),"/src/content/posts/enter-the-fujoverse/index.mdx": () => import('../index_Iwb0Beek.mjs'),"/src/content/posts/entry2.mdx": () => import('../entry2_nlceDfEB.mjs'),"/src/content/posts/extravaganzas/1-now-its-time-to-find-out/index.mdx": () => import('../index_AD-hIeT_.mjs'),"/src/content/posts/extravaganzas/index.mdx": () => import('../index_11IBEzkV.mjs'),"/src/content/posts/get-static-paths/index.mdx": () => import('../index_NnDsa2Vu.mjs'),"/src/content/posts/getting-things-started/index.mdx": () => import('../index_kHs2tyPi.mjs'),"/src/content/posts/html-css-what-next/index.mdx": () => import('../index_ELOyIttR.mjs'),"/src/content/posts/the-fight-for-the-open-web/index.mdx": () => import('../index_6azHo9wD.mjs'),"/src/content/posts/the-last-month-of-bobaboard/index.mdx": () => import('../index_YbYyYWB1.mjs'),"/src/content/posts/tip-jar-with-stripe-and-paypal/index.mdx": () => import('../index_ONA8Y8Fz.mjs'),"/src/content/projects/ao3-dot-js.mdx": () => import('../ao3-dot-js_CnhoAwNJ.mjs'),"/src/content/projects/astrolabe.mdx": () => import('../astrolabe_Hcz4zZr-.mjs'),"/src/content/projects/bobaboard.mdx": () => import('../bobaboard_AO9wF93K.mjs'),"/src/content/projects/build-our-website.mdx": () => import('../build-our-website_bCWg-Qss.mjs'),"/src/content/projects/fandom-coders.mdx": () => import('../fandom-coders_2hsm-YO0.mjs'),"/src/content/projects/fujoboard.mdx": () => import('../fujoboard_oEBmgkDU.mjs'),"/src/content/projects/fujoguide.mdx": () => import('../fujoguide_wknJ3CHf.mjs'),"/src/content/projects/personal-website.mdx": () => import('../personal-website_VvyrnJSr.mjs'),"/src/content/projects/robinboob.mdx": () => import('../robinboob_GUHB998L.mjs'),"/src/content/testimonials/a-good-friend-and-a-deep-thinker-who-tru.md": () => import('../a-good-friend-and-a-deep-thinker-who-tru_Vhjxr6Bn.mjs'),"/src/content/testimonials/always-had-a-knack-for-solving-problems.md": () => import('../always-had-a-knack-for-solving-problems_2tcE9KSd.mjs'),"/src/content/testimonials/always-really-insightful-and-has-a-belie.md": () => import('../always-really-insightful-and-has-a-belie_7XlazQEN.mjs'),"/src/content/testimonials/an-accomplished-coder-developer-consulta.md": () => import('../an-accomplished-coder-developer-consulta_Q6L6m7r3.mjs'),"/src/content/testimonials/building-bobaboard-effort.md": () => import('../building-bobaboard-effort_M4LTGcNo.mjs'),"/src/content/testimonials/fandom-old-and-software-engineer.md": () => import('../fandom-old-and-software-engineer_-fDZgjgu.mjs'),"/src/content/testimonials/first-hand-professional-silicon-valley-f.md": () => import('../first-hand-professional-silicon-valley-f_8OCsJ0tK.mjs'),"/src/content/testimonials/i-couldnt-have-gotten-me-and-my-website.md": () => import('../i-couldnt-have-gotten-me-and-my-website_lSfsUiFD.mjs'),"/src/content/testimonials/i-trust-ms-bobas-efforts-to-shape-better.md": () => import('../i-trust-ms-bobas-efforts-to-shape-better_yaqy8WBG.mjs'),"/src/content/testimonials/if-she-could-adopt-me.md": () => import('../if-she-could-adopt-me_k56M6BSs.mjs'),"/src/content/testimonials/infectious-enthusiasm.md": () => import('../infectious-enthusiasm_zjYtJ44C.mjs'),"/src/content/testimonials/one-of-the-few-people-i-trust-to-navigat.md": () => import('../one-of-the-few-people-i-trust-to-navigat_7w4QcTM6.mjs'),"/src/content/testimonials/possibly-one-of-the-most-positive-encour.md": () => import('../possibly-one-of-the-most-positive-encour_kqlXum5o.mjs'),"/src/content/testimonials/the-kind-of-person-who-can-not-only-come.md": () => import('../the-kind-of-person-who-can-not-only-come_fdZujEZU.mjs'),"/src/content/testimonials/the-only-person-ive-seen-approach-buildi.md": () => import('../the-only-person-ive-seen-approach-buildi_IvDzzncQ.mjs'),"/src/content/testimonials/uniquely-creative-and-continues-to-guide.md": () => import('../uniquely-creative-and-continues-to-guide_6WgI7fnp.mjs'),"/src/content/testimonials/zz-a-fantastic-webdev-and-social-space-crea.md": () => import('../zz-a-fantastic-webdev-and-social-space-crea_twT-oQ_r.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/socials/socials.yml": () => import('../socials_hBsZu39X.mjs')});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"faqs":{"type":"content","entries":{"bobaboard-subscription":"/src/content/faqs/bobaboard-subscription.md","call-topic":"/src/content/faqs/call-topic.md","not-working":"/src/content/faqs/not-working.md","cancelling":"/src/content/faqs/cancelling.md","icons-design":"/src/content/faqs/icons-design.md","splitting-your-time":"/src/content/faqs/splitting-your-time.md","favorite-support":"/src/content/faqs/favorite-support.md","old-plan":"/src/content/faqs/old-plan.md","secure-payment":"/src/content/faqs/secure-payment.md"}},"posts":{"type":"content","entries":{"entry2":"/src/content/posts/entry2.mdx","doing-content-right":"/src/content/posts/doing-content-right/index.mdx","get-static-paths":"/src/content/posts/get-static-paths/index.mdx","enter-the-fujoverse":"/src/content/posts/enter-the-fujoverse/index.mdx","getting-things-started":"/src/content/posts/getting-things-started/index.mdx","extravaganzas":"/src/content/posts/extravaganzas/index.mdx","html-css-what-next":"/src/content/posts/html-css-what-next/index.mdx","tip-jar-with-stripe-and-paypal":"/src/content/posts/tip-jar-with-stripe-and-paypal/index.mdx","the-last-month-of-bobaboard":"/src/content/posts/the-last-month-of-bobaboard/index.mdx","extravaganzas/1-now-its-time-to-find-out":"/src/content/posts/extravaganzas/1-now-its-time-to-find-out/index.mdx","the-fight-for-the-open-web":"/src/content/posts/the-fight-for-the-open-web/index.mdx"}},"projects":{"type":"content","entries":{"astrolabe":"/src/content/projects/astrolabe.mdx","bobaboard":"/src/content/projects/bobaboard.mdx","fujoboard":"/src/content/projects/fujoboard.mdx","fujoguide":"/src/content/projects/fujoguide.mdx","personal-website":"/src/content/projects/personal-website.mdx","robinboob":"/src/content/projects/robinboob.mdx","build-our-website":"/src/content/projects/build-our-website.mdx","ao3-dot-js":"/src/content/projects/ao3-dot-js.mdx","fandom-coders":"/src/content/projects/fandom-coders.mdx"}},"testimonials":{"type":"content","entries":{"a-good-friend-and-a-deep-thinker-who-tru":"/src/content/testimonials/a-good-friend-and-a-deep-thinker-who-tru.md","always-had-a-knack-for-solving-problems":"/src/content/testimonials/always-had-a-knack-for-solving-problems.md","always-really-insightful-and-has-a-belie":"/src/content/testimonials/always-really-insightful-and-has-a-belie.md","an-accomplished-coder-developer-consulta":"/src/content/testimonials/an-accomplished-coder-developer-consulta.md","building-bobaboard-effort":"/src/content/testimonials/building-bobaboard-effort.md","fandom-old-and-software-engineer":"/src/content/testimonials/fandom-old-and-software-engineer.md","first-hand-professional-silicon-valley-f":"/src/content/testimonials/first-hand-professional-silicon-valley-f.md","i-couldnt-have-gotten-me-and-my-website":"/src/content/testimonials/i-couldnt-have-gotten-me-and-my-website.md","i-trust-ms-bobas-efforts-to-shape-better":"/src/content/testimonials/i-trust-ms-bobas-efforts-to-shape-better.md","if-she-could-adopt-me":"/src/content/testimonials/if-she-could-adopt-me.md","infectious-enthusiasm":"/src/content/testimonials/infectious-enthusiasm.md","one-of-the-few-people-i-trust-to-navigat":"/src/content/testimonials/one-of-the-few-people-i-trust-to-navigat.md","possibly-one-of-the-most-positive-encour":"/src/content/testimonials/possibly-one-of-the-most-positive-encour.md","the-kind-of-person-who-can-not-only-come":"/src/content/testimonials/the-kind-of-person-who-can-not-only-come.md","the-only-person-ive-seen-approach-buildi":"/src/content/testimonials/the-only-person-ive-seen-approach-buildi.md","zz-a-fantastic-webdev-and-social-space-crea":"/src/content/testimonials/zz-a-fantastic-webdev-and-social-space-crea.md","uniquely-creative-and-continues-to-guide":"/src/content/testimonials/uniquely-creative-and-continues-to-guide.md"}},"socials":{"type":"data","entries":{"socials":"/src/content/socials/socials.yml"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/faqs/bobaboard-subscription.md": () => import('../bobaboard-subscription_eKCJEYee.mjs'),"/src/content/faqs/call-topic.md": () => import('../call-topic_dCtsZlm1.mjs'),"/src/content/faqs/cancelling.md": () => import('../cancelling_Di303diE.mjs'),"/src/content/faqs/favorite-support.md": () => import('../favorite-support_oHMCoeI8.mjs'),"/src/content/faqs/icons-design.md": () => import('../icons-design_ubr9_Gs_.mjs'),"/src/content/faqs/not-working.md": () => import('../not-working_74SnjFI4.mjs'),"/src/content/faqs/old-plan.md": () => import('../old-plan_7ViqTCd4.mjs'),"/src/content/faqs/secure-payment.md": () => import('../secure-payment_cV502-8D.mjs'),"/src/content/faqs/splitting-your-time.md": () => import('../splitting-your-time_gyS3MYOZ.mjs'),"/src/content/posts/doing-content-right/index.mdx": () => import('../index_eCKNNkes.mjs'),"/src/content/posts/enter-the-fujoverse/index.mdx": () => import('../index_eb3-tBSt.mjs'),"/src/content/posts/entry2.mdx": () => import('../entry2_GBQS-xMo.mjs'),"/src/content/posts/extravaganzas/1-now-its-time-to-find-out/index.mdx": () => import('../index_FQ23M3AN.mjs'),"/src/content/posts/extravaganzas/index.mdx": () => import('../index_SM-78E4J.mjs'),"/src/content/posts/get-static-paths/index.mdx": () => import('../index_9BC45dUU.mjs'),"/src/content/posts/getting-things-started/index.mdx": () => import('../index_QnI9clRj.mjs'),"/src/content/posts/html-css-what-next/index.mdx": () => import('../index_UIOsyZPl.mjs'),"/src/content/posts/the-fight-for-the-open-web/index.mdx": () => import('../index_qRd7fGpL.mjs'),"/src/content/posts/the-last-month-of-bobaboard/index.mdx": () => import('../index_RTJbMOpx.mjs'),"/src/content/posts/tip-jar-with-stripe-and-paypal/index.mdx": () => import('../index_fzkxjmyX.mjs'),"/src/content/projects/ao3-dot-js.mdx": () => import('../ao3-dot-js_kjJL-hj1.mjs'),"/src/content/projects/astrolabe.mdx": () => import('../astrolabe_q1Az-Onc.mjs'),"/src/content/projects/bobaboard.mdx": () => import('../bobaboard_h4zjbQf9.mjs'),"/src/content/projects/build-our-website.mdx": () => import('../build-our-website_Z5M-jkw7.mjs'),"/src/content/projects/fandom-coders.mdx": () => import('../fandom-coders_3eBV-sW3.mjs'),"/src/content/projects/fujoboard.mdx": () => import('../fujoboard_rWYSD9zp.mjs'),"/src/content/projects/fujoguide.mdx": () => import('../fujoguide_rbfXc-hP.mjs'),"/src/content/projects/personal-website.mdx": () => import('../personal-website_Ev8DSCZx.mjs'),"/src/content/projects/robinboob.mdx": () => import('../robinboob_563VD6mN.mjs'),"/src/content/testimonials/a-good-friend-and-a-deep-thinker-who-tru.md": () => import('../a-good-friend-and-a-deep-thinker-who-tru_7R1k-TrT.mjs'),"/src/content/testimonials/always-had-a-knack-for-solving-problems.md": () => import('../always-had-a-knack-for-solving-problems_RbPPlKJw.mjs'),"/src/content/testimonials/always-really-insightful-and-has-a-belie.md": () => import('../always-really-insightful-and-has-a-belie_yDFjIdY8.mjs'),"/src/content/testimonials/an-accomplished-coder-developer-consulta.md": () => import('../an-accomplished-coder-developer-consulta_RZymDh8K.mjs'),"/src/content/testimonials/building-bobaboard-effort.md": () => import('../building-bobaboard-effort_OQ9ZanC_.mjs'),"/src/content/testimonials/fandom-old-and-software-engineer.md": () => import('../fandom-old-and-software-engineer_e-g89Dtc.mjs'),"/src/content/testimonials/first-hand-professional-silicon-valley-f.md": () => import('../first-hand-professional-silicon-valley-f_UWkq7_em.mjs'),"/src/content/testimonials/i-couldnt-have-gotten-me-and-my-website.md": () => import('../i-couldnt-have-gotten-me-and-my-website_p8XDT3yh.mjs'),"/src/content/testimonials/i-trust-ms-bobas-efforts-to-shape-better.md": () => import('../i-trust-ms-bobas-efforts-to-shape-better_Un6iFyRo.mjs'),"/src/content/testimonials/if-she-could-adopt-me.md": () => import('../if-she-could-adopt-me_GLxiUH0G.mjs'),"/src/content/testimonials/infectious-enthusiasm.md": () => import('../infectious-enthusiasm_ht9np0z1.mjs'),"/src/content/testimonials/one-of-the-few-people-i-trust-to-navigat.md": () => import('../one-of-the-few-people-i-trust-to-navigat_AAgRRptz.mjs'),"/src/content/testimonials/possibly-one-of-the-most-positive-encour.md": () => import('../possibly-one-of-the-most-positive-encour_9OyvnRYH.mjs'),"/src/content/testimonials/the-kind-of-person-who-can-not-only-come.md": () => import('../the-kind-of-person-who-can-not-only-come_FCSaOgbx.mjs'),"/src/content/testimonials/the-only-person-ive-seen-approach-buildi.md": () => import('../the-only-person-ive-seen-approach-buildi_-9YjoniH.mjs'),"/src/content/testimonials/uniquely-creative-and-continues-to-guide.md": () => import('../uniquely-creative-and-continues-to-guide_PS8xJF4V.mjs'),"/src/content/testimonials/zz-a-fantastic-webdev-and-social-space-crea.md": () => import('../zz-a-fantastic-webdev-and-social-space-crea_7LoZ3Mo-.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$5 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Nav;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-dmqpwcec> <nav data-astro-cid-dmqpwcec> <ul data-astro-cid-dmqpwcec> <li${addAttribute([{ current: currentPath == "/" }], "class:list")} data-astro-cid-dmqpwcec> <a${addAttribute("/", "href")} data-astro-cid-dmqpwcec>Home</a> </li> <li${addAttribute([{ current: currentPath.startsWith("/posts") }], "class:list")} data-astro-cid-dmqpwcec> <a${addAttribute("/posts", "href")} data-astro-cid-dmqpwcec>Blog</a> </li> <li${addAttribute([{ current: currentPath.startsWith("/projects") }], "class:list")} data-astro-cid-dmqpwcec> <a${addAttribute("/projects", "href")} data-astro-cid-dmqpwcec>Projects</a> </li> <li${addAttribute([{ current: currentPath.startsWith("/testimonials") }], "class:list")} style="display:none;" data-astro-cid-dmqpwcec> <a${addAttribute("/testimonials", "href")} data-astro-cid-dmqpwcec>Testimonials</a> </li> <li${addAttribute([{ current: currentPath.startsWith("/support-me") }], "class:list")} data-astro-cid-dmqpwcec> <a${addAttribute("/support-me", "href")} data-astro-cid-dmqpwcec>Support me</a> </li> </ul> </nav> </header> `;
}, "/Users/essentialrandomness/projects/programming/essential-random/src/components/Nav.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Ms Boba's experimental website. Open for business while construction is ongoing."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', '<link rel="stylesheet" href="https://use.typekit.net/wkx0aeo.css"><meta charset="UTF-8"><meta property="og:site_name" content="Essential Randomness"><meta property="og:title"', '><meta name="description"', '><meta property="og:description"', '><meta property="og:image" content="/og-image.png"><meta name="twitter:image" content="/og-image.png"><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title"', '><meta property="twitter:site" content="@EssentialRandom"><meta property="twitter:description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16"><link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32"><link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png"><title>', "</title>", '<script defer data-domain="essentialrandomness.com" src="https://plausible.io/js/script.js"><\/script>', "</head> <body> ", " ", " </body></html>"])), renderSlot($$result, $$slots["head"]), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, renderSlot($$result, $$slots["head"]), renderHead(), renderComponent($$result, "Nav", $$Nav, {}), renderSlot($$result, $$slots["default"]));
}, "/Users/essentialrandomness/projects/programming/essential-random/src/layouts/Layout.astro", void 0);

const avatar = new Proxy({"src":"/_astro/avatar.-Lwgz5QV.png","width":1667,"height":1667,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/essentialrandomness/projects/programming/essential-random/src/images/avatar.png";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$ProfileCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProfileCard;
  return renderTemplate`${maybeRenderHead()}<aside class="h-card card" data-astro-cid-c7gr6yg2> <img class="avatar u-logo"${addAttribute(avatar.src, "src")} alt="Ms Boba's avatar" data-astro-cid-c7gr6yg2> <div class="p-name" data-astro-cid-c7gr6yg2> <a href="/" rel="me" class="u-url" data-astro-cid-c7gr6yg2> Essential Randomness</a> </div> <div class="nickname" data-astro-cid-c7gr6yg2>
a.k.a. <span class="p-nickname" data-astro-cid-c7gr6yg2>Ms Boba</span> </div> <div class="p-note" data-astro-cid-c7gr6yg2>
Software Engineer, Fandom Person & Other Random Stuff. Full Stack Human.
    #queeredge
</div> </aside> `;
}, "/Users/essentialrandomness/projects/programming/essential-random/src/components/ProfileCard.astro", void 0);

const $$Astro$2 = createAstro();
const $$PostPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { title, createdAt, tagline, url, tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article data-astro-cid-5xwn7h5z> <div class="tags" data-astro-cid-5xwn7h5z>${tags.map((tag) => renderTemplate`<div data-astro-cid-5xwn7h5z>${tag}</div>`)}</div> <h2 data-astro-cid-5xwn7h5z><a${addAttribute(url, "href")} data-astro-cid-5xwn7h5z>${unescapeHTML(title)}</a></h2> ${createdAt.toLocaleString("en", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })} ${tagline && renderTemplate`<div class="tagline" data-astro-cid-5xwn7h5z>${tagline}</div>`} </article> `;
}, "/Users/essentialrandomness/projects/programming/essential-random/src/components/posts/PostPreview.astro", void 0);

const socialLinks = new SocialLinks$1();
const tumblrMatches = [
  {
    match: "https?://([a-z0-9-]+).tumblr.com",
    // TODO: more may be necessary for things like extracting usernames
    group: 1
  }
];
socialLinks.addProfile("tumblr", tumblrMatches);
const GITHUB_REGEX = /^https?:\/\/(github).com\/[a-zA-Z0-9-]+\/[a-z0-9-.]+$/i;
const NPM_REGEX = /^https?:\/\/(?:www\.)(npm)js.com\/package\/(?:@[a-zA-Z0-9-]+\/)?[a-z0-9-.]+$/i;
const DREAMWIDTH_REGEX = /^https?:\/\/[a-zA-Z0-9_-]+\.dreamwidth\.org/i;
const extractWebsiteName = (url) => {
  const socialLinkAttempt = socialLinks.detectProfile(url);
  if (socialLinkAttempt) {
    return socialLinkAttempt;
  }
  const attemptGithub = GITHUB_REGEX.exec(url);
  if (attemptGithub) {
    return attemptGithub[1];
  }
  const attemptNpm = NPM_REGEX.exec(url);
  if (attemptNpm) {
    return attemptNpm[1];
  }
  const attemptDw = DREAMWIDTH_REGEX.exec(url);
  if (attemptDw) {
    return "dreamwidth";
  }
  const { host } = new URL(url);
  return host.substring(host.startsWith("www.") ? 4 : 0, host.lastIndexOf(".")).toLowerCase();
};
const maybeGetWebsiteIcon = (websiteName) => {
  switch (websiteName) {
    case "twitter":
      return /* @__PURE__ */ jsx(SiTwitter, {});
    case "github":
      return /* @__PURE__ */ jsx(SiGithub, {});
    case "tumblr":
      return /* @__PURE__ */ jsx(SiTumblr, {});
    case "twitch":
      return /* @__PURE__ */ jsx(SiTwitch, {});
    case "npm":
      return /* @__PURE__ */ jsx(SiNpm, {});
    case "mastodon":
      return /* @__PURE__ */ jsx(SiMastodon, {});
    case "dreamwidth":
      return /* @__PURE__ */ jsx(SiLivejournal, {});
    case "ko-fi":
      return /* @__PURE__ */ jsx(SiKofi, {});
    case "patreon":
      return /* @__PURE__ */ jsx(SiPatreon, {});
    case "youtube":
      return /* @__PURE__ */ jsx(SiYoutube, {});
    case "kickstarter":
      return /* @__PURE__ */ jsx(SiKickstarter, {});
    default:
      return null;
  }
};
const fromCollection = (collection) => {
  return collection.flatMap((entry) => entry.data.socials);
};

const getWebsiteIcon = (type) => {
  if (!type) {
    return /* @__PURE__ */ jsx(VscGlobe, {});
  }
  if (type == "store") {
    return /* @__PURE__ */ jsx(FaShoppingBag, {});
  }
  return maybeGetWebsiteIcon(type) || /* @__PURE__ */ jsx(VscGlobe, {});
};
const extractWebsiteData = (social) => {
  const url = typeof social == "string" ? social : social.url;
  const type = typeof social !== "string" && "type" in social ? social.type : extractWebsiteName(url);
  const name = typeof social !== "string" && "name" in social ? social.name : extractWebsiteName(url);
  return {
    url,
    name,
    type,
    icon: getWebsiteIcon(type)
  };
};
const SocialLinks = ({ links }) => {
  return /* @__PURE__ */ jsx("ul", { className: "social-links", children: links.map((social) => {
    const { url, name, icon } = extractWebsiteData(social);
    return /* @__PURE__ */ jsx("li", { "data-website": name, "aria-label": name, children: /* @__PURE__ */ jsxs("a", { href: url, children: [
      icon,
      /* @__PURE__ */ jsx("div", { className: "name", children: name }),
      /* @__PURE__ */ jsx("div", { className: "url", children: url })
    ] }) }, url);
  }) });
};

const $$Astro$1 = createAstro();
const $$OutsideBlogPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OutsideBlogPosts;
  return renderTemplate`${maybeRenderHead()}<details> <summary>Click here for my posts from socials</summary> <ul class="articles"> <li> <a href="https://www.bobaboard.com/blog/development-logs-10">
The latest 2023 BobaBoard retrospective
</a>
(and
<a href="https://docs.google.com/presentation/d/1sU6NxEvGdjoSDstIjV-HW1RU1S8ZqxVvLT8dE7TBqLA/view">
the 2022 version
</a>
)
</li> <li> <a href="https://essentialrandomness.com/posts/the-fight-for-the-open-web/">
This article about what web3 gets wrong about freedom of the web (and
        what <em>we</em> get wrong about it).
</a> </li> <li> <a href="https://essential-randomness.tumblr.com/post/671691948059426816/why-a-fandom-platform-of-our-own-is-not-about">
Why “a (transformational) fandom platform of our own” is not about
        writing down a list of features
</a> </li> <li> <a href="https://essential-randomness.tumblr.com/post/677309777029824512/dear-ms-boba-how-do-you-go-from-having-general">
How to come up with good projects to improve your programming skills
</a> </li> <li> <a href="https://twitter.com/BobaBoard/status/1381348761901785091">
“I don&apos;t usually weigh in on controversies (proceeds to weigh in on
        controversies)”, a.k.a. “the software engineering costs” thread
</a> </li> <li> <a href="https://fujoboard.com/">The FujoBoard website</a> </li> <li> <a href="https://www.bobaboard.com/faqs">The BobaBoard FUCQs v2</a>
(and <a href="https://v1.bobaboard.com/faqs">the v1 version</a>)
</li> <li> <a href="https://excalidraw.com/#json=sH6qFpUqgPL-Pq-HOj_wX,m3il9YKwhFU6xRfV21M-ig">
A large, explanatory diagram of how the tools used in modern web
        development fit together.
</a> </li> </ul> </details>`;
}, "/Users/essentialrandomness/projects/programming/essential-random/src/components/OutsideBlogPosts.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const socials = fromCollection(await getCollection("socials"));
  const posts = [
    ...await getCollection("posts", (post) => !post.data.unlisted)
  ].sort((elementA, elementB) => {
    return elementB.data.created_at.valueOf() - elementA.data.created_at.valueOf();
  });
  [...new Set(posts.flatMap((post) => post.data.tags))];
  const currentUrl = new URL(Astro2.request.url);
  const requestedTags = currentUrl.searchParams.getAll("tag");
  const displayPosts = requestedTags.length ? posts.filter(
    (post) => post.data.tags.some((tag) => requestedTags.includes(tag))
  ) : posts;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Essential Randomness \u2014 Ms Boba's Emporium of Weirdness", "data-astro-cid-fjqfnjxi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="posts" data-astro-cid-fjqfnjxi> <aside data-astro-cid-fjqfnjxi> ${renderComponent($$result2, "ProfileCard", $$ProfileCard, { "data-astro-cid-fjqfnjxi": true })} </aside> <div data-astro-cid-fjqfnjxi>  <ol data-astro-cid-fjqfnjxi> ${displayPosts.map(async (post) => {
    return renderTemplate`<li data-astro-cid-fjqfnjxi> ${renderComponent($$result2, "PostPreview", $$PostPreview, { "title": post.data.title, "createdAt": post.data.created_at, "tagline": post.data.tagline, "url": `/posts/${post.slug}`, "tags": post.data.tags, "data-astro-cid-fjqfnjxi": true })} </li>`;
  })} </ol> ${renderComponent($$result2, "OutsideBlogPosts", $$OutsideBlogPosts, { "data-astro-cid-fjqfnjxi": true })} <div data-astro-cid-fjqfnjxi>
...plus dozens of rants scattered all around the internet!
${renderComponent($$result2, "SocialLinks", SocialLinks, { "links": socials, "data-astro-cid-fjqfnjxi": true })} </div> </div> </main> ` })} `;
}, "/Users/essentialrandomness/projects/programming/essential-random/src/pages/posts/index.astro", void 0);

const $$file = "/Users/essentialrandomness/projects/programming/essential-random/src/pages/posts/index.astro";
const $$url = "/posts";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, SocialLinks as S, getEntry as a, $$ProfileCard as b, fromCollection as f, getCollection as g, index as i };
