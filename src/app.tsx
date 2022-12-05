import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Fact } from "./components/fact";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Fact />
      </QueryClientProvider>
    </div>
  );
}

export default App;
