import { _ as __astro_tag_component__, F as Fragment, X as createVNode } from './astro_va4p0pd8.mjs';
import { $ as $$Image } from './pages/generic_eRRtI0eS.mjs';
import 'clsx';

const frontmatter = {
  "name": "RobinBoob",
  "links": [{
    "name": "Store",
    "type": "store",
    "url": "https://www.robinboob.com"
  }],
  "description": "A super-serious <u>parody</u> of NFTs. Buy a certificate and become the exclusive owner of your favorite ship!\n",
  "status": "Live and selling!",
  "preview": "./robinboob.png",
  "tags": ["code: closed source", "event: April 1st", "merch: on sale", "category: product"]
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
const url = "src/content/projects/robinboob.mdx";
const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/projects/robinboob.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/essentialrandomness/projects/programming/essential-random/src/content/projects/robinboob.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
