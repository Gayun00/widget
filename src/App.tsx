import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainDashboard from "./pages/MainDashboard";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MainDashboard />
      </QueryClientProvider>
    </>
  );
}

export default App;
