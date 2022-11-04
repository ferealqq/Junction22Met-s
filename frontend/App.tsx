import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import Root from "./src/Root";

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <Root/>
    </QueryClientProvider>
  );
}
