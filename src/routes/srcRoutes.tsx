import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const ScreenHome = lazy(() => import("../screens/Home/screensHome"));

const SrcRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>...</div>}>
      <Routes>
        <Route path="/" element={<ScreenHome />} />
      </Routes>
    </Suspense>
  );
};

export default SrcRoutes;
