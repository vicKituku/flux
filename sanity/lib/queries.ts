import { groq } from "next-sanity";

export const getAutomations = groq`
  *[_type == "automation"] {
    _id,
    title,
    description,
    image,
    "slug": slug.current,
    _createdAt
  }
`;

export const getCategories = groq`
  *[_type == "category"] {
    _id,
    title,
    "slug": slug.current,
    description
  }
`; 