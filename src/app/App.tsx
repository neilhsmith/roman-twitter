import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { AuthorPage, PostPage, PostsPage } from "pages";
import styles from "./App.module.css";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <header className={styles.header} role="banner">
            <h1 className={styles.title}>Roman Twitter</h1>
            <p className={styles.subtitle}>EST 436 BC</p>
          </header>
          <main role="main">
            <Routes>
              <Route path="/" element={<PostsPage />} />
              <Route path="post/:id" element={<PostPage />} />
              <Route path="author/:id" element={<AuthorPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
