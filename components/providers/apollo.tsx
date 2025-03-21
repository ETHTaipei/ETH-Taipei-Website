"use client";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject,
  DocumentNode,
} from "@apollo/client";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // True on server, false on client
    uri: "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clrhiw5ac1aas01w2yynlhlw9/master",
    cache: new InMemoryCache(),
  });
}

function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If there's initial state from SSR, restore it
  if (initialState) {
    const existingCache = _apolloClient.cache.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSR, always create a new client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return apolloClient;
}

function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}

export function ApolloWrapper({
  children,
  pageProps,
}: {
  children: React.ReactNode;
  pageProps: any;
}) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}

export async function getInitialData(queries: DocumentNode[]) {
  const apolloClient = initializeApollo();

  try {
    for (const query of queries) {
      await apolloClient.query({ query });
      // Add delay between requests to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    return apolloClient.cache.extract();
  } catch (error) {
    console.error("Error fetching data:", error);
    return {};
  }
}
