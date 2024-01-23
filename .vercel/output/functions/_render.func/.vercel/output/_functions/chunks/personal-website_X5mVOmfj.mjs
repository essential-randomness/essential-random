import { _ as __astro_tag_component__, F as Fragment, X as createVNode } from './astro_va4p0pd8.mjs';
import { $ as $$Image } from './pages/generic_eRRtI0eS.mjs';
import 'clsx';

const frontmatter = {
  "name": "This Website",
  "links": ["https://github.com/essential-randomness/AO3.JS", "https://www.npmjs.com/package/@bobaboard/ao3.js"],
  "description": "The experimental website of my experimental worksona. A testing ground for new features, an attempt \nto build a self-hosted Patreon, and a place to put my thoughts. Built with Astro, MDX,\nand some of my other favorite technologies!\n",
  "status": "Active development",
  "preview": "./personal-website.png",
  "tags": ["code: open source", "category: software"]
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
const url = "src/content/projects/personal-website.mdx";
const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/projects/personal-website.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/essentialrandomness/projects/programming/essential-random/src/content/projects/personal-website.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
