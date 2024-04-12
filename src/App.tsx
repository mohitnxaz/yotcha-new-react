import React from "react";
import Router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const queryClient = new QueryClient();
  return (
    <React.Fragment>
       <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;
