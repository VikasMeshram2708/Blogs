import { defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "blog",
  title: "Blog",
  description: "Blogs",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
    }),
    defineField({
      title: "Created_On",
      name: "created_on",
      type: "datetime",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
  ],
});
