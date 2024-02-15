import { QueryClient, QueryClientProvider } from "react-query";
import styles from "./App.module.scss";
import { TableOfContents } from "./components/TableOfContents/TableOfContents";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className={styles.app}>
      <QueryClientProvider client={queryClient}>
        <TableOfContents />
      </QueryClientProvider>
    </div>
  );
}

export default App;
