import { type SchemaTypeDefinition } from "sanity";
import { blogType } from "./blog";
import { authorType } from "./author";
import { privacyType } from "./privacy";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType, authorType, privacyType],
};
