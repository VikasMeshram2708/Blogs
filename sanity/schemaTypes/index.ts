import { type SchemaTypeDefinition } from "sanity";
import { blogType } from "./blog";
import { authorType } from "./author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType, authorType],
};
