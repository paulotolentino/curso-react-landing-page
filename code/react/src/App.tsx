import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import "./App.css";

const link = from([new HttpLink({ uri: "http://localhost:3001/graphql" })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyProgram = React.lazy(() => import("./pages/Program"));
const LazyTeam = React.lazy(() => import("./pages/Team"));
const LazyStudents = React.lazy(() => import("./pages/Students"));

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <React.Suspense fallback={<>{t("loading")}</>}>
          <Routes>
            <Route path="*" element={<Navigate to="/home" />} />
            {/* Router V6:
         https://reactrouter.com/docs/en/v6/examples/lazy-loading#preview */}
            <Route path="/home" element={<LazyHome />} />
            <Route path="/students" element={<LazyStudents />} />
            <Route path="/program" element={<LazyProgram />} />
            <Route path="/team" element={<LazyTeam />} />
          </Routes>
        </React.Suspense>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
