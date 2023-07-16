import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

import { setupInterceptor } from 'service/axios-config';
import useAuthStore from 'store/authStore';
import ThemeConfig from 'styles/theme';

import AppRoutes from './routes';
import FallBackError from './pages/error/ErrorFallback';

const client = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
    },
  },
});

const App = () => {
  const { logout } = useAuthStore();

  setupInterceptor(logout);

  return (
    <QueryClientProvider client={client}>
      <ThemeConfig>
        <ErrorBoundary FallbackComponent={FallBackError} onReset={details => {}}>
          <AppRoutes />
        </ErrorBoundary>
      </ThemeConfig>
    </QueryClientProvider>
  );
};

export default App;
