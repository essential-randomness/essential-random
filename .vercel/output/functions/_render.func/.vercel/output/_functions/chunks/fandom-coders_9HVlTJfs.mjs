import { _ as __astro_tag_component__, F as Fragment, X as createVNode } from './astro_va4p0pd8.mjs';
import { $ as $$Image } from './pages/generic_eRRtI0eS.mjs';
import 'clsx';

const frontmatter = {
  "name": "Fandom Coders",
  "links": ["https://www.fancoders.com/", "https://github.com/Fandom-Coders"],
  "description": "A community dedicated to connecting coders in fandom with each other. Unlike other indie learning spaces, Fandom Coders encourages the mingling\nof both hobbyists and professionals.\n",
  "status": "Ongoing",
  "preview": "./fandom-coders.png",
  "tags": ["format: community", "category: education"]
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
const url = "src/content/projects/fandom-coders.mdx";
const file = "/Users/essentialrandomness/projects/programming/essential-random/src/content/projects/fandom-coders.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/essentialrandomness/projects/programming/essential-random/src/content/projects/fandom-coders.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
