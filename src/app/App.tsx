import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { AuthorPage, PostPage, PostsPage } from "pages";
import styles from "./App.module.css";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className={styles.wrapper}>
          <header className={styles.header} role="banner">
            <Link to="/" className={styles.title}>
              <h1>Roman Twitter</h1>
            </Link>
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
      </Router>
    </QueryClientProvider>
  );
};
