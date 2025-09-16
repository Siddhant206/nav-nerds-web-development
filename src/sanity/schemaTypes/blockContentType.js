import { defineType, defineArrayMember } from "sanity";
import { ImageIcon, CodeIcon } from "@sanity/icons";

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
        { title: "Quote", value: "blockquote" },
        { title: "Justify", value: "justify" },
        { title: "Align Left", value: "left" },
        { title: "Align Center", value: "center" },
        { title: "Align Right", value: "right" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
        { title: "Circle", value: "circle" },
        { title: "Square", value: "square" },
        { title: "Dash", value: "dash" },
        { title: "Check", value: "check" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike Through", value: "strike-through" }, // Added this
          { title: "Code", value: "code" },
          { title: "Highlight", value: "highlight" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),

   // Custom imageWithText block
    defineArrayMember({
      type: "object",
      name: "imageWithText",
      title: "Image",
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: { hotspot: true },
          validation: (Rule) => Rule.required(),
        },
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
        {
          name: "alignment",
          type: "string",
          title: "Alignment",
          options: {
            list: [
              { title: "Left", value: "left" },
              { title: "Right", value: "right" },
              { title: "Center", value: "center" },
            ],
          },
          initialValue: "left",
        },
        {
          name: "size",
          type: "string",
          title: "Size",
          options: {
            list: [
              { title: "Small", value: "small" },
              { title: "Medium", value: "medium" },
              { title: "Large", value: "large" },
            ],
          },
          initialValue: "medium",
        },
        {
          name: "text",
          type: "array",
          title: "Text Content",
          of: [
            {
              type: "block",
              styles: [
                { title: "Normal", value: "normal" },
                { title: "H4", value: "h4" },
                { title: "H5", value: "h5" },
                { title: "H6", value: "h6" },
              ],
              marks: {
                decorators: [
                  { title: "Strong", value: "strong" },
                  { title: "Emphasis", value: "em" },
                ],
              },
            },
          ],
        },
      ],
      preview: {
        select: {
          title: "alt",
          media: "image",
        },
      },
    }), 
    // Custom code block
    defineArrayMember({
      type: "object",
      name: "code",
      title: "Code Block",
      icon: CodeIcon,
      fields: [
        {
          name: "code",
          type: "text",
          title: "Code",
          options: {
            language: "javascript", // You can set a default
          },
        },
        {
          name: "language",
          type: "string",
          title: "Language",
          options: {
            list: [
              { title: "JavaScript", value: "javascript" },
              { title: "TypeScript", value: "typescript" },
              { title: "HTML", value: "html" },
              { title: "CSS", value: "css" },
              { title: "Python", value: "python" },
              { title: "JSON", value: "json" },
            ],
          },
        },
      ],
    }),

   

    // Break/Separator
    defineArrayMember({
      type: "object",
      name: "break",
      title: "Break",
      fields: [
        {
          name: "style",
          type: "string",
          title: "Break Style",
          options: {
            list: [
              { title: "Line", value: "line" },
              { title: "Space", value: "space" },
            ],
          },
          initialValue: "line",
        },
      ],
    }),
  ],
});
