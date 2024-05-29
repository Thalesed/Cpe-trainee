import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Routes from "./routes.jsx";

const queryClient = new QueryClient ({
defaultOptions:{
queries:{
retry: false,
staleTime:30000,
}
}

})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <Routes />
    </QueryClientProvider>
  </React.StrictMode>,
 
)
