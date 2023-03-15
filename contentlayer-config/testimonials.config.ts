import * as _jsx_runtime from "react/jsx-runtime";

import {
  defineDocumentType,
  defineNestedType,
} from "contentlayer/source-files";

const Testimonial = defineNestedType(() => ({
  name: "Testimonial",
  fields: {
    from: {
      type: "string",
      description: "The author of the testimonial",
    },
    message: {
      type: "string",
      description: "The content of the testimonial",
      required: true,
    },
  },
}));

export const Testimonials = defineDocumentType(() => ({
  name: "Testimonials",
  filePathPattern: `_testimonials.yml`,
  contentType: "data",
  fields: [
    {
      type: "list",
      name: "testimonials",
      of: Testimonial,
      required: true,
    },
  ],
}));
