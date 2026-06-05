import { useEditor, EditorContext, EditorContent } from "@tiptap/react";
import { convert } from "@fujocoded/astdapters-bluesky-starter";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

export function AstrolabeEditor() {
  const textRef = React.useRef<HTMLInputElement>(null);
  const facetsRef = React.useRef<HTMLInputElement>(null);
  const editor = useEditor({
    immediatelyRender: false,
    // https://tiptap.dev/docs/guides/performance#gain-more-control-over-rendering
    shouldRerenderOnTransaction: false,
    extensions: [StarterKit],
    content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Hello—this time for real—from ",
            },
            {
              type: "text",
              marks: [
                {
                  type: "link",
                  attrs: {
                    href: "https://github.com/FujoWebDev/astrolabe",
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    class: null,
                  },
                },
              ],
              text: "Astrolabe",
            },
            {
              type: "text",
              text: "!",
            },
          ],
        },
      ],
    },
    onCreate: async ({ editor }) => {
      if (!textRef.current || !facetsRef.current) {
        return;
      }
      console.dir(editor.getJSON());
      const converted = await convert(editor.getJSON());
      textRef.current.value = converted.text.text;
      facetsRef.current.value = JSON.stringify(converted.text.facets ?? []);
    },
    onUpdate: async ({ editor }) => {
      console.dir(editor.getJSON());
      if (!textRef.current || !facetsRef.current) {
        return;
      }
      const converted = await convert(editor.getJSON());
      textRef.current.value = converted.text.text;
      facetsRef.current.value = JSON.stringify(converted.text.facets ?? []);
    },
  });
  return (
    <EditorContext.Provider value={{ editor }}>
      <EditorContent
        className="astrolabe-editor"
        editor={editor}
        role="presentation"
      />
      <input type="hidden" name="text" ref={textRef} />
      <input type="hidden" name="facets" ref={facetsRef} />
    </EditorContext.Provider>
  );
}
