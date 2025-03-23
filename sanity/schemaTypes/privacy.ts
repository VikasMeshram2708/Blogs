import { defineField, defineType, SchemaTypeDefinition } from "sanity";

export const privacyType: SchemaTypeDefinition = defineType({
  name: "privacy",
  title: "Privacy",
  description: "Privacy",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              title: "Content Image",
              name: "contentImage",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      title: "Created_On",
      name: "created_on",
      type: "datetime",
    }),
  ],
});
