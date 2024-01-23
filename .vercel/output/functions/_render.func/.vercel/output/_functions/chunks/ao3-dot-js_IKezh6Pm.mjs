import { _ as __astro_tag_component__, F as Fragment, X as createVNode } from './astro_va4p0pd8.mjs';
import { $ as $$Image } from './pages/generic_eRRtI0eS.mjs';
import 'clsx';

const frontmatter = {
  "name": "AO3.js",
  "links": ["https://github.com/essential-randomness/AO3.JS", "https://www.npmjs.com/package/@bobaboard/ao3.js"],
  "description": "Data-fetching library for [Archive of Our Own](http://archiveofourown.org/), written in TypeScript. \nA great project for aspiring open source contributors to take their first steps in!\n",
  "status": "Active development",
  "preview": "./ao3js-logo.png",
  "tags": ["code: open source", "recruitment: seeking maintainer", "category: software library"]
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
const url = "src/content/projects/ao3-dot-js.mdx";
const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/projects/ao3-dot-js.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/essentialrandomness/projects/programming/essential-random/src/content/projects/ao3-dot-js.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
