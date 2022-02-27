import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

const App: React.FC = () => {
  const { t } = useTranslation();

  const LazyHome = React.lazy(() => import("./pages/Home"));
  const LazyProgram = React.lazy(() => import("./pages/Program"));
  const LazyStudents = React.lazy(() => import("./pages/Students"));
  const LazyTeam = React.lazy(() => import("./pages/Team"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        {/* Router V6:
         https://reactrouter.com/docs/en/v6/examples/lazy-loading#preview */}
        <Route path="/home" element={
            <React.Suspense fallback={<>{t('loading')}</>}>
                <LazyHome />
              </React.Suspense>
          } />
        <Route path="/students" element={
            <React.Suspense fallback={<>{t('loading')}</>}>
                <LazyStudents />
              </React.Suspense>
          } />
        <Route path="/program" element={
            <React.Suspense fallback={<>{t('loading')}</>}>
                <LazyProgram />
              </React.Suspense>
          } />
        <Route path="/team" element={
            <React.Suspense fallback={<>{t('loading')}</>}>
                <LazyTeam />
              </React.Suspense>
          } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
