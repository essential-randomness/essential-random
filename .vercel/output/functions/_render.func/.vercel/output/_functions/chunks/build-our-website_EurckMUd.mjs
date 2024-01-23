import { _ as __astro_tag_component__, F as Fragment, X as createVNode } from './astro_va4p0pd8.mjs';
import { $ as $$Image } from './pages/generic_eRRtI0eS.mjs';
import 'clsx';

const frontmatter = {
  "name": "Let's Build our Website! (the modern way)",
  "links": ["https://youtube.com/playlist?list=PLhXpCwgI-5FIo4KHBNSsrGi78pLECCe7Z", "https://github.com/FujoWebDev/fujowebdev", "https://fujoweb.dev"],
  "description": "This video walkthrough starts with an overview of [Git](https://git-scm.com/) \nand [GitHub](github.com/), shows how to use them to upload websites to services like \n[Vercel](https://vercel.com/)), then introduces [Astro](https://astro.build/),\na modern and approchable Static Site Generator.\n",
  "status": "Ongoing",
  "preview": "./build-our-website.png",
  "tags": ["format: video series", "category: education"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {});
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
  }) : _createMdxContent();
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/projects/build-our-website.mdx";
const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/projects/build-our-website.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/essentialrandomness/projects/programming/essential-random/src/content/projects/build-our-website.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
