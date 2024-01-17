"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clrhiw5ac1aas01w2yynlhlw9/master",
    cache: new InMemoryCache(),
  });
};

export function ApolloWrapper({ children }: React.PropsWithChildren) {

  const client = createApolloClient()

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}