// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './styles/index.css';
import router from './routes/router';
import { RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  // </StrictMode>,
)
