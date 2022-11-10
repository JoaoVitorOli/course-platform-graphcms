import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.GRAPHCMS_URI,
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
    },
    cache: new InMemoryCache(),
});

export default client;