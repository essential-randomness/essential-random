import { _ as __astro_tag_component__, F as Fragment, X as createVNode } from './astro_va4p0pd8.mjs';
import { $ as $$Image } from './pages/generic_eRRtI0eS.mjs';
import 'clsx';

const frontmatter = {
  "name": "FujoBoard",
  "links": [{
    "url": "https://www.fujoboard.com/",
    "type": "store",
    "name": "store"
  }, "https://twitter.com/fujoboard", "https://fujoboard.tumblr.com"],
  "description": "Feeling nostalgic for the good ol' yaoi-paddle times? Come [buy the new, improved version](https://www.fujoboard.com/)!",
  "status": "Launched",
  "preview": "./omegaverse-fujos.webp",
  "tags": ["event: April 1st", "merch: on sale", "category: product"]
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
const url = "src/content/projects/fujoboard.mdx";
const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/projects/fujoboard.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/essentialrandomness/projects/programming/essential-random/src/content/projects/fujoboard.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
