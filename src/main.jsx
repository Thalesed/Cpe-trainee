import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

import Routes from './routes.jsx';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      retry: false,
      stateLine: 3000000,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Routes />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
)
