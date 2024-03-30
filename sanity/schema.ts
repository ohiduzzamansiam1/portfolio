// import SchemaTypeDefinition from 'sanity'
import { SchemaTypeDefinition } from "sanity";

// Define the schema
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "project",
      title: "Project",
      type: "document",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "description",
          title: "Description",
          type: "string",
          validation: (Rule) => Rule.required().max(300),
          description: "Max 300 characters",
        },
        {
          name: "link",
          title: "Link",
          type: "url",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "github_link",
          title: "Github Link",
          type: "url",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true, // Enables hotspot for image cropping
          },
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "ring",
          title: "Ring",
          type: "string",
          options: {
            list: [
              { title: "Red", value: "ring-red-500" },
              { title: "Green", value: "ring-green-500" },
              { title: "Indigo", value: "ring-indigo-500" },
              { title: "Yellow", value: "ring-yellow-500" },
              { title: "Blue", value: "ring-blue-500" },
              { title: "Purple", value: "ring-purple-500" },
              { title: "Pink", value: "ring-pink-500" },
              { title: "Teal", value: "ring-teal-500" },
              { title: "Gray", value: "ring-gray-500" },
            ],
            layout: "radio", // Display options as radio buttons
          },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};
