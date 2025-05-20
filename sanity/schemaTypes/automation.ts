import { defineField, defineType } from "sanity";

interface PreviewSelection {
  title: string;
  media: any;
}

export default defineType({
  name: "automation",
  title: "Automation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "This is your automation title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "automationCategory" }],
      validation: (rule) => rule.required(),
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
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
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare(selection: PreviewSelection) {
      const { title, media } = selection
      return {
        title,
        media
      }
    }
  }
});
