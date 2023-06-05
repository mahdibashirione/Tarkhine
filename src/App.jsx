import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { store } from "./features/store";
import Layout from "./layout/Layout";
import routes from "./routes/routes";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Layout>
          <Routes>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Routes>
          <Toaster position="top-center" reverseOrder={false} />
        </Layout>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
