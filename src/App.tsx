import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./components/Dashboard";
import UsersWidget from "./components/Dashboard/widgets/UsersWidget";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UsersWidget />
        <Dashboard />
      </QueryClientProvider>
    </>
  );
}

export default App;
