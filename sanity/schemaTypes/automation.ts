import { defineField } from "sanity";
export default {
  name: "automation",
  title: "Automation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "This is your automation title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "What does the automation do",
      type: "string",
      validation: (rule) => rule.min(50).max(250).required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      type: "reference",
      to: [{ type: "author" }],
      name: "author",
      title: "Author",
    }),
  ],
};
