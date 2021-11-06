import { ApolloClient, InMemoryCache } from "@apollo/client";

const baseURL = {
  live: "",
  dev: "http://localhost:4000/graphql",
};

export const client = new ApolloClient({
  uri: baseURL.dev,
  cache: new InMemoryCache(),
});
