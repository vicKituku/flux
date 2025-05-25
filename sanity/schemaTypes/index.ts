import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import automation from "./automation";
import automationCategory from './automationCategory'
import blogCategory from './blogCategory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType, 
    postType, 
    authorType, 
    automation, 
    automationCategory, 
    blogCategory,
  ],
};
