import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  description: "author",
  type: "document",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "NickName",
      name: "nickName",
      type: "string",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "nickName",
        maxLength: 96,
      },
    }),
    defineField({
      title: "Bio",
      name: "bio",
      type: "text",
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: "Social Media",
      name: "socialMedia",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              title: "Platform",
              name: "platform",
              type: "string",
              options: {
                list: [
                  { title: "Instagram", value: "instagram" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Twitter", value: "twitter" },
                  { title: "Facebook", value: "facebook" },
                  { title: "YouTube", value: "youtube" },
                  { title: "Other", value: "other" },
                ],
              },
            }),
            defineField({
              title: "URL",
              name: "url",
              type: "url",
            }),
          ],
        },
      ],
    }),
    defineField({
      title: "Created On",
      name: "created_on",
      type: "datetime",
    }),
  ],
});
