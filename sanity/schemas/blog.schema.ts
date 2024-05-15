const schema = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "readingTime",
      title: "Reading Time",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
    },
    {
      name: "releaseDate",
      title: "Release Date",
      type: "date",
      options: {
        dateFormat: "MM-DD-YYYY",
        calendarTodayLabel: "Today",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "code",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative Text",
            },
          ],
        },
      ],
    },
  ],
};

export default schema;
