
import { useState } from 'react';
import type { TRPCRouter } from '../../../../server/src/router';
import { createReactQueryHooks } from '@trpc/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const BACKEND_URL: string = "http://localhost:8080/cat";
export const trpc = createReactQueryHooks<TRPCRouter>();

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => trpc.createClient({ url: BACKEND_URL }));

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <span>Hello World!</span>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
