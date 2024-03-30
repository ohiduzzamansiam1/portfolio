import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  process.env.HYGRAPH_CONTENT_URL!
);
